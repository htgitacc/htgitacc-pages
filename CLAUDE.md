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
│   │       ├── ai-scrum-assistant.md      # közös kártya: ai-scrum-assistant + ai-scrum-assistant-make-workflow repókra mutat
│   │       └── my-anki-app-showcase.md    # wip: true — képek még hiányoznak
│   ├── site.config.ts        # displayName, githubProfileUrl, linkedinUrl (egyelőre null)
│   ├── i18n/{ui.ts,utils.ts} # fordítási szótár + lang-detektálás
│   ├── styles/{tokens.css,global.css}   # design tokenek (world/dark) + globális stílus
│   ├── layouts/BaseLayout.astro         # <head>, fontok, anti-FOUC téma-script, Header+Footer
│   ├── components/{Header,Footer,LangSwitcher,ThemeToggle,ProjectCard}.astro
│   ├── views/{HomeView,HobbiesView,ProjectsView}.astro   # a tényleges oldal-logika, lang-agnosztikus
│   └── pages/
│       ├── index.astro, hobbies.astro, projects.astro        (HU — alapértelmezett, prefix nélkül)
│       └── en/index.astro, en/hobbies.astro, en/projects.astro
├── public/
│   ├── favicon.svg
│   └── assets/projects/      # ide kerülnek majd a projekt-screenshotok
└── .github/workflows/deploy.yml   # push/workflow_dispatch/repository_dispatch → astro build → GitHub Pages deploy
```

Az oldalak (`src/pages/**`) csak vékony wrapperek, a tényleges renderelés a `src/views/*View.astro`
fájlokban van — ez tartja DRY-n a HU/EN duplikációt.

**Projekt content-fájl séma (frontmatter) — a ténylegesen használt mezők:**

```yaml
title_hu: "..."
title_en: "..."
summary_hu: "..."
summary_en: "..."
tech: ["Node.js", "LLM agent"]
repoUrls: ["https://github.com/htgitacc/pace-showcase"]   # tömb — több repo is lehet (l. ai-scrum-assistant.md)
demoUrl: null            # vagy URL string
pdfUrl: null             # vagy URL string (l. pace-showcase.md — a bemutató PDF-hez)
image: null              # vagy '/assets/projects/<slug>/kep.png'
featured: true
wip: false                # true = "folyamatban" jelvény a kártyán (l. my-anki-app-showcase.md)
order: 10                 # kisebb szám = előrébb, azonos featured-en belül
```

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
- [x] **4. fázis — CI/CD**: `.github/workflows/deploy.yml` megírva (build+deploy job, `withastro/action` + `actions/deploy-pages`). **Még nem futott élesben**, mert a repo még nincs létrehozva/pusholva GitHubra (l. lent).
- [~] **5. fázis — Valós tartalom**: a 4 projektkártya valós adatokkal kész (pace-showcase PDF-linkkel, selyemut-showcase demóval, közös ai-scrum-assistant kártya, my-anki-app-showcase `wip: true`-val). **Még hátravan**: bio/hobbi végleges szövege (placeholder), `my-anki-app-showcase` képei (nem sikerült megbízhatóan azonosítani a pontos fájlneveket/útvonalakat a repóban — a user tudja hova töltötte, ő tudja pontosan hozzáadni), LinkedIn URL a `site.config.ts`-ben.
- [ ] **6. fázis — Publikálás & QA**: `npm run build` + `astro check` **lefutott a cloud workspace-ben, hibátlanul** (0 build hiba, 0 típushiba). A ténylegesen élesbe vitel (repo létrehozása, git push, Pages bekapcsolása) a usernél van hátra, mert ez a session nincs bejelentkezve a `htgitacc` GitHub fiókba — l. "Amit neked kell megcsinálnod" lent.

## Amit neked kell megcsinálnod (a cloud session nem tud pusholni GitHubra)

Ennek a munkamenetnek nincs GitHub-hozzáférése a `htgitacc` fiókhoz (nincs `gh` CLI
bejelentkezés, nincs SSH kulcs, nincs csatlakoztatott GitHub MCP connector) — ezért a
kész projektet nem tudom magam pusholni. A kód a gépeden, a `C:\Users\tibor\claude\workdir\htgitacc-pages`
mappában van (kicsomagolva a kiküldött zip-ből). Ezt kell tenned:

1. **Repo létrehozása GitHubon**: menj a https://github.com/new oldalra, tulajdonos: `htgitacc`,
   név: `htgitacc-pages`, **üresen** hozd létre (README/gitignore nélkül, azt már tartalmazza a mappa).
2. **Git init + push helyben** (a mappában, saját terminálból):
   ```bash
   cd path/to/htgitacc-pages
   git init
   git add .
   git commit -m "Initial commit: Astro portfolio site"
   git branch -M main
   git remote add origin https://github.com/htgitacc/htgitacc-pages.git
   git push -u origin main
   ```
3. **GitHub Pages bekapcsolása**: a repo **Settings → Pages** alatt **Source: GitHub Actions**.
4. Ezután a push automatikusan elindítja a `.github/workflows/deploy.yml`-t, és pár percen
   belül élesben lesz az oldal a `https://htgitacc.github.io/htgitacc-pages/` címen.
5. Onnantól minden további tartalmi módosítás (bio, hobbi, projekt-adatok, képek) ugyanígy:
   szerkesztés → `git add` → `git commit` → `git push` → automatikus rebuild+deploy.

Ha szeretnéd, a következő körben végig tudlak vezetni ezeken a lépéseken, vagy ha adsz egy
GitHub Personal Access Tokent, azzal a cloud sessionből is tudnék pusholni — de ez a te
döntésed, alapból nem kértem ilyet.

### Nyitott kérdések (a következő körben pontosítandó)

- Bio/hobbi végleges szövege — jelenleg placeholder.
- `my-anki-app-showcase` kártya képei — a projekt-repóban nem sikerült megbízhatóan
  beazonosítani a pontos fájlneveket/útvonalakat (a GitHub fájlböngésző-nézet ezt nem adta
  vissza megbízhatóan a fetch-elés során); amint tudod a pontos elérési utat, egy sorban
  frissíthető az `image:` mező a `my-anki-app-showcase.md`-ban.
- LinkedIn URL — a `src/site.config.ts`-ben `linkedinUrl: null`, amíg üres, a kezdőlapon
  nem jelenik meg a LinkedIn gomb.
- Cross-repo automatikus rebuild (`repository_dispatch`) — az infrastruktúra (trigger)
  megvan a workflow-ban, de nincs bekötve egyik forrás-repóhoz sem; ha ezt tényleg akarod
  (azaz hogy a pace-showcase/my-anki-app-showcase stb. módosítása automatikusan
  újraépítse ezt az oldalt PAT nélküli manuális push nélkül is), szólj és bekötjük.

## Ismert bemenet — meglévő publikus repók (2026-08-17-i állapot)

| Repo | Rövid leírás | Tech | Élő demo |
|---|---|---|---|
| `pace-showcase` | AI-alapú agilis gyorsító, backlog/user story generálás | Node.js, LLM | nincs (a valódi app külön, nem publikus repóban fut) |
| `selyemut-showcase` | Kínai kulturális tudástár (tea, kard, viselet, kalligráfia), Taijiquan/Qigong közösségnek | Astro 5, Cloudflare Workers, Decap CMS | `selyemut-negy-szala.htgitacc.workers.dev` |
| `ai-scrum-assistant` | Streamlit app: user story / acceptance criteria / security risk generálás ötletből, A/B LLM teszteléssel | Python, Streamlit | nincs infó |
| `ai-scrum-assistant-make-workflow` | Kapcsolódó automatizációs workflow (Make.com?) | nincs infó | nincs infó |
| `my-anki-app-showcase` | Angol–magyar szókincstanuló app, AI-alapú kontextuskorrekcióval | SvelteKit 5, Tailwind, Supabase, Gemini API | `my-anki-app-pi.vercel.app` |

## Státusznapló

**2026-08-17** — Kezdeti feltérképezés: a `htgitacc` GitHub fiók publikus repóinak és a helyi `htgitacc-pages` mappának (jelenleg üres) átnézése. Meghozott döntések: projekt-oldal URL struktúra (`htgitacc-pages` repo), hibrid projektforrás, kétnyelvű (HU+EN) tartalom, Astro + GitHub Actions stack. Ez a CLAUDE.md elkészült, még semmilyen kód/repo nem jött létre — a user kifejezetten csak tervezést kért ebben a körben.

**2026-08-17 (2. kör)** — A nyitott kérdések nagy része lezárva: nem kell egyedi domain (elég a `*.github.io`), a két scrum-repo egy közös kártyaként jelenik meg, gyakorlatilag minden projekt kiemelt (`featured`), és megszületett egy konkrét design-irány (selyemúti/keleties hangulat + hegyvidéki zöld/szikla paletta, világos-sötét mód, letisztult). Ez alapján bővült a CLAUDE.md egy "Design / vizuális irány" szakasszal, és a projekt content-séma `repoUrls` tömbre és `wip` flagre módosult. Egyetlen még nyitott pont maradt: a bio/hobbi végleges szövege — ezt a user kérésére placeholderrel visszük tovább az 5. fázisig, és a `my-anki-app-showcase` kártya a hiányzó képek miatt egyelőre `wip: true`. Kódírás/repo létrehozás továbbra sem történt — csak tervezés.

**2026-08-17 (3. kör)** — A user jelezte, hogy a forrás-repókat frissítette (my-anki-app-showcase: képek feltöltve; pace-showcase: új PDF; több repo README-je módosult), és kérte, hogy ez alapján kezdjük el ténylegesen építeni az oldalt, plusz szeretne egy CI/CD workflow-t, ami a módosításokat élesbe viszi. Ekkor: (1) frissen lekértem mind az 5 repó README-jét/fájllistáját (pace-showcase gyökerében megjelent egy `PACE-bemutato-clientweb_projekt.pdf` és egy `screenshots/` mappa; a my-anki-app-showcase képeinek pontos elérési útját nem sikerült megbízhatóan kiolvasni a fetch-elésből, ez nyitva maradt); (2) ellenőriztem, hogy ennek a cloud sessionnek **nincs push-jogosultsága** a `htgitacc` GitHub fiókhoz (nincs `gh` auth, nincs SSH kulcs, nincs GitHub MCP connector telepítve) — ez fontos korlát, dokumentálva lent; (3) felépítettem a teljes Astro projektet kézzel a cloud workspace-ben (a `create-astro` sablon-letöltés blokkolva volt, ezért `npm install astro` + kézi konfiguráció); (4) megvalósítottam az i18n-t, a design tokeneket, az összes komponenst/nézetet/oldalt, a 4 valós projekt-content fájlt, a `.github/workflows/deploy.yml`-t; (5) `npm run build` és `astro check` **hibátlanul lefutott** (6 statikus oldal generálódott, helyes `/htgitacc-pages/` base-prefixekkel). A kész projektet zip-ként kiküldtem és kicsomagoltattam a user gépén a `htgitacc-pages` mappába, a CLAUDE.md-t frissítettem. **Következő, user-oldali lépés**: repo létrehozása GitHubon + git push + Pages bekapcsolása (pontos parancsok fent) — ezt a sessiont nem tudom automatikusan elvégezni helyette.
