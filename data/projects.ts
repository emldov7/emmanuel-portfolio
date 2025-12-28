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
    description: "Application web – Projet client (freelance)",
    longDescription: "Développement d'une plateforme web permettant la gestion complète d'événements (création, inscriptions, suivi).",
    context: "Développement d'une plateforme web permettant la gestion complète d'événements (création, inscriptions, suivi).",
    problem: "Analyse des besoins client et rédaction des exigences fonctionnelles • Définition des cas d'utilisation • Validation des fonctionnalités livrées • Tests fonctionnels et documentation des anomalies • Déploiement et support post-mise en production",
    solution: "Application web complète avec tableau de bord administrateur, système d'inscription, gestion des participants, et suivi des événements en temps réel.",
    results: [
      "Projet livré, déployé et utilisé par le client",
      "Respect des délais et du budget",
      "Validation fonctionnelle complète avant mise en production",
      "Application stable utilisée pour plusieurs événements"
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
