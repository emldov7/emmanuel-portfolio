export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Langages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Kotlin",
      "PHP",
      "HTML5",
      "CSS3",
      "React",
      "Next.js",
      "Django",
      "FastAPI",
      "Laravel",
      "Node.js"
    ]
  },
  {
    title: "Backend & API",
    skills: [
      "API REST",
      "Microservices",
      "Authentification (JWT)",
      "Sécurité applicative"
    ]
  },
  {
    title: "Mobile",
    skills: [
      "Android natif (Kotlin, Java)",
      "React Native"
    ]
  },
  {
    title: "DevOps & Environnements",
    skills: [
      "Linux",
      "Git / GitHub",
      "Docker",
      "Déploiement serveur",
      "Vercel"
    ]
  },
  {
    title: "Bases de données",
    skills: [
      "MySQL",
      "PostgreSQL"
    ]
  },
  {
    title: "Méthodologies",
    skills: [
      "Agile / Scrum"
    ]
  }
];
