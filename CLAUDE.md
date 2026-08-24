# CLAUDE.md — htgitacc-pages projekt napló

Ez a fájl a projekt élő "vezérlőpultja": ide kerülnek a döntések, az architektúra, a fázisok és egy dátumozott státusznapló. Minden jövőbeli Claude-munkamenet ezt olvassa el elsőként, hogy tudja, hol tartunk.

## Cél

Egy publikus GitHub Pages bemutatkozó oldal a `htgitacc` GitHub fiókhoz, amit LinkedIn-en is meg lehet osztani. Az oldal bemutatja:

- **Ki vagyok** — rövid szakmai/személyes bemutatkozás
- **Hobbik**
- **Publikus projektek** — a `htgitacc` fiók alatt publikussá tett repók (jelenleg: `pace-showcase`, `selyemut-showcase`, `ai-scrum-assistant`, `ai-scrum-assistant-make-workflow`, `my-anki-app-showcase`)

A tartalmat egyszerűen bővíteni/frissíteni lehessen (új projekt, új infó), és a változás automatikusan újragenerálja + publikálja az oldalt GitHubon (GitHub Actions).

## Kulcsdöntések (2026-08-17)

| Kérdés | Döntés | Indoklás / megjegyzés |
|---|---|---|
| Repo & URL struktúra | **Projekt oldal**: repo neve `htgitacc-pages`, publikus URL `https://htgitacc.github.io/htgitacc-pages/` | Nem foglalja el a speciális `htgitacc.github.io` "personal site" repo-slotot; később bármikor migrálható arra, ha kell root domain. |
| Projektlista forrása | **Hibrid**: minden projekthez kézzel írt rövid content-fájl (saját szöveg, kiemelt infók) + link a repóra és az élő demóra, ahol van | Teljes kontroll a "portfólió hangvételen", nem a nyers repo-description jelenik meg. Új publikus projektnél 1 content-fájlt kell hozzáadni. |
| Nyelv | **Kétnyelvű (HU + EN)** nyelvváltóval | LinkedInen nemzetközi közönség is látja; Astro i18n routing (`/hu/...`, `/en/...`) ajánlott. |
| Motor | **Astro** (statikus generátor) | A user már használ Astrot a `selyemut-showcase` projektben, konzisztens stack, gyors, egyszerű content collections. |
| Hosting/CI | **GitHub Actions → GitHub Pages** (Pages source = "GitHub Actions", nem `gh-pages` branch) | Push a `main`-re → automatikus build + deploy. |
| Egyedi domain | **Nem, egyelőre `*.github.io` cím elég** | Bármikor hozzáadható később CNAME rekorddal a repo Settings-ben, nem blokkolja az indulást. |
| Scrum projektek megjelenítése | **Egy közös kártya**: `ai-scrum-assistant` + `ai-scrum-assistant-make-workflow` együtt, "AI Scrum Assistant" néven, mindkét repóra mutató linkkel | Tisztább lista, nem duplikálja ugyanazt a témát. |
| Kiemelt (featured) projektek | `pace-showcase`, `selyemut-showcase`, `ai-scrum-assistant` (közös kártya), `my-anki-app-showcase` — gyakorlatilag **mindegyik** kiemelt | A `my-anki-app-showcase`-hez még folyamatban van a képek feltöltése a usernél — ez a kártya egyelőre "work in progress" jelöléssel készülhet, és a végleges képekkel frissül. |
| Design irány | Lásd külön **"Design / vizuális irány"** szakasz lent | A user konkrét hangulati referenciát adott (selyemúti/keleties + hegyvidéki zöld), ez irányadó a 3. fázisban. |

*(A nyitott kérdések naprakész listáját l. lent, a "Amit neked kell megcsinálnod" szakasz után — az korábban itt volt, de a 3. körben a legtöbb pont lezárult vagy odakerült.)*

## Design / vizuális irány (2026-08-17)

A user saját megfogalmazása: *"A színvilágban a keleties hangulat (Taijiquan, Selyemút) keveredjen a hegyek zöld erdős és sziklás csúcsaival. Legyen világos-sötét mód. Ezen belül egyszerű legyen, letisztult, de hangulatos, olyan embert tükrözzön, aki én vagyok."*

