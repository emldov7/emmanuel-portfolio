"use client";

import { motion } from "framer-motion";
import { Award, Target, Lightbulb, Code2 } from "lucide-react";

export default function AboutPage() {
  const highlights = [
    {
      icon: Code2,
      title: "Profil technique et fonctionnel",
      description: "Développement, analyse fonctionnelle, tests applicatifs et validation des parcours utilisateurs.",
    },
    {
      icon: Award,
      title: "Applications en production",
      description: "Produit réel classé Top 10 Shopping avec des utilisateurs actifs.",
    },
    {
      icon: Target,
      title: "Orienté qualité et résultats",
      description: "Tests fonctionnels, suivi des anomalies, livrables stables et utilisés.",
    },
    {
      icon: Lightbulb,
      title: "Vision produit",
      description: "Conception de solutions numériques complètes, fiables et performantes.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-muted/20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight">
                À propos de{" "}
                <span className="text-gradient">moi</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground"
            >
              Développeur fullstack & analyste fonctionnel, orienté produit, qualité et impact réel
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground leading-relaxed">
                Je suis développeur fullstack Web et Mobile avec une forte sensibilité à la qualité applicative, à l'analyse fonctionnelle et à l'expérience utilisateur.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                J'ai complété l'ensemble des cours du DEC en informatique – Développement
                Web et Mobile (Épreuve uniforme de français à compléter) et je participe à la conception, à la validation et à la mise en production de solutions numériques utilisées par de vrais utilisateurs.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Je suis le fondateur de <span className="text-primary font-semibold">Nexaa Market</span>,
                une application mobile publiée sur Google Play Store et Apple App Store, qui a
                atteint le top 10 de la catégorie Shopping et plus de 350
                utilisateurs actifs deux semaines après son lancement. Ce projet m'a permis de travailler sur l'ensemble du cycle de vie d'un produit : analyse des besoins, définition des parcours utilisateurs, tests fonctionnels, suivi des anomalies et amélioration continue après mise en production.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                En parallèle, j'accompagne des clients en freelance en livrant des applications
                web et mobiles complètes, de l'analyse des besoins jusqu'au déploiement en
                production, en accordant une attention particulière à la validation fonctionnelle, à la qualité des livrables et à la satisfaction des utilisateurs.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-xl border border-muted/20 bg-muted/5 p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all" />

                    <div className="relative space-y-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="text-lg font-heading font-semibold text-foreground">
                        {highlight.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pt-8 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                Ma vision
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed">
                Je crois que la technologie doit avant tout servir les utilisateurs et offrir des solutions fiables, sécurisées et de qualité.
                Mon approche combine rigueur fonctionnelle, compréhension des besoins d'affaires et base technique solide afin de livrer des solutions qui répondent réellement aux attentes.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Je continue actuellement de me perfectionner, notamment en Java, en tests applicatifs et en environnements cloud (AWS), tout en développant de nouveaux projets et en accompagnant mes clients dans leurs besoins numériques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
