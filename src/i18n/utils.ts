import { ui, defaultLocale, type Locale } from './ui';

/** A path szegmensei közül az 'en'-t keresi (base prefix-től függetlenül). */
export function getLangFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  return segments.includes('en') ? 'en' : defaultLocale;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)['hu']): string {
    return ui[lang][key] ?? ui[defaultLocale][key];
  };
}
