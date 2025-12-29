"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

export default function ResumePage() {
  const experiences = [
    {
      title: "Stagiaire Analyste fonctionnel / Développeur",
      company: "AIRPD, Montréal",
      period: "Juin 2025 – Août 2025",
      description: [
        "Analyse des besoins et rédaction des exigences fonctionnelles pour les applications web internes",
        "Définition de cas d'utilisation et validation des fonctionnalités livrées",
        "Rédaction de scénarios de tests fonctionnels et tests d'intégration",
        "Correction de bugs et documentation des anomalies",
        "Participation aux réunions Agile et suivi des itérations avec l'équipe produit",
        "Support post-déploiement et amélioration continue",
      ],
    },
    {
      title: "Analyste fonctionnel & Développeur Freelance",
      company: "Divers clients",
      period: "2023 - Présent",
      description: [
        "Analyse des besoins client et rédaction des exigences fonctionnelles pour sites web et applications mobiles",
        "Définition des parcours utilisateurs et validation des fonctionnalités avant mise en production",
        "Rédaction de scénarios de tests fonctionnels et tests d'intégration",
        "Documentation et suivi des anomalies, correction de bugs",
        "Développement fullstack Web (React, Node.js) et Mobile (React Native, Android natif)",
        "Gestion complète des projets : analyse, développement, tests, déploiement et support post-livraison",
      ],
    },
    {
      title: "Fondateur & Analyste fonctionnel",
      company: "Nexaa Market",
      period: "2023 - Présent",
      description: [
        "Analyse des besoins et définition des fonctionnalités clés",
        "Conception des parcours utilisateurs et validation des fonctionnalités",
        "Rédaction de scénarios de tests fonctionnels et tests d'intégration",
        "Suivi et correction des anomalies post-déploiement",
        "Amélioration continue basée sur les retours utilisateurs",
        "Application mobile publiée sur Google Play Store et Apple App Store : Top 10 catégorie Shopping (4ᵉ position), +350 utilisateurs actifs",
      ],
    },
  ];

  const education = [
    {
      degree: "DEC en Informatique – Développement Web et Mobile",
      school: "Tous les cours du DEC complétés",
      period: "2025",
      description: "En attente de validation de l'Épreuve Uniforme de Français pour l'obtention du DEC",
      highlights: [
        "Projets notables : application web de réservation en ligne, validation fonctionnelle et tests",
        "Cours avancés : intelligence artificielle avec Python, développement mobile, microservices, IoT (Raspberry Pi), systèmes embarqués",
        "Méthodologies : Agile / Scrum, gestion de projet, collaboration inter-équipes",
        "Tests et qualité applicative : rédaction de scénarios de tests, tests d'intégration, documentation des anomalies",
        "Environnements : Linux, Windows"
      ]
    },
    {
      degree: "Baccalauréat général",
      school: "Spécialités : Mathématiques, Physique-Chimie, SVT",
      period: "2022",
      description: "Formation scientifique complète avec rigueur méthodologique",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-muted/20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight">
                Curriculum{" "}
                <span className="text-gradient">Vitae</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground"
            >
              Parcours professionnel et académique
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="/cv/CV DOVON EMMANUEL.pdf"
                download="CV_Emmanuel_DOVON.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                <Download className="h-4 w-4" />
                Télécharger le CV (PDF)
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-16">
            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                Profil professionnel
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Analyste fonctionnel / coordonnateur de tests avec base solide en développement fullstack Web et Mobile.
                Expérience concrète dans l'analyse des besoins, la validation fonctionnelle, la rédaction de scénarios de tests
                et le suivi des anomalies sur des applications déployées en production. Fondateur de Nexaa Market (Top 10 Shopping,
                +350 utilisateurs actifs), avec expérience en analyse fonctionnelle, tests fonctionnels, tests d'intégration et
                amélioration continue. Capacité démontrée à livrer des projets validés et utilisés par de vrais utilisateurs.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                  Expérience professionnelle
                </h2>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-primary/20"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                  Formation
                </h2>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-primary/20"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-primary font-medium">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                      {edu.highlights && (
                        <ul className="space-y-2 mt-3">
                          {edu.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                  Réalisations clés
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Analyse fonctionnelle et validation de fonctionnalités en production",
                  "Rédaction de scénarios de tests et tests d'intégration",
                  "Suivi et documentation des anomalies sur applications réelles",
                  "Application mobile validée : Top 10 Shopping, +350 utilisateurs actifs",
                  "Projets freelance livrés, validés et déployés",
                  "Support post-déploiement et amélioration continue",
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-lg border border-primary/20 bg-primary/5"
                  >
                    <span className="text-primary">✓</span>
                    <p className="text-sm text-foreground">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
