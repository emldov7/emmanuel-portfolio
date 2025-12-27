"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  id,
  title,
  description,
  stack,
  image,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${id}`}>
        <div
          className={cn(
            "group relative overflow-hidden rounded-2xl border border-muted/20 bg-muted/5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
            featured && "border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5"
          )}
        >
          {featured && (
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                Featured
              </span>
            </div>
          )}

          {image && (
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          <div className="space-y-4 p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-gradient transition-all">
                {title}
              </h3>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
              {stack.length > 4 && (
                <span className="inline-flex items-center rounded-md bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  +{stack.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