Ebből következő tervezési irányelvek (3. fázisban dolgozandó ki részletesen):

- **Két hangulati réteg keverése**: selyemúti/keleties motívumok (tus-fekete, vörös/cinóbervörös vagy arany akcentszín, kalligrafikus vonalvezetés, sok whitespace mint egy tekercsen) + hegyvidéki réteg (erdőzöld, szikla-szürke, mélyebb föld-tónusok) — pl. az akcentszín a selyemúti oldalról jön, az alap semleges tónusok (háttér, szövegdoboz-keretek) a hegyvidéki palettából.
- **Világos/sötét mód**: mindkettő kötelező, CSS `prefers-color-scheme` + kézi váltógomb; a sötét módban a "tinta/éjszakai hegy" hangulat, világos módban a "papír/selyem" hangulat erősödhet.
- **Letisztultság**: kevés dekoráció, nagy tipográfiai hangsúly, a projektkártyák és a bio egyszerű, rácsos elrendezésben; a "keleties" motívum inkább szín/vonal/tér-arány szinten jelenjen meg, ne tömör mintázatként (nehogy giccses legyen).
- Konkrét szín-hex kódok, betűtípus-választás és esetleges egyedi grafikai elem (pl. egy stilizált hegy/selyemszál motívum a fejlécben) a 3. fázis (Design & layout) feladata — ekkor érdemes 2-3 konkrét paletta-variációt bemutatni jóváhagyásra.

## Architektúra (megvalósult, 2026-08-17 3. kör)

```
htgitacc-pages/
├── astro.config.mjs          # site+base (GitHub Pages project-oldal), i18n (hu alap, en /en/ prefix)
├── tsconfig.json
├── package.json / package-lock.json
├── README.md                 # fejlesztői/tartalomszerkesztési útmutató (rövidebb, gyakorlati verzió ennek a fájlnak)
├── CLAUDE.md                 # ez a fájl
├── src/
│   ├── content.config.ts     # Zod séma + glob loader: about, hobbies, projects (Astro 7 Content Layer API)
│   ├── content/
│   │   ├── about/{hu,en}.md
│   │   ├── hobbies/{hu,en}.md
│   │   └── projects/
│   │       ├── pace-showcase.md
│   │       ├── selyemut-showcase.md
│   │       ├── ai-scrum-assistant.md          # közös kártya: ai-scrum-assistant + ai-scrum-assistant-make-workflow repókra mutat
│   │       ├── ai-sentiment-sd-showcase.md    # új, 4. kör
│   │       └── my-anki-app-showcase.md        # wip: true — képek pontos elérési útja még hiányzik
│   ├── site.config.ts        # displayName, githubProfileUrl, linkedinUrl (egyelőre null)
│   ├── i18n/{ui.ts,utils.ts} # fordítási szótár + lang-detektálás
│   ├── styles/{tokens.css,global.css}   # design tokenek (world/dark) + globális stílus
│   ├── layouts/BaseLayout.astro         # <head>, fontok, anti-FOUC téma-script, Header+Footer
│   ├── components/{Header,Footer,LangSwitcher,ThemeToggle,ProjectCard}.astro
│   ├── views/{HomeView,HobbiesView,ProjectsView}.astro   # HomeView/HobbiesView jelenleg nincs útvonalra kötve (l. lent)
│   └── pages/
│       ├── index.astro         # a ProjectsView-t rendereli — EZ a kezdőlap most (HU, prefix nélkül)
│       ├── projects.astro      # statikus redirect a gyökérre (régi link kompatibilitás)
│       └── en/index.astro, en/projects.astro   # ugyanaz EN-ben (/en/ prefix)
├── public/
│   ├── favicon.svg
│   └── assets/projects/      # ide kerülnek majd a projekt-screenshotok
└── .github/workflows/deploy.yml   # push/workflow_dispatch/repository_dispatch → astro build → GitHub Pages deploy (Node 22 pinnelve)
```

