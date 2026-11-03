# HANDOFF — PROJ_portfolio (GitHub: htgitacc-pages)

## Mi ez és hol fut
A felhasználó nyilvános portfólió-oldala: https://htgitacc.github.io/htgitacc-pages/ (Astro 7, kétnyelvű,
GitHub Pages; push a `main`-re → GitHub Actions → élő oldal). Helyi klón: `/mnt/data/ai_projects/PROJ_portfolio`,
remote `htgitacc/htgitacc-pages` (a név az élő cím része, ezért marad: ADR 0001) (a `htlearningacc` fiók collaborator, van push-joga). A régebbi előzmények
a gyökér `CLAUDE.md` státusznaplójában vannak.

**Cél (2026-11-01):** pár napon belüli bemutató. Az olvasó döntéshozó és HR-es, nem fejlesztő: a rálátást
mutatjuk (hány projekt, milyen problémák, milyen technológiák), nem a programozói tudást. Kártyánként a
Golden Circle sorrendje: **miért → mit → (hogyan = címkék) → tanulság**. A miértet nem erőltetjük.
A WordPress-portfólió (wpstage) később jön, ugyanebből a tartalomból.


## Hol tartunk (2026-11-03)
- **Pusholva és élesben:** `origin/main` = `6e2f7f7`, a deploy sikeres. A helyi `main` tiszta. Ellenőrzés: `git log origin/main..main`.
- `tests/futtat.sh` zöld. 19 látható kártya + 2 rejtett Codex-tartalék (`tartalek-codex-*.md`, `draft: true`).
- **Mai (11-03) változások:**
  - Új kártyák: **Hang Mindenes** (`hang-mindenes-showcase.md`, Codex, 4 kép) és **Légzésmetronóm** (`metronom-showcase.md`, Cursor, 3 kép; a korábbi `tartalek-cursor-1` helyén, demó: breath-metronome-phi.vercel.app).
  - **PACE** frissítve a showcase repóból (új képek, szöveg; a két PDF-link kikerült, mert a repóban már nincs PDF).
  - **Kártyasorrend** (`order`): PACE 1, Hang Mindenes 2, PM-mindenes 3, AI-first Scrum 4, Selyemút 5, Légzésmetronóm 6; utánuk a többi a korábbi sorrendben (30–230). A felhasználó jelezte, hogy a sorrend még változhat.
  - **Technológia-felhő** (`src/views/ProjectsView.astro`, beállítások: `src/site.config.ts`): `extraTech` (Vercel, Netlify, Turso, Docker, MCP, Brevo, Agent Skills, AI-Driven DevOps, Caddy, Nginx) a kártyák címkéi mellé kerül, duplázás nélkül; `techBlocks`: a GitHub – AI-Driven DevOps – GitHub Actions egymás mellett áll; `techLast`: a Caddy és Nginx a felhő legalján. Ami a modellsorban szerepel, az a felhőből kimarad, a kártyacímkék viszont megmaradnak.
  - Új sor a felhő alatt: **„Modellek és fejlesztési környezet"** (`llmModels` a `site.config.ts`-ben; Claude Code, Codex, Cursor, Gemini, Copilot, DeepSeek, GLM, Qwen, Kimi, Grok, Whisper, Groq, Pi, WSL, Linux, Tmux, VSCode).
  - My Anki: a „Gemini API" címke „API"-ra cserélve (a felhasználó később pontosítja).

