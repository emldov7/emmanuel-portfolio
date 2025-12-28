"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "kossiemmanueldovon@gmail.com",
      href: "mailto:kossiemmanueldovon@gmail.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+1 514 621 2053",
      href: "tel:+15146212053",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "https://github.com/emldov7",
      href: "https://github.com/emldov7",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Emmanuel DOVON",
      href: "https://linkedin.com",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    alert("Fonctionnalité d'envoi à implémenter avec un backend");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                Travaillons{" "}
                <span className="text-gradient">ensemble</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground"
            >
              Projet, opportunité professionnelle ou besoin en analyse et tests TI
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                    Restons en contact
                  </h2>
                  <p className="text-base text-muted-foreground">
                    N'hésitez pas à me contacter pour discuter d'une opportunité professionnelle en analyse fonctionnelle ou tests applicatifs, d'un projet numérique nécessitant rigueur, validation et qualité, ou simplement pour échanger autour des technologies et des produits numériques.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <motion.a
                        key={method.title}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex items-center gap-4 p-4 rounded-lg border border-muted/20 bg-muted/5 transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
                      >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {method.title}
                          </p>
                          <p className="text-base font-semibold text-foreground">
                            {method.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5"
                >
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    Disponibilité
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ouvert aux opportunités professionnelles en analyse fonctionnelle, coordination de tests et qualité applicative. Disponible également pour des mandats ciblés nécessitant une base technique en développement.
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                    Envoyez-moi un message
                  </h2>
                  <p className="text-base text-muted-foreground">
                    Remplissez le formulaire ci-dessous et je vous répondrai dans les plus
                    brefs délais.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-muted/20 bg-muted/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-muted/20 bg-muted/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      placeholder="Adresse courriel"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-muted/20 bg-muted/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-muted/20 bg-muted/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all"
                  >
                    <Send className="h-4 w-4" />
                    Envoyer le message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