Az oldalak (`src/pages/**`) csak vékony wrapperek, a tényleges renderelés a `src/views/*View.astro`
fájlokban van — ez tartja DRY-n a HU/EN duplikációt. A `hobbies.astro` és a "Kezdőlap mint bio-oldal"
route-ok (`HomeView`/`HobbiesView` felhasználásával) a 4. körben törlésre kerültek a `pages/`-ből —
a nézet-fájlok és a hozzájuk tartozó content (`about/`, `hobbies/`) megmaradtak, csak nincs route
ami kirenderelné őket. Ha visszahoznánk egy "Rólam" oldalt, ez gyors visszaállítás.

**Projekt content-fájl séma (frontmatter) — a ténylegesen használt mezők:**

```yaml
title_hu: "..."
title_en: "..."
summary_hu: "..."
summary_en: "..."
tech: ["Node.js", "LLM agent"]
repoUrls: ["https://github.com/htgitacc/pace-showcase"]   # tömb — több repo is lehet (l. ai-scrum-assistant.md)
demoUrl: null            # vagy URL string
pdfUrls: []              # tömb — 0, 1 vagy több PDF (l. pace-showcase.md); blob/main/ URL-t használj, NEM raw/main/-ot (l. lent)
image: null              # vagy '/assets/projects/<slug>/kep.png'
featured: true
wip: false                # true = "folyamatban" jelvény a kártyán (l. my-anki-app-showcase.md)
order: 10                 # kisebb szám = előrébb, azonos featured-en belül
```

**Fontos tapasztalat linkekhez**: a `raw.githubusercontent.com/<user>/<repo>/main/<fájl>` formátumú
linkek egy PDF-nél megbízhatatlannak bizonyultak (404-et adtak, miközben a fájl létezett) — ehelyett
a `github.com/<user>/<repo>/blob/main/<fájl>` "blob-nézet" URL-t használjuk, ami a GitHub natív
fájlnézete (letöltés-gombbal), és megbízhatóbban működik.

Design tokenek megvalósítva (`src/styles/tokens.css`): világos módban rizspapír-tónusú
háttér (`#f6f1e6`) cinóbervörös (`#b23a2c`) és tompított arany (`#ad8a35`) akcenttel,
erdőzöld/szikla alaptónusokkal; sötét módban tinta-fekete háttér (`#15191a`) emelt
fényerejű vörös/arany akcenttel. Tipográfia: `Fraunces` (cím) + `Inter` (törzsszöveg),
Google Fonts-ról töltve. Téma-váltás: `prefers-color-scheme` alapértelmezés +
kézi `ThemeToggle` gomb, `localStorage`-ban perzisztálva, anti-FOUC inline script-tel.

## Deployment / automatizálás

- `.github/workflows/deploy.yml`: `push` a `main`-re, **vagy** kézi `workflow_dispatch`, **vagy**
  egy másik repóból küldött `repository_dispatch` ("rebuild" típus) → `astro build`
  (a hivatalos `withastro/action@v3`-mal) → `actions/deploy-pages` → publikálás.
- Repo Settings → Pages → Source: **GitHub Actions** (ezt kézzel be kell állítani a repo
  létrehozása után — l. lent a "Amit neked kell megcsinálnod" szakaszt).
- A tartalom frissítése ⇒ szerkeszted a megfelelő markdown fájlt (l. README.md táblázata)
  ⇒ commit + push a `main`-re ⇒ ~1-2 percen belül automatikus rebuild + publikálás.
- A `repository_dispatch: rebuild` trigger előre be van drótozva arra az esetre, ha később
  a forrás-repók (pace-showcase, my-anki-app-showcase, stb.) saját workflow-ból akarnák
  automatikusan újraépíttetni ezt az oldalt anélkül, hogy ide kellene pusholni — ehhez a
  forrás-repóban egy kis workflow kell, ami egy GitHub PAT-tal `repository_dispatch`
  eseményt küld ide. **Ez még nincs bekötve** (l. nyitott kérdések), egyelőre a hibrid
  modell szerint a user manuálisan frissíti a content-fájlokat itt.

## Fázisok / Roadmap

