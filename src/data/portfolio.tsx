import { type Skill, type Project, type ContactItem, type PersonalInfo } from "../types";

export const skills: Skill[] = [
  {
    name: 'Django',
    icon: '🤠',
    description: 'Zaawansowane API, ORM, authentication, rest framework'
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'National Instruments Apps, Time Data Processing, Noise-Harshness-Vibration, '
  },
  {
    name: 'React',
    icon: '⚛️',
    description: 'Hooks, Context, TypeScript, JavaScript'
  },
  {
    name: 'FastAPI',
    icon: '🚀',
    description: 'Async API, OpenAPI, Pydantic'
  },
  
  {
    name: 'PostgreSQL',
    icon: '🐘',
    description: 'Database design, optimization, migrations'
  },
  {
    name: 'MongoDB',
    icon: '🌱',
    description: 'Database design, optimization, migrations'
  },
  {
    name: 'OS',
    icon: '☁️',
    description: 'Linux, WIndows'
  },
  {
    name: 'Docker',
    icon: '🐳',
    description: 'Containerization, Docker Compose'
  },

];

export const projects: Project[] = [
  {
    title: 'Damper Force Management System',
    description: 'Kompletny system zarządzania projektami z możliwością śledzenia sił tłumienia i analizą wskaźników tłumienia.',
    technologies: ['Django', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'Nginx']
  },
  {
    title: 'Top Mount Management System',
    description: 'Platforma diagnostyczna do śledzenia charakterystyk sztywności i wykrywania uszkodzeń.',
    technologies: ['Django', 'React', 'Python', 'MongoDB', 'Docker', 'Nginx']
  },
  {
    title: 'Hydraulic End of Stroke System',
    description: 'Generator charakterystyk siły, energi i pracy w zależności od wybranych komponentów i wymiarów .',
    technologies: ['Django', 'React', 'PostgreSQL', 'Docker', 'Nginx']
  },
  {
    title: 'NI recorder',
    description: 'Rejestrowanie przebiegów czasowych z hardwaru NI. Karty pomiarowe: Sound-Vibration, Strain/Bridge, Voltage.',
    technologies: ['Python', 'NI-daqmx', 'PyQt',]
  },
  {
    title: 'Signal Quality',
    description: 'Kontrolowanie sygnału wyjsciowego maszyny za pomocą referencji w postaci sygnału wejściowego.',
    technologies: ['Python', 'PyQt',]
  },
  {
    title: 'General Signal Processing Apps',
    description: 'Processing danych czasowych w zależności od wymagań klientów min. : BMW, Volvo, Stellantis, Porsche.',
    technologies: ['Python', 'PyQt', 'tkinter', 'Pandas', 'NumPy', 'Scikitlearn', '...']
  }
];
export const contactItems: ContactItem[] = [
  {
    label: 'Email',
    value: 'tomasz.zawiszowski@gmail.com',
    href: 'mailto:tomasz.zawiszowski@gmail.com',
    icon: '📧'
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: 'none',
    icon: '💼'
  },
  {
    label: 'GitHub',
    value: 'GitHub Profile',
    href: 'https://github.com/Zawiszowski',
    icon: '⚡'
  }
];

export const personalInfo: PersonalInfo = {
  name: 'Tomasz Zawiszowski',
  title: 'Pasjonat technologii automotive',
  about: [
    {
    paragraph: `Jestem doświadczonym Software Engineerem z ponad 3-letnim doświadczeniem w branży automotive. 
                Specjalizuję się w tworzeniu zaawansowanych systemów backend oraz nowoczesnych interfejsów użytkownika.`,

    },
    {
      paragraph: `Moja ekspertyza obejmuje Django, React i FastAPI. Pracowałem przy projektach związanych z 
                  systemami zarządzania siłami tłumienia amortyzatorów pasywnych(zdolność procesu), 
                  śledzeniem stanu/charakterystyk górnych mocowań amortyzatora,
                  generowaniem charakterystyk dodatkowych systemów hydraulicznych w amortyzatorach oraz 
                  przetwarzaniem danych czasowych.`
    },
    {
      paragraph: `Stale rozwijam swoje umiejętności, śledząc najnowsze trendy w technologii i implementując 
                  najlepsze praktyki w swoich projektach. W czasie wolnym piwowar domowy.`
    },

  ]

};
