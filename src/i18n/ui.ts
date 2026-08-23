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
      'Az utóbbi pár hónapban azzal foglalkoztam, hogy egy agilis szakember (Scrum Master, Product Owner, projektmenedzser) mindennapjaiban milyen valódi lehetőségeket nyit meg az AI: hol gyorsítja és könnyíti meg a munkát, és valóban teremt-e mérhető értéket. Elég egy jó prompt, vagy inkább egy célzott, egyszerű alkalmazásra van szükség? Mindkettő spórolhat időt — de ha a folyamatok nincsenek egymásra építve, ellenőrizve, dokumentálva és emberi jóváhagyással kísérve, a felgyorsult munka könnyen kaotikussá válhat, és felemésztheti a megspórolt időt.\n\nAz alábbi projektek ezt az utat mutatják be: olyan folyamatok, alkalmazások és ötletek megvalósítását, amelyekben megmarad a folyamatos értékteremtés — miközben a technológia segítségével időt és energiát szabadíthatunk fel. A szakmai fókusz mellett néhány hobbi projektet is bemutatok, amelyek sokszínűbbé tették a kísérletezést, és újabb ötletekhez, valamint egy kis plusz lelkesedéshez is hozzájárultak. A projektek megvalósítása során AI-asszisztált fejlesztési megközelítést, vibe coding módszertant alkalmaztam, megtapasztalva, hogyan lehet az AI-t nem csupán eszközként, hanem a fejlesztési folyamat aktív társaként használni.',
    'projects.wip':
      'Az oldal folyamatosan épül és fejlődik, jelenleg a projektmunkák bemutatása áll a középpontban.',
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
      "Over the past few months I've been exploring what real opportunities AI opens up in the everyday work of an agile practitioner (Scrum Master, Product Owner, project manager): where it actually speeds up and eases the work, and whether it truly creates measurable value. Is a good prompt enough, or does it take a focused, purpose-built application instead? Both can save time — but if the workflows aren't properly built on each other, checked, documented, and accompanied by human sign-off, that accelerated work can easily turn chaotic and eat up the time it saved.\n\nThe projects below trace that path: processes, applications, and ideas that keep creating real value — while using technology to free up time and energy. Alongside the professional focus, I'm also showcasing a few hobby projects, which made the experimentation more varied and brought new ideas along with a bit of extra enthusiasm. Across all of these projects I used an AI-assisted development approach — vibe coding — experiencing firsthand how AI can be not just a tool, but an active partner in the development process.",
    'projects.wip':
      'The site is continuously growing and evolving — right now the focus is on showcasing the project work.',
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