- [x] **0. fázis — Tervezés**: kontextus felmérése, kulcsdöntések, CLAUDE.md.
- [x] **1. fázis — Repo & Astro alapok**: Astro projekt felépítve a cloud workspace-ben (kézzel, mivel a `create-astro` template-letöltés blokkolva volt a sandboxban), i18n routing (hu alap, en `/en/` prefix), `astro.config.mjs` (site + base a GitHub Pages project-oldalhoz).
- [x] **2. fázis — Tartalommodell**: `src/content.config.ts` Zod sémák + Content Layer glob loader (Astro 7-ben a régi `content/config.ts` hely megszűnt), 4 valós projekt content-fájl a frissített repó-READMEk alapján, placeholder about/hobbies HU+EN.
- [x] **3. fázis — Design & layout**: design tokenek (selyemúti + hegyvidéki paletta, world/dark), BaseLayout, Header/Footer/LangSwitcher/ThemeToggle/ProjectCard komponensek, Home/Hobbies/Projects nézetek mindkét nyelven, reszponzív grid.
- [x] **4. fázis — CI/CD**: `.github/workflows/deploy.yml` megírva (build+deploy job, `withastro/action` + `actions/deploy-pages`).
- [~] **5. fázis — Valós tartalom**: 5 projektkártya valós adatokkal (pace-showcase, selyemut-showcase, közös ai-scrum-assistant kártya, ai-sentiment-sd-showcase, my-anki-app-showcase `wip: true`-val). **Még hátravan**: bio/hobbi végleges szövege (placeholder, jelenleg egyik oldalon sincs kirenderelve, l. 7. fázis), `pace-showcase` 2. PDF-jének és a `my-anki-app-showcase` képeinek pontos elérési útja, LinkedIn URL a `site.config.ts`-ben.
- [x] **6. fázis — Publikálás**: a user létrehozta a `htgitacc-pages` repót, kézzel git push-olta, bekapcsolta a Pages-t. **Egy build hiba merült fel és el lett hárítva**: az `ubuntu-latest` runner alapértelmezett Node verziója (20) nem elég az Astro 7-hez (`>=22.12.0` kell) — a `withastro/action` step `node-version: '22'` inputtal lett kiegészítve, ezt a user kézzel írta be (a `.github/workflows/*` útvonalra a device-bridge nem enged távoli írást biztonsági okból). Az oldal élesben fut: **https://htgitacc.github.io/htgitacc-pages/**.
- [x] **7. fázis — Projektek-fókuszú átalakítás (2026-08-23)**: a user visszajelzése alapján a Projektek lap lett a kezdőlap (a `/`-en fut), a Kezdőlap/Hobbik menüpontok (és a hozzájuk tartozó oldalak) egyelőre le lettek véve — a régi `/projects/` és `/en/projects/` URL-ek statikus redirect-tel a gyökérre mutatnak, hogy a korábban megosztott linkek ne törjenek el. A Projektek lapon megjelent egy "az oldal még épül" jelzés és egy hosszabb, átfogalmazott bevezető bekezdés arról, hogy az elmúlt hónapok az agilis szakértelem + AI metszéspontjára fókuszáltak. Ezzel párhuzamosan minden linket újra ellenőriztem és két hibát javítottam (l. lent a Státusznaplóban), plusz felkerült egy új projekt (`ai-sentiment-sd-showcase`).

## Amit neked kell megcsinálnod (a cloud session nem tud pusholni GitHubra)

Ennek a munkamenetnek továbbra sincs GitHub-hozzáférése a `htgitacc` fiókhoz (nincs `gh`
CLI bejelentkezés, nincs SSH kulcs, nincs csatlakoztatott GitHub MCP connector) — a repo
és az első publikálás viszont már megtörtént a te oldaladon, ez a rész innentől csak az
**ismétlődő workflow**-t írja le:

1. A friss kódot (ez a kör: tartalomfrissítés + a Projektek-fókuszú átalakítás) kiküldtem
   zip-ként és kicsomagoltattam a `C:\Users\tibor\claude\workdir\htgitacc-pages` mappádba.
2. A mappában:
   ```bash
   git add .
   git commit -m "Update project content, links, and make Projects the homepage"
   git push
   ```
