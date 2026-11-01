export const locales = ['hu', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'hu';

export const siteName = 'htgitacc';

export const ui = {
  hu: {
    'nav.home': 'Kezdőlap',
    'nav.hobbies': 'Hobbik',
    'nav.projects': 'Projektek',
    'theme.toggle': 'Téma váltása',
    'lang.switch': 'English',
    'home.eyebrow': 'Üdv, itt vagyok',
    'home.cta.projects': 'Projektek megtekintése',
    'home.cta.linkedin': 'LinkedIn profil',
    'hobbies.title': 'Hobbik',
    'hobbies.eyebrow': 'Munkán túl',
    'projects.title': 'Projektek',
    'projects.eyebrow': 'Amin dolgoztam',
    'projects.intro':
      'Projektjeim az AI-tanulás útján: miért születtek, mit csinálnak, és mit tanultam belőlük.',
    'projects.focus':
      'Az utóbbi hónapokban azt vizsgáltam, milyen valódi értéket ad az AI egy agilis szakember (Scrum Master, Product Owner, projektmenedzser) munkájában: hol gyorsít, és hol válik kaotikussá, ha a folyamatok nincsenek ellenőrizve, dokumentálva és emberi jóváhagyással kísérve. Az alábbi projektek ezt az utat mutatják, AI-asszisztált fejlesztéssel (vibe coding) készültek, néhány hobbi projekt is akad köztük.',
    'projects.wip':
      'Az oldal folyamatosan épül és fejlődik, jelenleg a projektmunkák bemutatása áll a középpontban.',
    'project.repo': 'Repó',
    'project.repos': 'Repók',
    'project.demo': 'Élő demó',
    'project.pdf': 'Bemutató PDF',
    'project.tech': 'Technológia',
    'project.learned': 'Tanulság:',
    'project.moreImages': 'Több kép',
    'project.zoom': 'Kép nagyítása',
    'lightbox.close': 'Bezárás',
    'projects.overview': 'Áttekintés',
    'stats.projects': 'projekt',
    'stats.technologies': 'technológia',
    'stats.tools': 'AI-fejlesztőeszköz',
    'badge.wip': 'folyamatban',
    'badge.draft': 'vázlat szöveg',
    'footer.rights': 'Készült Astróval, GitHub Pages-en.',
    'footer.source': 'Forráskód',
  },
  en: {
    'nav.home': 'Home',
    'nav.hobbies': 'Hobbies',
    'nav.projects': 'Projects',
    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Magyar',
    'home.eyebrow': "Hi, I'm here",
    'home.cta.projects': 'View projects',
    'home.cta.linkedin': 'LinkedIn profile',
    'hobbies.title': 'Hobbies',
    'hobbies.eyebrow': 'Beyond work',
    'projects.title': 'Projects',
    'projects.eyebrow': "What I've been building",
    'projects.intro':
      'My projects along the AI learning path: why they were made, what they do, and what I learned from them.',
    'projects.focus':
      "Over the past few months I've explored what real value AI adds to the everyday work of an agile practitioner (Scrum Master, Product Owner, project manager): where it speeds the work up, and where it turns chaotic when the processes aren't checked, documented and accompanied by human sign-off. The projects below trace that path; they were built with AI-assisted development (vibe coding), and a few hobby projects are among them.",
    'projects.wip':
      'The site is continuously growing and evolving — right now the focus is on showcasing the project work.',
    'project.repo': 'Repo',
    'project.repos': 'Repos',
    'project.demo': 'Live demo',
    'project.pdf': 'Overview PDF',
    'project.tech': 'Tech',
    'project.learned': 'What I learned:',
    'project.moreImages': 'More images',
    'project.zoom': 'Enlarge image',
    'lightbox.close': 'Close',
    'projects.overview': 'Overview',
    'stats.projects': 'projects',
    'stats.technologies': 'technologies',
    'stats.tools': 'AI coding tools',
    'badge.wip': 'in progress',
    'badge.draft': 'draft text',
    'footer.rights': 'Built with Astro, hosted on GitHub Pages.',
    'footer.source': 'Source',
  },
} as const;
