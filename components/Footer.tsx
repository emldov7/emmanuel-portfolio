"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-muted/20 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-heading font-bold text-gradient">
              Kossi Emmanuel DOVON
            </h3>
            <p className="text-sm text-muted-foreground">
              Développeur Fullstack Web & Mobile
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">
              Suivez-moi
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/emldov7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-dovon-079220286/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:kossiemmanueldovon@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted/20">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Emmanuel DOVON. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
