// A portfólió-oldal ellenőrző képei: 1440 és 390 px, sötét és világos téma,
// plusz egy automatikus ellenőrzés (minden kártyán cím + szöveg, törött kép nincs).
const { chromium } = require('/mnt/data/ai_projects/PROJ_design2/node_modules/playwright');

(async () => {
  const [url, out] = process.argv.slice(2);
  const browser = await chromium.launch();
  for (const theme of ['dark', 'light']) {
    for (const width of [1440, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      await page.addInitScript((t) => localStorage.setItem('htgitacc-theme', t), theme);
      await page.goto(url, { waitUntil: 'networkidle' });
      // a lusta képek betöltéséhez végiggörgetünk
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(800);
      await page.screenshot({ path: `${out}/oldal-${theme}-${width}-felso.png` });
      await page.screenshot({ path: `${out}/oldal-${theme}-${width}-teljes.png`, fullPage: true });
      if (theme === 'dark' && width === 1440) {
        const report = await page.evaluate(() => {
          const cards = [...document.querySelectorAll('.project-card')];
          return {
            kartyak: cards.length,
            cim_nelkul: cards.filter((c) => !c.querySelector('h3')?.textContent.trim()).length,
            szoveg_nelkul: cards.filter((c) => !c.querySelector('.project-summary')?.textContent.trim()).length,
            kepes: cards.filter((c) => c.querySelector('.zoomable')).length,
            torott_kep: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src),
            vizszintes_gorgetes: document.documentElement.scrollWidth > window.innerWidth,
          };
        });
        console.log(JSON.stringify(report));
      }
      if (width === 390) {
        console.log(theme, '390px vízszintes görgetés:', await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth));
      }
      await page.close();
    }
  }
  await browser.close();
})();
