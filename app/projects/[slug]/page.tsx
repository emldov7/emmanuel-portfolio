"use client";

import { use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Back Button */}
      <section className="border-b border-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-muted/20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.featured && (
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 mb-6">
                  Projet en vedette
                </span>
              )}

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-foreground">
                {project.title}
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
                {project.longDescription}
              </p>

              {project.link && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-8"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all"
                  >
                    Voir le projet
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      {project.image && (
        <section className="border-b border-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-4xl"
            >
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-muted/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-16">
            {/* Context */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                Contexte
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.context}
              </p>
            </motion.div>

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                Problème
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                Solution
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                Résultats
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-lg border border-muted/20 bg-muted/5"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                Stack technique
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
