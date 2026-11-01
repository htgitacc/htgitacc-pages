// Képek átméretezése (max. 1440 px széles) és WebP-be tömörítése a
// public/assets/projects/<slug>/ alá, plusz egy áttekintő kontaktlap az ellenőrzéshez.
// Használat: node convert.js <map.json> <public-mappa> <kontaktlap.png>
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

(async () => {
  const [mapFile, publicDir, sheetPath] = process.argv.slice(2);
  const map = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
  const thumbs = [];
  for (const [slug, files] of Object.entries(map)) {
    const outDir = path.join(publicDir, 'assets/projects', slug);
    fs.mkdirSync(outDir, { recursive: true });
    for (const [i, src] of files.entries()) {
      const out = path.join(outDir, `${String(i + 1).padStart(2, '0')}.webp`);
      await sharp(src).resize({ width: 1440, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
      const kb = Math.round(fs.statSync(out).size / 1024);
      console.log(`${slug}/${path.basename(out)}  ${kb} KB  <- ${path.basename(src)}`);
      thumbs.push(await sharp(src).resize(360, 225, { fit: 'cover', position: 'top' }).png().toBuffer());
    }
  }
  const cols = 5;
  const rows = Math.ceil(thumbs.length / cols);
  await sharp({ create: { width: cols * 370, height: rows * 235, channels: 3, background: '#222' } })
    .composite(thumbs.map((input, i) => ({ input, left: (i % cols) * 370 + 5, top: Math.floor(i / cols) * 235 + 5 })))
    .png()
    .toFile(sheetPath);
})();
