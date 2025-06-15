import { type Skill, type Project, type ContactItem, type PersonalInfo, type Experience } from "../types";

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
  {
    name: 'Other',
    icon: '📦',
    description: 'Nginx, Gitlab, Asana'
  },

];

export const experiences: Experience[] = [
  {
    company: "BWI Poland Technologies",
    position: "Software Engineer",
    period: "2023 - obecnie",
    location: "Kraków, Polska",
    description: [
      "Development of web applications for internal engineering purposes:",
      "Application for calculating physical characteristics of additional passive damper systems.",
      "Application for determining the production process capability, including automatic data retrieval from measurement machines.",
      "Application for tracking the condition and status of upper damper mounts used in NVH (Noise, Vibration, Harshness) testing, including image capture and stiffness characteristics.",
      "Collaboration with the IT administration department to align the technological stack and prepare deployment versions.",
      "Supervision and execution of measurements for brake systems and air suspension modules in the NVH domain.",
      "Support in modal analysis of automotive component parts",
      "Leading software development projects in a two/three person team",
      "Development of desktop applications:",
      "Post-processing of data and generation of ready-to-use reports"


    ],
    technologies: ["Django", "FastAPI", "React", "PostgreSQL", "Docker", "Kubernetes", "AWS"]
  },
  {
    company: "BWI Poland Technologies",
    position: "Test Engineer",
    period: "2022 - 2023",
    location: "Kraków, Polska",
    description: [
      "Development of software primarily related to workflow automation and data processing",
      "Supervising passive damper testing within the field of Noise, Vibration, and Harshness",
      "Tuning and configuring hydraulic test machines for damper performance and durability testing",
      "Creating and maintaining detailed test procedures, reports, and technical documentation",
  
    ],
    technologies: ["Django", "React", "TypeScript", "Redis", "PostgreSQL", "Docker"]
  },
  {
    company: "EC Test Systems",
    position: "Application Engineer",
    period: "2020 - 2022",
    location: "Kraków, Polska",
    description: [
      "Technical support in selecting measurement technologies and proposing suitable solutions.",
      "Designing and presenting technological solutions for piezoelectric sensors in collaboration with PCB Piezoelectronics Europe",
      "Development of a mobile application for data acquisition and basic analysis using a piezoelectric sensor with an integrated measurement feed.",
      "Conducting trainings and workshops on signal processing and measurement techniques for engineering teams and clients"

    ],
    technologies: ["Java", "Android Studio"]
  },
  {
    company: "AGH University of Science and Technology",
    position: "Mechatronics",
    period: "2018 - 2021",
    location: "Kraków, Polska",
    description: [
      "Laser Doppler vibrometry assisted by 3D vision–based object reconstruction",
      "Mobile application for vibration analysis with use of signal conditioner and vibration sensor",
    ],
    technologies: ["Java", "Android Studio", "Matlab", "C++"]
  },
  {
    company: "Ampleforth College",
    position: "Math, Physics",
    period: "2016",
    location: "York, Great Britain",
    description: [
      "...",
    ],
    technologies: ["..."]
  }
];

export const projects: Project[] = [
  {
    title: 'Damper Force Management System',
    description: 'Kompletny system zarządzania projektami z możliwością śledzenia sił tłumienia i analizy zdolnosci procesu.',
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
    technologies: ['Python', 'PyQt', 'tkinter', 'Pandas', 'NumPy', 'Scikitlearn', 'SciPy']
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
