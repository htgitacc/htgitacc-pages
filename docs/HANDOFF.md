# HANDOFF — htgitacc-pages (portfólió)

## Mi ez és hol fut
A felhasználó nyilvános portfólió-oldala: https://htgitacc.github.io/htgitacc-pages/ (Astro 7, kétnyelvű,
GitHub Pages; push a `main`-re → GitHub Actions → élő oldal). Helyi klón: `/mnt/data/ai_projects/htgitacc-pages`,
remote `htgitacc/htgitacc-pages` (a `htlearningacc` fiók collaborator, van push-joga). A régebbi előzmények
a gyökér `CLAUDE.md` státusznaplójában vannak.

**Cél (2026-11-01):** pár napon belüli bemutató. Az olvasó döntéshozó és HR-es, nem fejlesztő: a rálátást
mutatjuk (hány projekt, milyen problémák, milyen technológiák), nem a programozói tudást. Kártyánként a
Golden Circle sorrendje: **miért → mit → (hogyan = címkék) → tanulság**. A miértet nem erőltetjük.
A WordPress-portfólió (wpstage) később jön, ugyanebből a tartalomból.

## Hol tartunk (2026-11-01)
- 3 helyi commit, **NINCS PUSHOLVA** (`git log origin/main..main`): színvilág, kártya + nézet, tartalom.
- Selyemút (sötét, alapértelmezett) + Füstölő (világos) színek a `PROJ_design/selyemut-fustolo-temak/tokens.json`-ból.
- 17 kártya (12 szerveres projekt elöl, 5 showcase), 12 képes; 3 rejtett tartalék (`tartalek-*.md`, `draft: true`)
  a GPT Codex / Cursor projekteknek (Vercelen futnak; a felhasználó adja meg őket).
- Ellenőrizve: build zöld, nincs törött kép, 390 px-en nincs vízszintes görgetés, sötét és világos téma átnézve.

## NYITOTT: a felhasználó jóváhagyására vár (push előtt!)
1. A kártyák `why_*` és `learned_*` szövegei **javaslatok** (a projektdokumentációkból): a felhasználó
   hagyja jóvá / javítja. Ezek az ő motivációi.
2. Eszköz-címke (`tool`) a showcase projekteken: melyik Claude Code / GPT Codex / Cursor? Ma csak a szerveresen van.
3. Új bevezető mondat (`projects.intro` az `src/i18n/ui.ts`-ben): „Projektjeim az AI-tanulás útján: miért
   születtek, mit csinálnak, és mit tanultam belőlük." — jóváhagyásra.
4. A két hosszú `projects.focus` bekezdés (a felhasználó saját szövege) mobilon egy teljes képernyő: javaslat
   2–3 mondatra rövidíteni, a teljes szöveg menjen a későbbi „saját történet" részbe.
5. Kép nélkül: AstraDocs (a szerver headless Chromiumában nincs a Starlight rendszerbetűje → torz kép),
   MLOps, Webhook-API, Node-RED, WordPress-plugin (nincs bemutatható / nyilvános felület).
6. Tartalék kártyák kitöltése: szöveg, `tool`, `demoUrl` (Vercel), képek, `draft: false`.
   Lehetséges jelölt: `htlearningacc/PROJ_metronom_cursor` (privát).

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
    npm ci && npm run build                      # build (Node 22.12+)
    npx astro preview --host 127.0.0.1 --port 8593   # előnézet; leállítás a PORT alapján, PID-del:
    kill $(ss -ltnp | grep '127.0.0.1:8593 ' | grep -o 'pid=[0-9]*' | cut -d= -f2)

Képek (`tools/kepek/`): a szkriptek a `PROJ_design2/node_modules/playwright`-ot és egy külön telepített
`sharp`-ot használnak (`npm install sharp@0.34.5` egy ideiglenes mappában).
- `shots.js <kimenet> <jobs.json>` — képernyőképek (job: name, url, wait, click, scroll).
- `convert.js <map.json> <public> <kontaktlap.png>` — WebP (max 1440 px) + kontaktlap az átnézéshez.
- `oldal.js <url> <kimenet>` — az oldal képei 1440/390 px, sötét/világos, és automatikus ellenőrzés.
