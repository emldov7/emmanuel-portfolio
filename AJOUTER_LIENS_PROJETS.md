# 🔗 COMMENT AJOUTER VOS LIENS DE PROJETS

## ✅ SERVEUR CORRIGÉ ET FONCTIONNEL

Le portfolio fonctionne maintenant sur :
### 🌐 http://localhost:3001

---

## 📝 COMMENT AJOUTER LES LIENS DE VOS PROJETS DÉPLOYÉS

### Étape 1 : Ouvrir le fichier des projets

Ouvrez le fichier : **`data/projects.ts`**

### Étape 2 : Ajouter le champ `link` pour chaque projet

Pour chaque projet qui est **déjà en ligne**, ajoutez simplement le champ `link:` avec l'URL :

```typescript
{
  id: "nexaa-market",
  title: "Nexaa Market",
  description: "Marketplace mobile développée pour connecter vendeurs et acheteurs",
  longDescription: "Application mobile complète...",
  context: "Marketplace mobile...",
  problem: "Besoin d'une plateforme...",
  solution: "Développement d'une application...",
  results: [
    "Top 10 catégorie Shopping (4ᵉ position)",
    "+350 utilisateurs actifs",
    "Application Android & iOS déployée en production",
    "Architecture scalable et performante"
  ],
  stack: [
    "React Native",
    "TypeScript",
    "API REST",
    "Backend Custom",
    "Firebase",
    "Google Play Store",
    "Apple App Store"
  ],
  link: "https://play.google.com/store/apps/details?id=com.votreapp", // ← AJOUTEZ ICI
  featured: true
}
```

---

## 🎯 EXEMPLES DE LIENS À AJOUTER

### Pour Nexaa Market
```typescript
link: "https://play.google.com/store/apps/details?id=com.nexaamarket"
// OU si vous avez les deux :
// Google Play : https://play.google.com/...
// App Store : https://apps.apple.com/...
```

### Pour la Plateforme de gestion d'événements
```typescript
link: "https://votresite-events.com"
// OU l'URL de production donnée au client
```

### Pour l'App de réservation
```typescript
link: "https://votre-app-reservation.vercel.app"
// OU l'URL où elle est déployée
```

---

## 📋 TEMPLATE À COPIER

Voici le template complet pour ajouter un nouveau projet avec lien :

```typescript
{
  id: "mon-projet",                              // URL-friendly (sans espaces)
  title: "Mon Super Projet",                     // Titre affiché
  description: "Description courte du projet",   // Pour la card
  longDescription: "Description plus détaillée", // Pour la page détail
  context: "Contexte du projet...",
  problem: "Problème à résoudre...",
  solution: "Solution apportée...",
  results: [
    "Résultat mesurable 1",
    "Résultat mesurable 2",
    "Résultat mesurable 3",
    "Résultat mesurable 4"
  ],
  stack: [
    "Techno 1",
    "Techno 2",
    "Techno 3"
  ],
  link: "https://mon-projet-en-ligne.com",       // ← LIEN LIVE
  featured: true                                  // true = en vedette
}
```

---

## 🎨 CE QUI SE PASSE AUTOMATIQUEMENT

Quand vous ajoutez le champ `link:` :

### ✅ Sur la page de détail du projet
Un bouton **"Voir le projet"** apparaît automatiquement :

```
┌─────────────────────────────┐
│  🔗 Voir le projet    →    │
└─────────────────────────────┘
```

L'employeur peut **cliquer et tester** votre application directement !

### ✅ Le lien s'ouvre dans un nouvel onglet
- `target="_blank"` (ne quitte pas le portfolio)
- `rel="noopener noreferrer"` (sécurisé)

---

## 💡 RECOMMANDATIONS

### Option 1 : Nexaa Market (App mobile)
**Meilleur choix :**
```typescript
link: "https://play.google.com/store/apps/details?id=com.nexaamarket"
```

Pourquoi ?
- ✅ Lien direct vers Google Play Store
- ✅ L'employeur voit les avis, le nombre de téléchargements
- ✅ Prouve que c'est une vraie app en production