3. A push elindítja a `.github/workflows/deploy.yml`-t (a Node 22-es javítással, amit
   legutóbb te írtál bele kézzel), és pár percen belül frissül az élő oldal:
   **https://htgitacc.github.io/htgitacc-pages/**

### Nyitott kérdések (a következő körben pontosítandó)

- Bio/hobbi végleges szövege — jelenleg egyik oldalon sincs kirenderelve (a Kezdőlap/Hobbik
  oldalak le vannak véve), a `src/content/about` és `src/content/hobbies` fájlok érintetlenek,
  bármikor visszahozhatók, ha újra megjelenne egy "Rólam" oldal.
- LinkedIn URL — a `src/site.config.ts`-ben `linkedinUrl: null`; amíg üres, sehol nem
  jelenik meg LinkedIn gomb (a Kezdőlap egyelőre amúgy sincs kint).
- Cross-repo automatikus rebuild (`repository_dispatch`) — az infrastruktúra (trigger)
  megvan a workflow-ban, de nincs bekötve egyik forrás-repóhoz sem; ha ezt tényleg akarod
  (azaz hogy a pace-showcase/my-anki-app-showcase stb. módosítása automatikusan
  újraépítse ezt az oldalt PAT nélküli manuális push nélkül is), szólj és bekötjük.
- Privát vs. publikus repo — felmerült, hogy privát legyen a repo; ennek van egy GitHub
  Free-n blokkoló hatása (Pages csak publikus repóból megy ingyen), és a publikált oldal
  attól még publikus maradna. A user egyelőre nem döntött végleg — l. a korábbi beszélgetést.

## Ismert bemenet — meglévő publikus repók (2026-08-23-i állapot)

| Repo | Rövid leírás | Tech | Élő demo |
|---|---|---|---|
| `pace-showcase` | AI-alapú agilis gyorsító, backlog/user story generálás | Node.js, LLM | nincs; 2 PDF bekötve (`PACE-bemutato-clientweb_start.pdf`, `..._finish.pdf` — a user adta meg a pontos neveket) |
| `selyemut-showcase` | Kínai kulturális tudástár (tea, kard, viselet, kalligráfia), Taijiquan/Qigong közösségnek | Astro 5, Cloudflare Workers, Decap CMS | `selyemut-negy-szala.htgitacc.workers.dev` (ellenőrizve, élő) |
| `ai-scrum-assistant` + `ai-scrum-assistant-make-workflow` | Közös kártya: Streamlit app (user story/AC/security risk generálás, A/B LLM teszt) + a hozzá kapcsolódó Make.com workflow | Python, Streamlit, Llama 3.1, Make.com | nincs |
| `ai-sentiment-sd-showcase` | Ügyfélszolgálati portál prototípus: ügyfél-oldali huBERT hangulatelemzés + munkatárs-oldali RAG tudásbázis-keresés | Python, Streamlit, huBERT (NYTK), RAG | nincs (a README szerint nincs futtatható demó) |
| `my-anki-app-showcase` | Angol–magyar szókincstanuló app, AI-alapú kontextuskorrekcióval | SvelteKit 5, Tailwind, Supabase, Gemini API | **nincs (szándékosan)** — a user kérésére eltávolítva; a forráskód mostantól privát (`htlearningacc`), a screenshotok (`myanki_01–03.jpg`) letöltve és a `public/assets/projects/my-anki/`-ba mentve, a kártya képe ezeket használja |

## Státusznapló

**2026-08-17** — Kezdeti feltérképezés: a `htgitacc` GitHub fiók publikus repóinak és a helyi `htgitacc-pages` mappának (jelenleg üres) átnézése. Meghozott döntések: projekt-oldal URL struktúra (`htgitacc-pages` repo), hibrid projektforrás, kétnyelvű (HU+EN) tartalom, Astro + GitHub Actions stack. Ez a CLAUDE.md elkészült, még semmilyen kód/repo nem jött létre — a user kifejezetten csak tervezést kért ebben a körben.

