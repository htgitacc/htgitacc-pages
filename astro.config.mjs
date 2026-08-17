// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages "project site" beállítás:
// az oldal a https://htgitacc.github.io/htgitacc-pages/ címen fog élni.
// Ha valaha átköltözne a htgitacc.github.io "root" repóba, itt elég
// a site-ot megtartani és a base-t '/'-re állítani.
export default defineConfig({
  site: 'https://htgitacc.github.io',
  base: '/htgitacc-pages',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
