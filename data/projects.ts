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
    description: "Marketplace mobile développée pour connecter vendeurs et acheteurs",
    longDescription: "Application mobile complète de marketplace, publiée sur Google Play Store et Apple App Store, permettant aux vendeurs et acheteurs de transiger en toute sécurité.",
    context: "Marketplace mobile développée pour connecter vendeurs et acheteurs dans un écosystème sécurisé et performant.",
    problem: "Besoin d'une plateforme mobile intuitive et fiable pour faciliter les transactions entre vendeurs et acheteurs, avec un focus sur la sécurité et l'expérience utilisateur.",
    solution: "Développement d'une application mobile native complète avec système d'authentification, gestion des produits, messagerie intégrée, et système de paiement sécurisé.",
    results: [
      "Top 10 catégorie Shopping (4ᵉ position)",
      "+350 utilisateurs actifs",
      "Application Android & iOS déployée en production",
      "Architecture scalable et performante"
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
    description: "Application web de gestion d'événements complète",
    longDescription: "Projet freelance livré à un client réel. Application web de gestion d'événements, déployée et utilisée en production.",
    context: "Projet freelance pour un client ayant besoin d'une solution de gestion d'événements personnalisée.",
    problem: "Le client avait besoin d'une plateforme web pour gérer ses événements, participants, inscriptions et communications de manière centralisée.",
    solution: "Développement d'une application web fullstack avec tableau de bord administrateur, système d'inscription, gestion des participants, et notifications automatisées.",
    results: [
      "Projet livré et déployé en production",
      "Client satisfait - Projet rémunéré 1 000 $",
      "Application utilisée pour la gestion de multiples événements",
      "Interface intuitive et responsive"
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "API REST"
    ],
    featured: true
  },
  {
    id: "entretiens-soins-requis",
    title: "Entretiens et soins requis",
    description: "Site web professionnel pour services d'entretien et de soins",
    longDescription: "Site web complet développé pour présenter les services d'entretien et de soins requis, déployé et utilisé en production.",
    context: "Développement d'un site web professionnel pour une entreprise de services d'entretien et de soins.",
    problem: "Besoin d'une présence en ligne professionnelle pour présenter les services et faciliter la prise de contact avec les clients.",
    solution: "Création d'un site web moderne et responsive avec présentation des services, formulaire de contact, et optimisation SEO.",
    results: [
      "Site déployé en production",
      "Design moderne et professionnel",
      "Interface responsive et accessible",
      "Optimisé pour le référencement"
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
