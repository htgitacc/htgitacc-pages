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
    'projects.focus':
      'Az utóbbi pár hónapban azzal foglalkoztam, hogy egy agilis szakember (Scrum Master, Product Owner, projektmenedzser) mindennapjaiban milyen valódi lehetőségeket nyit meg az AI: hol gyorsítja és könnyíti meg a munkát, és tényleg teremt-e mérhető értéket. Elég egy jó prompt, vagy inkább egy célzott, egyszerű alkalmazásra van szükség? Mindkettő spórolhat időt — de ha a folyamatok nincsenek egymásra építve, ellenőrizve, dokumentálva és emberi jóváhagyással kísérve, a felgyorsult munka könnyen kaotikussá válik, és felemészti a megspórolt időt. Az alábbi projektek ezt az utat mutatják be: olyan folyamatok, alkalmazások és ötletek megvalósítását, ahol megmarad a folyamatos értékteremtés — és a megspórolt idővel végre szabadon rendelkezhetünk.',
    'projects.wip':
      'Az oldal még épül — egyelőre a projektek bemutatására koncentrálunk.',
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
    'projects.focus':
      "Over the past few months I've been exploring what AI genuinely offers an agile practitioner — Scrum Master, Product Owner, or project manager: where it actually speeds things up, where it lightens the workload, and whether it creates real, measurable value. Is a good prompt enough, or does it take a focused, purpose-built application? Both can save time — but without workflows that build on each other, get checked, documented, and kept under human sign-off, that speed quickly turns chaotic and eats back the time it saved. The projects below trace that path: processes, apps, and ideas built to keep creating real value — so the time saved is genuinely ours to spend.",
    'projects.wip': 'This site is still under construction — for now the focus is on showcasing the projects.',
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
