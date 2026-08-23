# htgitacc-pages

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
| Projekt screenshot/kép | Kép fájl a `public/assets/projects/<slug>/` alá, majd a projekt `.md` fájljában az `image:` mező kitöltése (pl. `/assets/projects/my-anki/screenshot.png`) |
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
