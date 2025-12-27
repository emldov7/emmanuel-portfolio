# Portfolio Emmanuel DOVON

Portfolio professionnel ultra moderne développé avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components avec shadcn/ui design patterns
- **Icons**: Lucide React

## ✨ Fonctionnalités

- Design moderne et professionnel inspiré de Vercel, Stripe et Linear
- Dark mode par défaut avec thème personnalisé
- Animations fluides et subtiles
- Responsive design (mobile-first)
- Performance optimisée
- SEO-friendly
- Pages:
  - Accueil avec Hero section et statistiques
  - À propos
  - Compétences techniques
  - Projets (avec pages détaillées)
  - CV
  - Contact

## 🛠️ Installation et développement

### Prérequis

- Node.js 18+ installé
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Commandes disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Crée un build de production
npm run start    # Démarre le serveur de production
npm run lint     # Vérifie le code avec ESLint
```

## 📁 Structure du projet

```
emmanuel_portfolio/
├── app/                    # Pages Next.js (App Router)
│   ├── about/             # Page À propos
│   ├── contact/           # Page Contact
│   ├── projects/          # Page Projets
│   │   └── [slug]/        # Pages dynamiques des projets
│   ├── resume/            # Page CV
│   ├── skills/            # Page Compétences
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   └── TechBadge.tsx
├── data/                  # Données du portfolio
│   ├── projects.ts        # Données des projets
│   └── skills.ts          # Données des compétences
├── lib/                   # Utilitaires
│   └── utils.ts
└── public/                # Fichiers statiques
    └── images/
```

## 🎨 Design System

### Couleurs

- **Background**: `#0B0F19` (dark)
- **Foreground**: `#F8F9FA` (light)
- **Primary**: `#8B5CF6` (violet)
- **Accent**: `#3B82F6` (bleu)

### Typographie

- **Sans-serif**: Inter
- **Headings**: Space Grotesk

## 🚀 Déploiement

### Vercel (Recommandé)

1. Pusher le code sur GitHub
2. Importer le projet sur [Vercel](https://vercel.com)
3. Déploiement automatique à chaque commit

```bash
# Ou utiliser Vercel CLI
npm install -g vercel
vercel
```

## 📝 Personnalisation

### Modifier les informations personnelles

1. **Projets**: Éditer `data/projects.ts`
2. **Compétences**: Éditer `data/skills.ts`
3. **Métadonnées**: Éditer `app/layout.tsx`
4. **Liens sociaux**: Éditer `components/Footer.tsx`

### Ajouter un nouveau projet

```typescript
// Dans data/projects.ts
{
  id: "mon-projet",
  title: "Mon Projet",
  description: "Description courte",
  longDescription: "Description détaillée",
  context: "...",
  problem: "...",
  solution: "...",
  results: ["Résultat 1", "Résultat 2"],
  stack: ["React", "Node.js"],
  featured: true
}
```

## 📄 Licence

MIT © Emmanuel DOVON

## 📧 Contact

- Email: contact@emmanueldovon.dev
- GitHub: [github.com/emmanueldovon](https://github.com)
- LinkedIn: Emmanuel DOVON
