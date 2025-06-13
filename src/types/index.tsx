export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: Array<string>;
  technologies: Array<string>;

}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface About {
  paragraph: string;

}

export interface PersonalInfo {
  name: string;
  title: string;
  about: Array<About>;

}