**Alternative si vous avez les deux stores :**
Mettez le lien Google Play, et mentionnez iOS dans la description

### Option 2 : Sites web déployés
```typescript
link: "https://votre-site.com"
// OU
link: "https://votre-projet.vercel.app"
```

### Option 3 : Projet non déployé ou privé
**Ne pas ajouter de champ `link:`**

À la place, ajoutez dans `results:` :
```typescript
results: [
  "Déployé pour un client (accès privé)",
  "Utilisé en production",
  // ...
]
```

---

## 🚀 APRÈS MODIFICATION

### 1. Sauvegardez le fichier `data/projects.ts`

### 2. Le serveur se recharge automatiquement
Next.js détecte le changement et recharge la page

### 3. Testez
Allez sur : http://localhost:3001/projects/nexaa-market

Vous devriez voir le bouton **"Voir le projet"** !

---

## 📸 SCREENSHOTS (OPTIONNEL mais recommandé)

Même avec des liens live, les screenshots sont importants pour :
- Aperçu visuel rapide
- Design attractif
- Si le lien est temporairement down

### Comment ajouter des screenshots :

1. **Créer le dossier**
```bash
mkdir -p public/images/projects
```

2. **Ajouter vos images**
Placez vos screenshots dans :
```
public/images/projects/
  ├── nexaa-market.png
  ├── event-management.png
  └── booking-app.png
```

3. **Mettre à jour le projet**
```typescript
{
  id: "nexaa-market",
  // ... autres champs ...
  image: "/images/projects/nexaa-market.png",  // ← AJOUTEZ ICI
  link: "https://play.google.com/...",
  featured: true
}
```

---

## 🎯 EXEMPLE COMPLET - NEXAA MARKET

Voici comment votre projet Nexaa Market devrait ressembler :

```typescript
{
  id: "nexaa-market",
  title: "Nexaa Market",
  description: "Marketplace mobile développée pour connecter vendeurs et acheteurs",
  longDescription: "Application mobile complète de marketplace, publiée sur Google Play Store et Apple App Store, permettant aux vendeurs et acheteurs de transiger en toute sécurité.",
  context: "Marketplace mobile développée pour connecter vendeurs et acheteurs dans un écosystème sécurisé et performant.",
  problem: "Besoin d'une plateforme mobile intuitive et fiable pour faciliter les transactions entre vendeurs et acheteurs, avec un focus sur la sécurité et l'expérience utilisateur.",
  solution: "Développement d'une application mobile native complète avec système d'authentification, gestion des produits, messagerie intégrée, et système de paiement sécurisé.",
  results: [
    "Top 10 catégorie Shopping (4ᵉ position)",
    "+350 utilisateurs actifs",
    "Application Android & iOS déployée en production",
    "Architecture scalable et performante"
  ],
  stack: [
    "React Native",
    "TypeScript",
    "API REST",
    "Backend Custom",
    "Firebase",
    "Google Play Store",
    "Apple App Store"
  ],
  image: "/images/projects/nexaa-market.png",              // Screenshot
  link: "https://play.google.com/store/apps/details?id=com.nexaamarket",  // Lien live
  featured: true
}
```

---

## ✅ CHECKLIST FINALE

Avant de partager votre portfolio :

- [ ] Liens Google Play / App Store ajoutés pour Nexaa Market
- [ ] Liens de production ajoutés pour les projets web
- [ ] Screenshots ajoutés dans `public/images/projects/`
- [ ] Testé tous les liens (ils s'ouvrent correctement)
- [ ] Vérifié sur http://localhost:3001/projects

---

## 🎉 RÉSULTAT

Avec les liens live, votre portfolio devient **100x plus impactant** :

**Avant :** "J'ai développé Nexaa Market"
**Après :** "J'ai développé Nexaa Market → **[CLIQUEZ POUR TESTER]** 🚀"

L'employeur peut **voir, toucher, tester** vos projets = **CRÉDIBILITÉ MAXIMALE** !

---

**Prêt à ajouter vos liens ? Le fichier est : `data/projects.ts`** 🔥
