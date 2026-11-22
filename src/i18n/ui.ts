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
      'Az AI-tanulás útja',
    'projects.focus':
      'Az AI-t nem száraz elméletből, hanem a gyakorlaton keresztül, saját projekteken dolgozva ismertem meg. Önálló fejlesztési környezeteket hoztam létre és teszteltem, minden újabb munkába beépítve az előző lépésekből szerzett tapasztalatokat. Ha valami elsőre nem működött, vagy mélyebben meg akartam érteni egy-egy összefüggést, saját oktatóanyagokat és jegyzeteket készítettem – így már sokkal nagyobb rálátással tudtam továbbvinni a projektet, vagy akár tiszta lappal újrakezdeni.\n\nAgilis szakember szemével vizsgáltam, hol ad az AI valódi értéket egy Scrum Master, Product Owner vagy projektmenedzser munkájában, és hol válik kaotikussá, ha a folyamatot senki nem ellenőrzi, nem dokumentálja, és nem kíséri emberi jóváhagyás. Ezért az eszközeimben az AI előkészít, az ember dönt.',
    'projects.steps.title':
      'Az út négy állomása',
    'projects.steps':
      'Építés és tanulás|Saját környezetek, első automatizálások Make és n8n alapon. Fő fejlesztőeszközöm a Claude Code, mellette a ChatGPT Codexet használom, és a két eszközzel rendszeresen ellenőriztetem egymás kódját.\nSaját kódra váltás|Ahol egy low-code megoldás kinőtte a kereteit, saját, tesztelhető integrációkra cseréltem.\nMegbízható működés|Emberi jóváhagyási pontok, automatizált tesztek, verziókövetés, és dokumentáció, amit a fejlesztéssel együtt írok, nem utólag.\nTudásátadás|Ahogy a magabiztosságom nőtt, a környezetem egyre többször kért tőlem segítséget. Ma személyesen és kisebb csoportokban tanítom, amit megtanultam, és saját oktatóanyagokat készítek.',
    'projects.focusEnd':
      'Az alábbi projektek ezt az utat mutatják: miért születtek, mit csinálnak, és mit tanultam belőlük. AI-asszisztáltan készültek, néhány hobbiprojekt is akad köztük.',
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
    'group.pm.title': 'Három módszer, egy szemlélet',
    'group.pm.subtitle': 'waterfall, agilis és hibrid',
    'group.pm.text': 'A három projekt együtt: nem ragadok le egy módszertannál, hanem ötvözni is tudom őket.',
    'stats.projects': 'projekt',
    'stats.technologies': 'technológia',
    'stats.tools': 'AI-fejlesztőeszköz',
    'stats.models': 'Modellek és fejlesztési környezet',
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
      'The path of learning AI',
    'projects.focus':
      "I got to know AI not through dry theory but through practice, working on my own projects. I created and tested my own development environments, building what I learned from each step into every new piece of work. When something didn't work at first, or I wanted to understand a connection more deeply, I wrote my own tutorials and notes – so I could carry the project on with a much better overview, or even start again with a clean slate.\n\nI looked at it through an agile practitioner's eyes: where AI adds real value to the work of a Scrum Master, Product Owner or project manager, and where it turns chaotic when nobody checks the process, documents it or accompanies it with human sign-off. That's why in my tools, AI prepares and the human decides.",
    'projects.steps.title':
      "The four stages of the path",
    'projects.steps':
      "Building and learning|My own environments, first automations on Make and n8n. My main development tool is Claude Code, alongside ChatGPT Codex, and I regularly have the two review each other's code.\nMoving to my own code|Where a low-code solution outgrew its limits, I replaced it with my own, testable integrations.\nReliable operation|Human approval points, automated tests, version control, and documentation that I write together with the development, not afterwards.\nSharing knowledge|As my confidence grew, people around me asked for help more and more often. Today I teach what I've learned, in person and in small groups, and I create my own tutorials.",
    'projects.focusEnd':
      "The projects below trace this path: why they were made, what they do, and what I learned from them. They were built with AI assistance, and a few hobby projects are among them.",
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
    'group.pm.title': 'Three methods, one mindset',
    'group.pm.subtitle': 'waterfall, agile and hybrid',
    'group.pm.text': "The three projects together: I don't get stuck on one methodology, I can combine them too.",
    'stats.projects': 'projects',
    'stats.technologies': 'technologies',
    'stats.tools': 'AI coding tools',
    'stats.models': 'Models and development environment',
    'badge.wip': 'in progress',
    'badge.draft': 'draft text',
    'footer.rights': 'Built with Astro, hosted on GitHub Pages.',
    'footer.source': 'Source',
  },
} as const;
