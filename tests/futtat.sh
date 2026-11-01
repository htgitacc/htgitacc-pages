#!/usr/bin/env bash
# Teljes ellenőrzés: build, majd az épített oldal vizsgálata helyi előnézeten.
# Nem küld ki semmit, és nem érinti az élő oldalt.
set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT=8593
cd "$REPO"

if ss -tln | grep -q "127.0.0.1:${PORT} "; then
	echo "HIBA: a ${PORT}-es port foglalt; állítsd le azt, ami rajta fut (PID a port alapján), vagy válassz másikat." >&2
	exit 1
fi

echo "== 1. Build"
npm run build 2>&1 | grep -E 'error|Complete' || true

echo "== 2. Előnézet indítása (127.0.0.1:${PORT})"
npx astro preview --host 127.0.0.1 --port "$PORT" >/dev/null 2>&1 &
# A leállítás a PORT alapján, PID-del történik (a gép szabálya), nem szkriptnévvel.
leallit() { kill $(ss -ltnp | grep "127.0.0.1:${PORT} " | grep -o 'pid=[0-9]*' | cut -d= -f2) 2>/dev/null || true; }
trap leallit EXIT
for _ in $(seq 1 30); do curl -sf -o /dev/null "http://127.0.0.1:${PORT}/htgitacc-pages/" && break; sleep 1; done

echo "== 3. Oldal-ellenőrzés"
node tests/ellenoriz.cjs "http://127.0.0.1:${PORT}/htgitacc-pages/"
