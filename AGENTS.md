<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Contexte du projet

Ce dépôt contient le portfolio professionnel de Miguel Carretero.

Objectif principal :
publier rapidement un portfolio Product Designer / Front-End propre, responsive, accessible et fidèle aux maquettes Figma.

Priorité du projet :

1. Publier
2. Comprendre
3. Expérimenter

Éviter toute sur-ingénierie.

---

## Stack

Stack officielle :

- Next.js
- React
- TypeScript
- CSS Modules

Outils et services du projet :

- CSS Custom Properties
- Git / GitHub
- Vercel pour le déploiement

Ne pas utiliser Tailwind ni ajouter de dépendance sans besoin réel. Motion ne doit être utilisé que lorsqu’une tâche le demande explicitement.

---

## Source de vérité design

Figma est la référence visuelle principale.

Respecter les maquettes sans recopier aveuglément les artefacts techniques ou le code généré par Figma.

Le code Figma sert uniquement de référence pour :

- structure visuelle
- dimensions
- espacements
- couleurs
- typographie
- composants
- assets

Adapter la maquette à une vraie structure web responsive avec HTML sémantique, Flexbox, Grid et CSS moderne.

---

## Direction visuelle

Le portfolio doit rester sobre, élégant, premium et intemporel.

Les animations doivent être discrètes, fluides et servir la hiérarchie ou la narration. Préférer des mouvements courts, des amplitudes maîtrisées, des ombres subtiles et des easings doux.

Éviter les effets démonstratifs, surjoués ou gadgets. Le résultat doit évoquer un produit réfléchi et maîtrisé, jamais une démonstration gratuite d’animation.

---

## Typographie

Le portfolio utilise uniquement :

- Geist

Les références éventuelles à Roboto, Inter ou Poppins dans Figma sont des coquilles et ne doivent pas être utilisées pour le portfolio.

---

## Responsive

Règle principale :

> Desktop peut composer. Mobile doit raconter.

Conserver une approche mobile-first : sur mobile, privilégier la lisibilité, l’ordre du contenu et une structure narrative stable :

sur-titre → titre → texte → visuel

Pour les sections éditoriales desktop en 2 colonnes texte + visuel, notamment `Mon approche` et `Ce qui nourrit mon approche`, l’ordre mobile doit être :

1. sur-titre / eyebrow
2. titre
3. visuel / image
4. texte descriptif
5. CTA éventuel

Pour les cartes produit :

image → titre → texte

Ne pas essayer de réduire proportionnellement les compositions desktop complexes.

Les compositions décoratives peuvent être simplifiées ou supprimées sur mobile si cela améliore la lisibilité.

---

## Assets

Les compositions visuelles complexes de TradeMind ne doivent pas être reconstruites entièrement en HTML/CSS si cela n’apporte pas de valeur.

Préférer des assets optimisés lorsque cela permet de :

- gagner du temps
- préserver la fidélité visuelle
- réduire la complexité du DOM

Utiliser SVG pour les éléments vectoriels simples.

Utiliser WebP ou AVIF pour les images raster lorsque pertinent.

Ne jamais utiliser en production des URLs temporaires Figma MCP.

---

## Animations et polish

Les animations doivent accompagner la lecture, jamais la distraire.

Les animations, micro-interactions et le polish visuel global sont traités lors d’une passe dédiée. Pendant l’intégration statique d’une section, ne pas ajouter d’animation sauf demande explicite.

Utiliser CSS pour :

- hover
- transitions simples
- petits déplacements
- zoom léger
- flottement décoratif simple

Utiliser Motion uniquement lorsqu’il est explicitement demandé et nécessaire pour :

- apparition au scroll
- stagger
- reveal
- léger parallax
- animations coordonnées

Respecter `prefers-reduced-motion`.

Éviter les animations démonstratives.

---

## Images interactives

Certaines images importantes peuvent être ouvrables en lightbox.

