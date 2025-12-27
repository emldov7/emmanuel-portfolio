"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  index?: number;
}

export default function TechBadge({ name, index = 0 }: TechBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-lg border border-muted/20 bg-muted/5 p-4 transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all" />
      <p className="relative text-sm font-medium text-foreground text-center">
        {name}
      </p>
    </motion.div>
  );
}