**2026-08-17 (2. kör)** — A nyitott kérdések nagy része lezárva: nem kell egyedi domain (elég a `*.github.io`), a két scrum-repo egy közös kártyaként jelenik meg, gyakorlatilag minden projekt kiemelt (`featured`), és megszületett egy konkrét design-irány (selyemúti/keleties hangulat + hegyvidéki zöld/szikla paletta, világos-sötét mód, letisztult). Ez alapján bővült a CLAUDE.md egy "Design / vizuális irány" szakasszal, és a projekt content-séma `repoUrls` tömbre és `wip` flagre módosult. Egyetlen még nyitott pont maradt: a bio/hobbi végleges szövege — ezt a user kérésére placeholderrel visszük tovább az 5. fázisig, és a `my-anki-app-showcase` kártya a hiányzó képek miatt egyelőre `wip: true`. Kódírás/repo létrehozás továbbra sem történt — csak tervezés.

**2026-08-17 (3. kör)** — A user jelezte, hogy a forrás-repókat frissítette (my-anki-app-showcase: képek feltöltve; pace-showcase: új PDF; több repo README-je módosult), és kérte, hogy ez alapján kezdjük el ténylegesen építeni az oldalt, plusz szeretne egy CI/CD workflow-t, ami a módosításokat élesbe viszi. Ekkor: (1) frissen lekértem mind az 5 repó README-jét/fájllistáját (pace-showcase gyökerében megjelent egy `PACE-bemutato-clientweb_projekt.pdf` és egy `screenshots/` mappa; a my-anki-app-showcase képeinek pontos elérési útját nem sikerült megbízhatóan kiolvasni a fetch-elésből, ez nyitva maradt); (2) ellenőriztem, hogy ennek a cloud sessionnek **nincs push-jogosultsága** a `htgitacc` GitHub fiókhoz (nincs `gh` auth, nincs SSH kulcs, nincs GitHub MCP connector telepítve) — ez fontos korlát, dokumentálva lent; (3) felépítettem a teljes Astro projektet kézzel a cloud workspace-ben (a `create-astro` sablon-letöltés blokkolva volt, ezért `npm install astro` + kézi konfiguráció); (4) megvalósítottam az i18n-t, a design tokeneket, az összes komponenst/nézetet/oldalt, a 4 valós projekt-content fájlt, a `.github/workflows/deploy.yml`-t; (5) `npm run build` és `astro check` **hibátlanul lefutott** (6 statikus oldal generálódott, helyes `/htgitacc-pages/` base-prefixekkel). A kész projektet zip-ként kiküldtem és kicsomagoltattam a user gépén a `htgitacc-pages` mappába, a CLAUDE.md-t frissítettem. **Következő, user-oldali lépés**: repo létrehozása GitHubon + git push + Pages bekapcsolása (pontos parancsok fent) — ezt a sessiont nem tudom automatikusan elvégezni helyette.

**2026-08-17 (privát repo kérdés)** — A user megkérdezte, hogy okoz-e gondot, ha privát repóba teszi. Válasz: a GitHub Free csomagon a Pages csak publikus repóból megy; privát repóhoz fizetős (Pro/Team) csomag kell, és még akkor is a **publikált oldal** marad alapból publikus (a forrás és a live site láthatósága külön dolog GitHub-on) — privát *site*-hoz Enterprise Cloud + Pages access control kell. Mivel a cél egy LinkedIn-en megosztandó publikus oldal, publikus repo maradt a javaslat; a user nem reagált még véglegesen erre, ez nyitott maradt.

