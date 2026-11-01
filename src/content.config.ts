import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// "about" és "hobbies": egy-egy rövid, nyelvenkénti markdown fájl
// (hu.md / en.md) a src/content/about|hobbies alatt. A törzsszöveg
// maga a bio/hobbi leírás.
const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    // ha true, az oldalon egy apró "ez még vázlat" jelzés jelenik meg —
    // állítsd false-ra, amint a végleges szöveg elkészült.
    draft: z.boolean().default(false),
  }),
});

const hobbies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hobbies' }),
  schema: z.object({
    draft: z.boolean().default(false),
  }),
});

// "projects": egy fájl / publikus projekt. Új publikus repónál csak
// egy ilyen .md fájlt kell hozzáadni a src/content/projects alá, a
// build automatikusan felveszi a listába.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title_hu: z.string(),
    title_en: z.string(),
    // Golden Circle: a kártya a MIÉRTtel indul (miért született), ha van
    // hiteles válasz; ahol nincs, a kártya a mittel (summary) kezdődik.
    why_hu: z.string().nullable().default(null),
    why_en: z.string().nullable().default(null),
    summary_hu: z.string(),
    summary_en: z.string(),
    // egysoros tanulság: mire jöttem rá a projekt közben
    learned_hu: z.string().nullable().default(null),
    learned_en: z.string().nullable().default(null),
    tech: z.array(z.string()).default([]),
    // melyik AI-fejlesztőeszközzel készült (jelvényként jelenik meg)
    tools: z.array(z.enum(['Claude Code', 'GPT Codex', 'Cursor', 'GLM'])).default([]),
    // egy projekthez több repo is tartozhat (pl. app + automatizációs workflow);
    // lehet üres is, mert több munkarepó privát, és a látogató ott 404-et kapna
    repoUrls: z.array(z.string().url()).default([]),
    demoUrl: z.string().url().nullable().default(null),
    // opcionális letölthető anyag(ok) (pl. bemutató PDF-ek) — tömb, mert
    // egy projekthez több PDF is tartozhat (l. pace-showcase.md)
    pdfUrls: z.array(z.string().url()).default([]),
    // képek a public/assets/projects/<slug>/ alól: az első mindig látszik,
    // a többi a „Több kép" lenyitóban
    images: z.array(z.string()).max(4).default([]),
    // tartalék kártya (pl. még kitöltendő Codex/Cursor projekt): a buildben
    // nem jelenik meg, amíg true
    draft: z.boolean().default(false),
    // kiemelt projektek jelennek meg elöl / hangsúlyosabban
    featured: z.boolean().default(false),
    // "folyamatban" jelzés (pl. még hiányzó képek/leírás)
    wip: z.boolean().default(false),
    // kisebb szám = előrébb a listában (azonos featured-en belül)
    order: z.number().default(100),
  }),
});

export const collections = { about, hobbies, projects };
