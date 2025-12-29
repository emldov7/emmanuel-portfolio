"use client";

import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Download, Code2, Users, TrendingUp, Rocket } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  const stats = [
    {
      icon: Users,
      value: "+350",
      label: "Utilisateurs actifs (en moins de 2 semaines après le lancement)",
    },
    {
      icon: TrendingUp,
      value: "Top 10",
      label: "Catégorie Shopping (4ᵉ position)",
    },
    {
      icon: Rocket,
      value: "Production",
      label: "Android & iOS - Applications publiées et maintenues",
    },
    {
      icon: Code2,
      value: "Qualité & fiabilité",
      label: "Analyse fonctionnelle • Tests • Validation des livrables",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
                Analyste fonctionnel & Développeur fullstack
                <br />
                <span className="text-gradient">Web & Mobile</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Je conçois, valide et livre des produits numériques fiables,
              de l'analyse des besoins jusqu'à la mise en production.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-muted-foreground"
            >
              Applications web & mobiles • Analyse fonctionnelle • Tests applicatifs • Produits réels en production
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <CTA href="/projects" variant="primary">
                Voir mes projets
              </CTA>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/cv/CV DOVON EMMANUEL 2025.pdf"
                  download="CV_Emmanuel_DOVON_2025.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-muted/20 bg-muted/5 text-foreground px-6 py-3 font-medium transition-all hover:border-primary/50 hover:bg-muted/10"
                >
                  <Download className="h-4 w-4" />
                  Télécharger mon CV
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 border-y border-muted/20 bg-muted/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Applications réelles • Projets déployés • Utilisateurs actifs • Analyse des besoins • Tests fonctionnels • Amélioration continue
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              Projets en vedette
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Applications déployées en production, testées et utilisées par de vrais utilisateurs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                stack={project.stack}
                image={project.image}
                featured={project.featured}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <CTA href="/projects" variant="secondary">
              Voir tous les projets
            </CTA>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