Comportement attendu :

- hover léger sur desktop
- zoom subtil
- curseur adapté
- clic / tap pour ouvrir
- fermeture par bouton
- fermeture avec Escape
- fermeture au clic extérieur
- comportement accessible au clavier

---

## Règles de développement

Travailler par petites tâches.

Workflow recommandé :

besoin → petite tâche → implémentation → vérification → compte-rendu → validation

Ne pas poursuivre automatiquement vers une nouvelle grosse étape sans validation.

Ne pas modifier des fichiers ou des fonctionnalités non demandés.

Ne pas refactorer une zone sans raison liée à la tâche courante.

Respecter strictement le scope demandé et ne pas modifier les zones voisines sans nécessité.

Réutiliser les composants existants avant d’en créer de nouveaux.

Ne pas transformer chaque morceau d’interface en composant React sans besoin réel.

---

## Qualité

À la fin d’une tâche de code, exécuter :

- `npm run lint`
- `npm run build`

Corriger les erreurs et signaler clairement tout problème rencontré avant de considérer la tâche terminée.

Préserver :

- accessibilité
- responsive
- performance
- SEO
- HTML sémantique

---

## Git

Préférer des commits petits et cohérents.

Convention souhaitée :

- `feat:`
- `fix:`
- `chore:`
- `refactor:`
- `docs:`

Ne jamais créer de commit ou push automatiquement : Miguel valide et réalise ces étapes.

---

## Compte-rendu de fin de tâche

À la fin de chaque tâche, générer un court compte-rendu destiné au Tech Lead ChatGPT.

Le compte-rendu doit contenir :

### Tâche réalisée

Résumé très court.

### Fichiers créés ou modifiés

Liste concise.

### Dépendances

Dépendances ajoutées, supprimées ou modifiées.

### Commandes exécutées

Uniquement les commandes importantes.

### Vérifications

Résultat de lint, build ou autres vérifications.

### Décisions ou problèmes

Points techniques importants rencontrés.

### Prochaine étape proposée

Une seule prochaine étape claire.

Ne pas commencer cette prochaine étape sans validation.

---

## Style de code attendu

Le code doit être propre, professionnel et crédible pour un recruteur qui ouvre le dépôt.

Privilégier une implémentation simple, lisible et directe.

Éviter les signes typiques de sur-génération par IA :

- abstractions inutiles
- patterns complexes sans besoin réel
- composants trop atomisés
- hooks personnalisés pour quelques lignes simples
- helpers génériques prématurés
- types TypeScript inutilement sophistiqués
- commentaires qui expliquent du code évident
- wrappers inutiles autour de React ou Next.js
- architecture "enterprise" disproportionnée pour un portfolio de quelques pages

Préférer :

- des noms simples et explicites
- des composants de taille raisonnable
- des fonctions faciles à lire
- des responsabilités claires
- du code compréhensible rapidement sans documentation excessive

Règle principale :

> Prefer straightforward, readable code over clever abstractions.

Une abstraction ne doit être créée que lorsqu'elle répond à un besoin réel déjà présent dans le projet.

Le dépôt doit donner l'impression d'un projet construit avec des choix techniques réfléchis, et non d'un exercice de démonstration de patterns ou d'un code généré automatiquement sans discernement.

## Workflow de travail validé

Le workflow VS Code + Codex est déjà en place et validé.

Organisation actuelle :

- ChatGPT principal : Tech Lead / coach / arbitrage
- VS Code : environnement de développement principal
- Codex dans VS Code : exécution des petites tâches ciblées
- Work : utilisé ponctuellement pour les tâches plus autonomes ou lourdes
- PowerShell : terminal principal, généralement intégré à VS Code

Ne pas proposer comme prochaine étape de "préparer" ou "valider" ce workflow : il est déjà opérationnel.

À la fin d'une tâche, proposer uniquement la prochaine étape technique réellement pertinente pour le projet.
