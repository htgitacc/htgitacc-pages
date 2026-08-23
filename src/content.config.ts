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
    summary_hu: z.string(),
    summary_en: z.string(),
    tech: z.array(z.string()).default([]),
    // egy projekthez több repo is tartozhat (pl. app + automatizációs workflow)
    repoUrls: z.array(z.string().url()).min(1),
    demoUrl: z.string().url().nullable().default(null),
    // opcionális letölthető anyag(ok) (pl. bemutató PDF-ek) — tömb, mert
    // egy projekthez több PDF is tartozhat (l. pace-showcase.md)
    pdfUrls: z.array(z.string().url()).default([]),
    // opcionális screenshot/kép a public/assets/projects/<slug>/ alól
    image: z.string().nullable().default(null),
    // kiemelt projektek jelennek meg elöl / hangsúlyosabban
    featured: z.boolean().default(false),
    // "folyamatban" jelzés (pl. még hiányzó képek/leírás)
    wip: z.boolean().default(false),
    // kisebb szám = előrébb a listában (azonos featured-en belül)
    order: z.number().default(100),
  }),
});

export const collections = { about, hobbies, projects };
