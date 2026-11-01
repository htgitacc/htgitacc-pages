// Képernyőképek a szerveren futó appokról, a helyi porton (basicauth nélkül).
// Használat: node shots.js <kimeneti-mappa> <jobs.json>
// Egy job: { name, url, wait?, click?, scroll?, width?, height? }
//   click: látható szöveg, amire a betöltés után kattint (pl. menüpont) — csak
//          olyan elemre, ami nem módosít élő állapotot
//   scroll: ennyi pixelt görget le a fő tartalomban a kép előtt
const fs = require('fs');
const { chromium } = require('/mnt/data/ai_projects/PROJ_design2/node_modules/playwright');

(async () => {
  const [out, jobsFile] = process.argv.slice(2);
  const jobs = JSON.parse(fs.readFileSync(jobsFile, 'utf8'));
  const browser = await chromium.launch();
  for (const job of jobs) {
    const page = await browser.newPage({
      viewport: { width: job.width || 1440, height: job.height || 900 },
      colorScheme: 'dark',
    });
    try {
      await page.goto(job.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(job.wait || 8000);
      if (job.click) {
        await page.getByText(job.click, { exact: true }).first().click();
        await page.waitForTimeout(job.wait || 8000);
      }
      if (job.scroll) {
        // A Streamlit a saját belső konténerét görgeti, nem az ablakot, ezért
        // valódi egérgörgetés kell a tartalom fölött.
        await page.mouse.move(900, 500);
        await page.mouse.wheel(0, job.scroll);
        await page.waitForTimeout(1500);
      }
      await page.screenshot({ path: `${out}/${job.name}.png` });
      console.log('OK', job.name);
    } catch (e) {
      console.log('HIBA', job.name, e.message.split('\n')[0]);
    }
    await page.close();
  }
  await browser.close();
})();
