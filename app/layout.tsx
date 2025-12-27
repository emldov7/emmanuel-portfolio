import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Emmanuel DOVON - Développeur Fullstack",
  description: "Développeur Fullstack Web & Mobile. Applications web et mobiles performantes, du concept à la production.",
  keywords: ["développeur fullstack", "web", "mobile", "React", "Next.js", "TypeScript", "API"],
  authors: [{ name: "Emmanuel DOVON" }],
  creator: "Emmanuel DOVON",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://emmanueldovon.dev",
    title: "Emmanuel DOVON - Développeur Fullstack",
    description: "Développeur Fullstack Web & Mobile. Applications web et mobiles performantes, du concept à la production.",
    siteName: "Emmanuel DOVON Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
