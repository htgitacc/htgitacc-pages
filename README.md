# htgitacc-pages

> **Név és hely.** A GitHub-repó neve `htgitacc-pages` (ez az élő cím része, ezért nem változik), a helyi
> mappa a gép konvenciója szerint `/mnt/data/ai_projects/PROJ_portfolio`. Indoklás: [ADR 0001](docs/adr/0001-helyi-nev-proj-portfolio-a-repo-neve-marad.md).
> Aktuális állapot és nyitott döntések: [`docs/HANDOFF.md`](docs/HANDOFF.md).

Ez a repo generálja a [htgitacc](https://github.com/htgitacc) GitHub Pages bemutatkozó oldalát:
**https://htgitacc.github.io/htgitacc-pages/**

Astroval épül, kétnyelvű (HU/EN), és minden `main`-re történő push-nál a GitHub Actions
(`.github/workflows/deploy.yml`) automatikusan újraépíti és publikálja az oldalt.

A projekt teljes tervezési háttere és a döntések indoklása a repo gyökerében lévő
[`CLAUDE.md`](./CLAUDE.md) fájlban vannak.

## Tartalom szerkesztése

Nem kell kódot írni ahhoz, hogy a tartalmat frissítsd — elég a megfelelő markdown fájlt
szerkeszteni, majd commitolni és pusholni a `main`-re. Onnantól a live oldal ~1-2 percen
belül frissül.

| Mit akarok módosítani? | Melyik fájl(oka)t? |
|---|---|
| Egy meglévő projekt szövege/linkjei | `src/content/projects/<projekt>.md` |
| Új publikus projekt hozzáadása | Új `.md` fájl a `src/content/projects/` alá (másolj egy meglévőt mintának) |
| Projekt screenshot/kép | WebP kép (max. 1440 px széles) a `public/assets/projects/<slug>/` alá, majd a projekt `.md` fájljában az `images:` lista (1–4 kép; az első mindig látszik, a többi a „Több kép” lenyitóban; pl. `["/assets/projects/weather/01.webp"]`). Képernyőkép előtt: **nem lehet rajta e-mail cím, név, kulcs, helyszín**, az oldal nyilvános |
| Bemutató PDF(ek) egy projekthez | A projekt `.md`-jében a `pdfUrls` tömb — `github.com/<user>/<repo>/blob/main/<fájl>` formátumú linkeket használj, a `raw.githubusercontent.com/...` linkek megbízhatatlannak bizonyultak |
| Design/szín | `src/styles/tokens.css` |
| Bevezető szöveg a Projektek lapon | `src/i18n/ui.ts` → `projects.intro` / `projects.focus` kulcsok (HU+EN) |

Egy projektkártyán a `wip: true` egy "folyamatban" jelzést tesz ki (pl. amíg a képek
feltöltése zajlik) — állítsd `false`-ra, ha a kártya készen van.

> A `src/content/about/` és `src/content/hobbies/` fájlok (bio, hobbik) megvannak, de
> jelenleg nincs hozzájuk tartozó route a `src/pages/`-ben — a Projektek lap (`/`) az
> egyetlen aktív oldal. Ha visszahoznánk egy "Rólam" oldalt, ehhez elég egy
> `src/pages/index.astro`-t (jelenleg a `ProjectsView`-t rendereli) visszaállítani a
> `HomeView`-ra, és a Header nav-ját visszatölteni (l. `CLAUDE.md`).

## Tesztelés

    tests/futtat.sh

Lefuttatja a buildet, elindít egy helyi előnézetet (127.0.0.1:8593), és valódi böngészőben ellenőrzi mindkét
nyelvi oldalt: van-e cím és leírás minden kártyán, nincs-e törött kép, kitöltetlen (`TODO`) kártya vagy e-mail
cím a HTML-ben, és 390 px-en nincs-e vízszintes görgetés. Az ellenőrzés a képek *tartalmát* nem látja, azt a
képernyőképek átnézésével kell megnézni. Képkészítő szkriptek: `tools/kepek/` (lásd `docs/HANDOFF.md`).

## Fejlesztés helyben

```bash
npm install
npm run dev       # http://localhost:4321/htgitacc-pages/
npm run build     # statikus build a dist/ mappába — így buildel a CI is
npm run preview   # a build eredményének helyi előnézete
```

## Publikálás / GitHub Pages beállítás (első alkalommal)

1. A GitHub repo **Settings → Pages** alatt a **Source** legyen **"GitHub Actions"**
   (ne "Deploy from a branch").
2. Utána minden `main`-re történő push automatikusan buildel és deployol.
3. Kézzel is elindítható build a GitHub repo **Actions** fülén, a "Deploy to GitHub Pages"
   workflow **Run workflow** gombjával. 
