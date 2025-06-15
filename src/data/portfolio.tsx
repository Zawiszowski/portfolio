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
    period: "2023 - now",
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
    description: 'A complete project management system with damper force tracking and process capability analysis.',
    technologies: ['Django', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'Nginx']
  },
  {
    title: 'Top Mount Management System',
    description: 'A diagnostic platform for tracking stiffness characteristics and damage detection.',
    technologies: ['Django', 'React', 'Python', 'MongoDB', 'Docker', 'Nginx']
  },
  {
    title: 'Hydraulic End of Stroke System',
    description: 'A system for generating force, energy, and work characteristics based on selected components and dimensions.',
    technologies: ['Django', 'React', 'PostgreSQL', 'Docker', 'Nginx']
  },
  {
    title: 'NI Recorder',
    description: 'Time signal recording from NI hardware. Measurement cards: Sound-Vibration, Strain/Bridge, Voltage.',
    technologies: ['Python', 'NI-daqmx', 'PyQt']
  },
  {
    title: 'Signal Quality',
    description: 'Machine output signal control using the input signal as a reference.',
    technologies: ['Python', 'PyQt']
  },
  {
    title: 'General Signal Processing Apps',
    description: 'Time data processing tailored to client requirements including BMW, Volvo, Stellantis, and Porsche.',
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
  title: 'Automotive Technology Enthusiast',
  about: [
    {
      paragraph: `I am an experienced Software Engineer with over 3 years of experience in the automotive industry.
                  I specialize in developing advanced backend systems and modern user interfaces.`
    },
    {
      paragraph: `My expertise includes Django, React, and FastAPI. I have worked on projects involving
                  damper force management systems (process capability),
                  monitoring the condition and characteristics of top mounts,
                  generating characteristics for hydraulic end-of-stroke systems,
                  and time signal processing.`
    },
    {
      paragraph: `I constantly improve my skills by keeping up with the latest technology trends
                  and implementing best practices in my projects. In my free time, I'm a homebrewer.`
    }
  ]
};
