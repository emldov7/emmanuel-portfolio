"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTA({
  href,
  children,
  variant = "primary",
  className,
}: CTAProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all",
          variant === "primary" &&
            "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40",
          variant === "secondary" &&
            "border border-muted/20 bg-muted/5 text-foreground hover:border-primary/50 hover:bg-muted/10",
          className
        )}
      >
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