## Még nyitott
1. **Kártyasorrend** végleges jóváhagyása; a „Wiki Tudástár" és az „MLOps és NLP tudásbázis" kártya neve hasonló: külön maradjanak, vagy az egyiket át kell nevezni?
2. `projects.focus` szöveg pontosítása (a teljes eredeti: `docs/focus-eredeti-szoveg.md`).
3. A Wiki Tudástár kártya *miért* szövege (a név megváltozott); a Hang Mindenes és a Légzésmetronóm *miért* és *tanulság* mezője üres (a felhasználó írja).
4. Kép nélküli kártyák: Wiki Tudástár, MLOps, Webhook-API, WordPress-plugin, Node-RED (a képeket a felhasználó készíti; showcase: `htgitacc/PROJ_nodered_showcase`).
5. Két Codex-tartalék kártya kitöltése (szöveg, `demoUrl`, képek, `draft: false`).
6. Az Agent Skills elnevezés („Agentic skills" is szóba jött) és a Pi besorolása a modellsorban: a felhasználó még pontosíthatja.
7. `_to_delete/` (2 régi zip + 2 `.old` fájl a nyilvános repóban): a felhasználó később törli, **ne töröld**.
8. **Push:** csak a felhasználó jóváhagyásával; előtte `git log origin/main..main` és `tests/futtat.sh`.

## Átadómondat új ablakhoz (másold be)
> Olvasd el a `/mnt/data/ai_projects/PROJ_portfolio/docs/HANDOFF.md`-t, majd menj végig velem a „Holnapra” és a „Még nyitott” listán (kártyasorrend, focus-szöveg, Wiki Tudástár); pusholni csak a jóváhagyásom után. A `_to_delete/` mappához ne nyúlj.
> Olvasd el a `/mnt/data/ai_projects/PROJ_portfolio/docs/HANDOFF.md`-t, majd menj végig velem a „Még nyitott” listán (kártyasorrend, focus-szöveg, Wiki Tudástár, tartalék kártyák); pusholni csak a jóváhagyásom után. A `_to_delete/` mappához ne nyúlj.
## Buktatók
- **Minden kép és szöveg nyilvános.** Képernyőképen nem lehet e-mail cím, név, kulcs, helyszín.
  - A `my-anki-app-showcase` repó `screenshots/myanki_02.jpg` képén olvasható a felhasználó e-mail címe:
    itt elhomályosítva (`public/assets/projects/my-anki/01.webp`); a showcase repóban a felhasználónak kell cserélnie.
  - A hegyi időjárás app felső része egy valós települést és koordinátát mutat → csak a lejjebb görgetett
    (táblázat, grafikon) rész kerülhet ki.
- **A szerveres appok jelszó mögött vannak** (`*.htlearningacc.abrdns.com` → 401), a munkarepók privátak:
  ezekre nem linkelünk, csak showcase repóra / nyilvános demóra.
- Képernyőkép a szerveres appokról: a **helyi porton** (127.0.0.1), nem a domainen. Portok (2026-11-01, `ss -tlnp`):
  weather 8501, nlp 8510, BBC 8521, sm_all 8523 (`/agilis/`), pm_all 8524 (`/waterfall/`). Ezek élő szolgáltatások:
  csak olvasó kattintás (menüpont), semmi, ami állapotot ír (pl. a weather helyszínválasztója a Slack-célpontot állítja).
- Emoji a headless Chromiumban: a `~/.local/share/fonts/NotoColorEmoji.ttf` kell hozzá (2026-11-01-én telepítve, csak a felhasználónak).
- A Cormorant régies számjegyeket rajzol → `font-variant-numeric: lining-nums` a számoknál.
- A képek `images` mezője gyökér-relatív (`/assets/...`), a base-t (`/htgitacc-pages/`) a `ProjectCard` fűzi hozzá.

## Parancsok
    tests/futtat.sh                              # build + oldal-ellenőrzés helyi előnézeten (ez a fő teszt)
    npm ci && npm run build                      # csak build (Node 22.12+)
    npx astro preview --host 127.0.0.1 --port 8593   # előnézet; leállítás a PORT alapján, PID-del:
    kill $(ss -ltnp | grep '127.0.0.1:8593 ' | grep -o 'pid=[0-9]*' | cut -d= -f2)

Képek (`tools/kepek/`): a szkriptek a `PROJ_design2/node_modules/playwright`-ot és egy külön telepített
`sharp`-ot használnak (`npm install sharp@0.34.5` egy ideiglenes mappában).
- `shots.cjs <kimenet> <jobs.json>` — képernyőképek (job: name, url, wait, click, scroll).
- `convert.cjs <map.json> <public> <kontaktlap.png>` — WebP (max 1440 px) + kontaktlap az átnézéshez.
- `oldal.cjs <url> <kimenet>` — az oldal képei 1440/390 px, sötét/világos, és automatikus ellenőrzés.
