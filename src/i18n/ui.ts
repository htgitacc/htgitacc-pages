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
      'Publikus repók és bemutatók a saját projektjeimből — némelyik éles alkalmazás, némelyik showcase.',
    'project.repo': 'Repó',
    'project.repos': 'Repók',
    'project.demo': 'Élő demó',
    'project.pdf': 'Bemutató PDF',
    'project.tech': 'Technológia',
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
      'Public repos and write-ups from my own projects — some are live apps, some are showcases.',
    'project.repo': 'Repo',
    'project.repos': 'Repos',
    'project.demo': 'Live demo',
    'project.pdf': 'Overview PDF',
    'project.tech': 'Tech',
    'badge.wip': 'in progress',
    'badge.draft': 'draft text',
    'footer.rights': 'Built with Astro, hosted on GitHub Pages.',
    'footer.source': 'Source',
  },
} as const;
