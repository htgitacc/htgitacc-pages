// Az épített oldal ellenőrzése valódi böngészőben (Playwright), a helyi előnézeti kiszolgálón.
// Használat: node tests/ellenoriz.cjs <url>   — hibánál nem nulla kilépési kóddal áll le.
// A Playwrightot a PROJ_design2 telepítése adja (nincs külön függőség a projektben).
const { chromium } = require('/mnt/data/ai_projects/PROJ_design2/node_modules/playwright');

const hibak = [];
const ellenoriz = (nev, ok, adat = '') => {
  console.log(`${ok ? 'OK   ' : 'HIBA '} ${nev}${!ok && adat ? ' — ' + adat : ''}`);
  if (!ok) hibak.push(nev);
};

(async () => {
  const url = process.argv[2];
  if (!url) throw new Error('használat: node tests/ellenoriz.cjs <url>');
  const browser = await chromium.launch();

  for (const [nyelv, utvonal] of [['hu', ''], ['en', 'en/']]) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(url + utvonal, { waitUntil: 'networkidle' });
    // a lusta képek betöltéséhez végig kell görgetni
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 100));
      }
    });
    await page.waitForTimeout(500);

    const jelentes = await page.evaluate(() => {
      const kartyak = [...document.querySelectorAll('.project-card')];
      return {
        kartyak: kartyak.length,
        cimNelkul: kartyak.filter((c) => !c.querySelector('h3')?.textContent.trim()).length,
        szovegNelkul: kartyak.filter((c) => !c.querySelector('.project-summary')?.textContent.trim()).length,
        todoSzoveg: kartyak.filter((c) => /TODO/.test(c.textContent)).length,
        // a nagyító <dialog> képe szándékosan üres, amíg nem nyitják meg
        toroettKep: [...document.querySelectorAll('.project-card img')].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src),
        html: document.documentElement.outerHTML,
      };
    });
    ellenoriz(`[${nyelv}] van projektkártya`, jelentes.kartyak >= 10, `kártyák: ${jelentes.kartyak}`);
    ellenoriz(`[${nyelv}] minden kártyán van cím`, jelentes.cimNelkul === 0);
    ellenoriz(`[${nyelv}] minden kártyán van leírás`, jelentes.szovegNelkul === 0);
    ellenoriz(`[${nyelv}] nincs kitöltetlen (TODO) kártya az oldalon`, jelentes.todoSzoveg === 0);
    ellenoriz(`[${nyelv}] nincs törött kép`, jelentes.toroettKep.length === 0, jelentes.toroettKep.join(', '));
    // Személyes adat a nyilvános oldalon: e-mail cím nem szerepelhet a HTML-ben.
    const email = jelentes.html.match(/[\w.+-]+@(?!users\.noreply)[\w-]+\.[\w.]+/g) || [];
    ellenoriz(`[${nyelv}] nincs e-mail cím az oldalon`, email.length === 0, email.join(', '));
    await page.close();
  }

  const mobil = await browser.newPage({ viewport: { width: 390, height: 800 } });
  await mobil.goto(url, { waitUntil: 'networkidle' });
  const tulcsordul = await mobil.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  ellenoriz('390 px-en nincs vízszintes görgetés', !tulcsordul);
  await browser.close();

  if (hibak.length) {
    console.log(`\n${hibak.length} ellenőrzés elbukott.`);
    process.exit(1);
  }
  console.log('\nMinden ellenőrzés átment.');
})();
