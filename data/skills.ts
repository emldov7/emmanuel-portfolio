export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Analyse fonctionnelle & Qualité applicative",
    skills: [
      "Analyse des besoins et compréhension des exigences",
      "Définition des parcours utilisateurs",
      "Rédaction de scénarios et cas de tests",
      "Tests fonctionnels et tests d'intégration",
      "Documentation et suivi des anomalies",
      "Validation des livrables avant mise en production",
      "Support fonctionnel post-déploiement"
    ]
  },
  {
    title: "Langages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Kotlin",
      "PHP",
      "HTML5",
      "CSS3"
    ]
  },
  {
    title: "Frameworks & bibliothèques",
    skills: [
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
      "Conception et consommation d'API REST",
      "Architecture microservices",
      "Authentification et gestion des accès (JWT – bases)",
      "Sécurité applicative (bases)"
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
      "Docker (bases)",
      "Déploiement applicatif",
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
      "Agile / Scrum",
      "Collaboration inter-équipes",
      "Livraison continue et amélioration continue"
    ]
  }
];
