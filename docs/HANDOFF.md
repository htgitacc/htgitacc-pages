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

## Hol tartunk (2026-11-01 vége)
- **Pusholva:** `origin/main` = `56d9296` (deploy sikeres). **Nincs pusholva** 1 commit: `95ce793` (AstraDocs → „Wiki Tudástár" átnevezés); a felhasználó kérte, hogy holnap menjen ki a sorrend módosításával együtt. Ellenőrzés: `git log origin/main..main`.
- `tests/futtat.sh` zöld (13 ellenőrzés), mutációval ellenőrizve: tartalék kártya véletlen kikerülése, rossz képútvonal, e-mail cím egy szövegben: mindet elkapta.
- Selyemút (sötét, alapértelmezett) + Füstölő (világos) színek a `PROJ_design/selyemut-fustolo-temak/tokens.json`-ból.
- 17 kártya (12 szerveres projekt elöl, 5 showcase), 12 képes; 3 rejtett tartalék (`tartalek-*.md`, `draft: true`)
  a GPT Codex / Cursor projekteknek (Vercelen futnak; a felhasználó adja meg őket).
- Ellenőrizve: build zöld, nincs törött kép, 390 px-en nincs vízszintes görgetés, sötét és világos téma átnézve.
- Az élő oldalt a felhasználó még nem nézte át a push után (különösen: két címkés kártya, rövidített bevezető).

## Holnapra (a felhasználó kérése)
1. **Kártyák sorrendje** módosul (`order` mező a `src/content/projects/*.md`-ben). Figyelem: a „Wiki Tudástár" és az „MLOps és NLP tudásbázis" kártya neve hasonló; döntés kell, hogy külön legyenek-e, vagy az egyik átnevezendő.
2. `projects.focus` szöveg pontosítása (a teljes eredeti: `docs/focus-eredeti-szoveg.md`).
3. A Wiki Tudástár kártya szövegei (miért) átnézése, mert a név megváltozott.
4. Utána push (jóváhagyással).

## Új ismeretek (2026-11-01)
- `tools` lista (nem `tool`): `src/content.config.ts` enum: Claude Code, GPT Codex, Cursor, GLM.
- Showcase-repók README-képei: a headless Chromiumban nincs a demó betűtípusa, 390 px-en kilóg a fejléc → **412 px** (valódi Android-szélesség) a metronóm-képeknél. A GitHub-táblázat az oszlopokat a felirathoz igazítja → HTML-táblázat rögzített `<img width>`-tel, `valign="top"`, rövid feliratokkal.
- A Node-RED kártya (`nodered-port-monitor.md`) a `htgitacc/PROJ_nodered_showcase` repóra mutat (a repó nevét a felhasználó javította; az eredeti elgépelt név megszűnt).

## NYITOTT (2026-11-01-i egyeztetés után)
Eldöntve: 
- A kártyák `why_*` / `learned_*` mezői ott maradnak üresen, ahol nincs szöveg; a felhasználó utólag pótolja.
- Eszköz-címke: a `tool` mező `tools` listává lett (`Claude Code`, `GPT Codex`, `Cursor`, `GLM`); PACE, AI scrum assistant, Selyemút: Claude Code; sm-task-tracker: Claude Code + Cursor; My Anki: GLM + Claude Code; metronóm (`metronom-showcase`, korábban `tartalek-cursor-1`): Cursor.
- Bevezető (`projects.intro`): a javasolt mondat marad.
- `projects.focus`: 2–3 mondatra rövidítve; a teljes eredeti szöveg a `docs/focus-eredeti-szoveg.md`-ben. A felhasználó később pontosítja.

Még nyitott:
1. Kép nélkül: Wiki Tudástár, MLOps, Webhook-API, WordPress-plugin; a Node-RED képeit a felhasználó készíti (showcase: `htgitacc/PROJ_nodered_showcase`, a kártyához hozzákötve).
2. `_to_delete/` (2 régi zip + 2 `.old` fájl a nyilvános repóban): a felhasználó később törli, **ne töröld**.
3. Tartalék kártyák kitöltése: szöveg, `demoUrl`, képek, `draft: false`. A metronóm kártya (`metronom-showcase.md`) 2026-11-03-án kitöltve és kint van; a Codex-tartalékok (`tartalek-codex-*`) még üresek.
4. **Push:** csak a felhasználó jóváhagyásával; előtte `git log origin/main..main` és `tests/futtat.sh`.

## Átadómondat új ablakhoz (másold be)
> Olvasd el a `/mnt/data/ai_projects/PROJ_portfolio/docs/HANDOFF.md`-t, majd menj végig velem a „Holnapra” és a „Még nyitott” listán (kártyasorrend, focus-szöveg, Wiki Tudástár); pusholni csak a jóváhagyásom után. A `_to_delete/` mappához ne nyúlj.

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
