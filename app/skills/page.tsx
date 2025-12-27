"use client";

import { motion } from "framer-motion";
import TechBadge from "@/components/TechBadge";
import { skillsData } from "@/data/skills";

export default function SkillsPage() {
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
                Compétences &{" "}
                <span className="text-gradient">Technologies</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground"
            >
              Stack technique moderne pour créer des applications performantes
            </motion.p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-16">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                    {category.title}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-muted/50 to-transparent" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <TechBadge
                      key={skill}
                      name={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl mt-20 p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              En apprentissage continu
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Je continue à enrichir mes compétences avec de nouvelles technologies et frameworks.
              Actuellement, je me perfectionne en :
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java avancé", "AWS Cloud", "Architecture Microservices", "Java Spring Boot"].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-primary/10 border border-primary/20 px-3 py-1 text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
