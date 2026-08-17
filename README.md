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
| Bemutatkozó szöveg (bio) | `src/content/about/hu.md` és `en.md` |
| Hobbik | `src/content/hobbies/hu.md` és `en.md` |
| Egy meglévő projekt szövege/linkjei | `src/content/projects/<projekt>.md` |
| Új publikus projekt hozzáadása | Új `.md` fájl a `src/content/projects/` alá (másolj egy meglévőt mintának) |
| Projekt screenshot/kép | Kép fájl a `public/assets/projects/<slug>/` alá, majd a projekt `.md` fájljában az `image:` mező kitöltése (pl. `/assets/projects/my-anki/screenshot.png`) |
| Design/szín | `src/styles/tokens.css` |

Amint elkészül a bio/hobbi végleges szövege, a fájl tetején lévő `draft: true` értéket
állítsd `draft: false`-ra — ez tünteti el az oldalon az "vázlat szöveg" jelzést.

Egy projektkártyán a `wip: true` egy "folyamatban" jelzést tesz ki (pl. amíg a képek
feltöltése zajlik) — állítsd `false`-ra, ha a kártya készen van.

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
