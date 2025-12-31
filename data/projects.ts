export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  context: string;
  problem: string;
  solution: string;
  results: string[];
  stack: string[];
  image?: string;
  link?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "nexaa-market",
    title: "Nexaa Market",
    description: "Marketplace mobile – Application en production",
    longDescription: "Application mobile conçue pour connecter vendeurs et acheteurs dans un environnement sécurisé et performant. Publiée sur Google Play Store et Apple App Store.",
    context: "Application mobile conçue pour connecter vendeurs et acheteurs dans un environnement sécurisé et performant. Publiée sur Google Play Store et Apple App Store.",
    problem: "Analyse des besoins et définition des fonctionnalités clés • Conception des parcours utilisateurs • Rédaction de scénarios de tests fonctionnels • Tests fonctionnels et tests d'intégration • Suivi et correction des anomalies post-déploiement • Amélioration continue basée sur les retours utilisateurs",
    solution: "Application mobile complète permettant la mise en relation entre vendeurs et acheteurs, avec système d'authentification sécurisé, gestion des produits, messagerie intégrée, et processus de paiement fiable.",
    results: [
      "Top 10 catégorie Shopping (4ᵉ position en moins de deux semaines après le lancement)",
      "Plus de 350 utilisateurs actifs (en moins de deux semaines après le lancement)",
      "Application stable et maintenue en production",
      "Tests fonctionnels rigoureux et suivi des anomalies"
    ],
    stack: [
      "React Native",
      "TypeScript",
      "API REST",
      "Backend Custom",
      "Firebase",
      "Google Play Store",
      "Apple App Store"
    ],
    image: "/images/image1.jpeg",
    link: "https://dome-q1hd.vercel.app",
    featured: true
  },
  {
    id: "event-management",
    title: "Plateforme de gestion d'événements",
    description: "Application web interne – Stage chez AIRPD",
    longDescription: "Développement d'une plateforme web interne pour la gestion complète d'événements (création, inscriptions, suivi) dans le cadre de mon stage chez AIRPD.",
    context: "Stage de développeur web & mobile chez AIRPD à Montréal (Juin 2025 – Août 2025). Développement d'applications web internes avec React (frontend) et Django (backend).",
    problem: "Développement d'applications web internes • Intégration d'APIs REST et gestion de l'authentification utilisateur • Correction de bugs et amélioration de l'expérience utilisateur • Participation aux réunions Agile avec l'équipe produit",
    solution: "Application web fullstack avec tableau de bord administrateur, système d'inscription, gestion des participants, intégration d'APIs REST et authentification sécurisée.",
    results: [
      "Application déployée et utilisée en interne chez AIRPD",
      "Participation active aux réunions Agile avec l'équipe produit",
      "Intégration réussie des APIs REST et système d'authentification",
      "Amélioration de l'expérience utilisateur et correction de bugs"
    ],
    stack: [
      "React",
      "Django",
      "Python",
      "API REST",
      "Authentification JWT",
      "Tailwind CSS"
    ],
    image: "/images/image3.png",
    link: "https://eventplanner-technodev.com",
    featured: true
  },
  {
    id: "entretiens-soins-requis",
    title: "Entretiens et soins requis",
    description: "Site web professionnel – Présence en ligne",
    longDescription: "Site web développé pour une entreprise de services d'entretien et de soins.",
    context: "Site web développé pour une entreprise de services d'entretien et de soins.",
    problem: "Analyse des besoins et attentes du client • Validation des contenus et parcours utilisateurs • Tests fonctionnels avant mise en ligne • Déploiement et mise en production",
    solution: "Site web professionnel présentant les services de l'entreprise, avec formulaire de contact et optimisation pour les moteurs de recherche.",
    results: [
      "Site déployé en production",
      "Interface responsive et accessible",
      "Validation complète avant mise en ligne",
      "Tests fonctionnels sur tous les navigateurs"
    ],
    stack: [
      "React",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
      "Vercel"
    ],
    image: "/images/image2.png",
    link: "https://www.entretiens-soins-requis.com/",
    featured: false
  }
];
