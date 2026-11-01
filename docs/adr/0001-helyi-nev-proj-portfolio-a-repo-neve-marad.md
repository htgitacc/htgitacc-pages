# ADR 0001 — Helyi név `PROJ_portfolio`, a GitHub-repó neve `htgitacc-pages` marad

Dátum: 2026-11-01 · Állapot: elfogadva (a felhasználó jóváhagyta)

## Helyzet
A portfólió-oldal repója `htgitacc-pages` néven klónozódott a szerverre. A gép konvenciója `PROJ_<név>`
(`~/CLAUDE.md`, `reszletes-szabalyok.md` 9. pont), és a `bin/allapot` a `PROJ_*` mintára keres, tehát a mappa
nem látszott az állapotjelentésben, és a PROJ_gep nyilvántartásaiban sem szerepelt.

## Lehetőségek
1. **Marad `htgitacc-pages` a helyi mappa is.** Nulla munka, de a konvenció nem teljesül, és az állapotjelentés nem látja.
2. **Mappa és GitHub-repó is `PROJ_portfolio`.** Egységes, de a GitHub Pages címe a repó nevéből áll
   (`htgitacc.github.io/htgitacc-pages/`), és az `astro.config.mjs` `base` beállítása is ezt használja. Az átnevezés
   megszüntetné az élő címet, a már megosztott (pl. LinkedIn) linkek eltörnének, mert a Pages címe nem irányít át.
3. **Csak a helyi mappa lesz `PROJ_portfolio`, a GitHub-repó neve marad.** Konvenció teljesül, az élő cím nem változik.

## Döntés
A 3. lehetőség. A helyi név és a GitHub-név eltérése nem újdonság a gépen (`PROJ_pm_all` ↔ `pm-all-showcase`), és ez a
repó eleve másik, nyilvános fiókban él (`htgitacc`, a többi a `htlearningacc` alatt; a `htlearningacc` collaborator).

## Következmények
- A `base` (`/htgitacc-pages`) és a `site` az `astro.config.mjs`-ben **nem változhat**, amíg a repó neve ez.
- A PROJ_gep nyilvántartásaiban a projekt `PROJ_portfolio` néven szerepel, a GitHub-név mellette.
- Ha valaha saját domaint kap az oldal (CNAME), a repó átnevezhető, és a `base` `/`-re állítható; az új ADR-be megy.