**2026-08-23 (4. kör)** — A user beszámolt róla, hogy közben (`htlearningacc` néven, contributorként) tovább dolgozott a forrás-repókon: linkek törtek el, a PACE repóba 2 PDF került fel, több README/about fájl változott, és felkerült egy vadonatúj repo (`ai-sentiment-sd-showcase`). Emellett git push-on már túl volt, és egy CI hibaüzenetet hozott: az Astro 7 buildhez `Node.js >=22.12.0` kell, az `ubuntu-latest` runner alapértelmezett Node 20-a nem elég. Ebben a körben: (1) kijavítottam a `.github/workflows/deploy.yml`-t (`node-version: '22'` a `withastro/action`-nek) — ezt a usernek magának kellett bemásolnia, mert a `.github/workflows/*` útvonalra a device-bridge nem enged távoli írást; (2) újra lekértem mind az 5 (most már 5, nem 4) repó aktuális állapotát; ennek során **két konkrét törött linket találtam és javítottam**: a `my-anki-app-showcase` demó linkje (`my-anki-app.vercel.app` → 404; a helyes, élőben tesztelt cím `my-anki-app-pi.vercel.app`), és a `pace-showcase` PDF-je (a korábbi `raw.githubusercontent.com/.../main/....pdf` formátumú link 404-et adott a fetch-elés során — lecseréltem a megbízhatóbb `github.com/.../blob/main/....pdf` "blob-nézet" formátumra); (3) a `pace-showcase` **2. PDF-jét** és a `my-anki-app-showcase` **screenshot-jainak pontos elérési útját** ismét nem sikerült megbízhatóan azonosítani a repó-böngészés fetch-elésével (ez láthatóan egy visszatérő korlátja ennek a módszernek, nem egyszeri hiba) — ezek nyitva maradtak, a user tudja megadni a pontos fájlneveket; (4) hozzáadtam az új `ai-sentiment-sd-showcase` projektkártyát a README alapján; (5) a `pdfUrl` mező `pdfUrls` tömbbé alakult (séma + `ProjectCard.astro`), hogy több PDF is elférjen egy projektnél; (6) a user kérésére a **Projektek lap lett a kezdőlap**, a Kezdőlap/Hobbik menüpontok és oldalak egyelőre le lettek véve (a `/projects/` és `/en/projects/` URL-ek statikus redirect-tel a gyökérre mutatnak, hogy a régi linkek ne törjenek), a Header nav üres tömbre állt; (7) a Projektek lapra bekerült egy "az oldal még épül" jelzés és egy hosszabb, a user vázlata alapján átfogalmazott bevezető bekezdés az agilitás+AI fókuszról (HU+EN, `projects.focus` i18n kulcs). `npm run build` és `astro check` **újra hibátlanul lefutott** (4 statikus oldal + 2 redirect-oldal a `/projects/` útvonalakra). A kész kódot zip-ként kiküldtem és kicsomagoltattam a user gépére; a `.github/workflows/deploy.yml` már korábban (kézzel) javítva volt nála, azt nem írtam felül. **Következő user-oldali lépés**: `git add . && git commit && git push` a mappában.

**2026-08-23 (5. kör)** — A user megadta a hiányzó infókat: a `my-anki-app-showcase`-nek **nincs többé élő demója** (a kód mostantól a privát `htlearningacc` repóban fejlődik tovább, se README, se about nem hivatkozik rá) — kérte, hogy vegyük ki a linket, ezt megtettem (`demoUrl: null`). Megadta a screenshotok pontos elérési útját (`.../my-anki-app-showcase/tree/main/screenshots`) — innen a raw README-ből kiolvastam a 3 pontos fájlnevet (`myanki_01/02/03.jpg`), és a `curl` (cloud Bash) segítségével **le is töltöttem mindhármat** a `public/assets/projects/my-anki/` alá, majd a `myanki_02.jpg`-t (főképernyő) beállítottam a kártya képének — így nem külső linkre hivatkozunk, a repo jövőbeli (esetleg privát) állapotától függetlenül működik. Emiatt a `ProjectCard.astro` kapott egy base-URL-prefixelő logikát, mert a content-fájlokban gyökér-relatív útvonalat (`/assets/...`) írunk, amit GitHub Pages-en a `/htgitacc-pages/` base elé kell fűzni — enélkül törött lett volna a kép. A `wip: true` jelzés lekerült a kártyáról (a hiányzó infó megvolt, nincs már "folyamatban" állapot). Megadta a PACE két PDF-jének pontos nevét is (`..._start.pdf`, `..._finish.pdf`) — ezekkel **lecseréltem** a korábban félig-találgatott egyetlen PDF-linket (a régi `..._projekt.pdf` fájl a user listájában már nem szerepelt, feltehetően átnevezték/szétbontották). **Technikai tanulság**: a `raw.githubusercontent.com` linkek korábbi "404"-jei valószínűleg a WebFetch-eszköz sajátossága voltak, nem valódi törött linkek — `curl`-lal (cloud Bash) ugyanaz az URL simán letöltötte a képet; a `github.com/.../blob/main/...` "megbízhatóbb" formátum emiatt inkább UX-preferencia (letöltés-gombos GitHub-nézet), nem technikai szükségszerűség. `npm run build` + `astro check` **hibátlan**; a képek/linkek megjelenése a generált HTML-ben ellenőrizve. A módosított fájlokat (2 content-md, `ProjectCard.astro`, 3 kép) egyenként kiküldtem és felírtam a user gépére. **Következő user-oldali lépés**: `git add . && git commit && git push`.

**2026-08-23 (6. kör)** — A user kérte, hogy a Projektek lap bevezető szövege egészüljön ki azzal, hogy a szakmai fókusz mellett hobbi projektekkel is foglalkozott, és minden megoldása vibe codinggal készült; előbb szövegtervezetet kért átolvasásra, majd két körben pontosította (végül saját megfogalmazású, két bekezdésre bontott szöveget adott, amit szó szerint felhasználtam), és eldöntötte, hogy a "vibe coding" kifejezés maradjon kisbetűs (a szövegben már meglévő, kisbetűsen írt kölcsönszavakkal — pl. "prompt" — konzisztensen). Az angol fordítást rám bízta, azt én készítettem. Emellett kicserélte a "az oldal még épül" mondatot egy végleges megfogalmazásra ("Az oldal folyamatosan épül és fejlődik, jelenleg a projektmunkák bemutatása áll a középpontban."), és kérte a kártyák átrendezését: PACE → AI Scrum Assistant → Ügyfélszolgálat (ai-sentiment-sd-showcase) → Selyemút → My-Anki. Technikailag: a `projects.focus` i18n kulcs mostantól két bekezdést tartalmaz `\n\n`-nel elválasztva, a `ProjectsView.astro` ezt szétbontja és külön `<p>` elemekként rendereli; az `order` mezők átírva mind az 5 projekt-fájlban az új sorrendhez. `npm run build` + `astro check` hibátlan, a generált HTML-ben ellenőrizve a helyes kártyasorrend és a két bekezdés. A módosított fájlokat (`ui.ts`, `ProjectsView.astro`, 4 content-md) kiküldtem és felírtam a user gépére. **Következő user-oldali lépés**: `git add . && git commit && git push`.

**2026-08-24 (7. kör)** — Új publikus repo született: `sm-task-tracker-showcase` (egysoros gyorsrögzítő + AI-mérési réteg agilis csapatvezetőknek, kétirányú n8n-automatizációval). A user kérésére a README-t lekértem `curl`-lal, majd a kártyaszöveget (HU cím+leírás, EN cím+leírás, tech-lista) előbb megmutattam jóváhagyásra — a user rábólintott ("mehet") minden módosítás nélkül. Ezután: (1) létrehoztam a `sm-task-tracker-showcase.md` content-fájlt (`repoUrls` a repóra mutat, `demoUrl: null`, mert a README szerint nincs publikus élő demó a kvótás AI-API-k miatt, `image: null` — a repóban vannak screenshotok, de a user nem kérte, hogy állítsuk be kártyaképnek, ez nyitva maradt egy jövőbeli körre); (2) átrendeztem a kártyák sorrendjét a user kérése szerint: PACE(10) → SM Task Tracker(20) → Ügyfélszolgálat/ai-sentiment-sd-showcase(30, változatlan) → AI Scrum Assistant(40, volt 20) → Selyemút(50, volt 40) → My-Anki(60, volt 50). `npm run build` + `astro check` hibátlan (5 projekt, 4 statikus oldal), a generált HTML-ben ellenőrizve a pontos sorrend és az új kártya szövege. A módosított/új fájlokat (`sm-task-tracker-showcase.md`, `ai-scrum-assistant.md`, `selyemut-showcase.md`, `my-anki-app-showcase.md`) kiküldtem és felírtam a user gépére. **Következő user-oldali lépés**: `git add . && git commit && git push`.
