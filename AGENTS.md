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

Toute nouvelle section doit réutiliser les styles typographiques globaux existants lorsqu’un rôle visuel équivalent existe. Ne pas inventer localement une nouvelle taille, couleur, graisse ou line-height sans raison explicite liée à la maquette.

Pour toute décision visuelle ou création de style, consulter `docs/design-system.md` et réutiliser les conventions existantes avant d'en créer de nouvelles.

---

## Responsive

Règle principale :

> Desktop peut composer. Mobile doit raconter.

Conserver une approche mobile-first. Pour les sections éditoriales desktop en deux colonnes texte + visuel, l’ordre mobile par défaut est :

1. sur-titre / eyebrow
2. titre
3. visuel / composition / image
4. texte descriptif
5. CTA éventuel

Le visuel ne doit pas être placé après le corps de texte sauf exception explicite de la maquette.

Sous `1100px`, une section empilée doit exploiter la largeur utile du container et ne pas conserver les contraintes de largeur de ses colonnes desktop.

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

## Motion

- Utiliser `Reveal` comme primitive commune pour les apparitions au scroll.
- Conserver les animations spécifiques dans les composants concernés uniquement.
- Utiliser CSS pour les hovers et micro-interactions simples.
- Privilégier `transform` et `opacity`.
- Respecter systématiquement `prefers-reduced-motion`.
- Éviter les scroll listeners custom inutiles, les blur/filter animés, `will-change` généralisé et les animations permanentes sans valeur.
- Ne pas ajouter de Client Component uniquement pour animer un bloc si une solution plus locale suffit.
- Ne pas créer de système motion générique complexe, provider ou abstraction « au cas où ».
- La motion doit accompagner la lecture, jamais devenir démonstrative.

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

### Typographie globale

La typographie commune du site doit être centralisée dans les styles globaux existants.

Lorsqu’un rôle visuel existe déjà (`hero title`, `section title`, `eyebrow`, `body`, `card title`, `card text`, etc.), toute nouvelle section doit réutiliser les tokens/classes globaux correspondants.

Ne pas recréer localement dans un CSS Module :
- une nouvelle taille de police
- une nouvelle graisse
- une nouvelle couleur de texte
- un nouveau line-height
- un nouveau `clamp()`

sauf si la maquette justifie réellement une exception.

Les CSS Modules restent principalement responsables du layout, des espacements spécifiques, du responsive local, du positionnement et des compositions visuelles.

Avant d’ajouter une nouvelle règle typographique locale, vérifier qu’un style global équivalent n’existe pas déjà.

### Nettoyage des styles

Lors d’un refactor ou d’une modification importante, supprimer les règles CSS clairement mortes, dupliquées ou devenues inutiles.

Éviter de conserver plusieurs implémentations différentes pour un même rôle visuel.

### Réutilisation avant création

Avant de créer un nouveau composant, style, token, helper ou pattern :
1. vérifier si un équivalent existe déjà dans le projet ;
2. le réutiliser ou l'étendre si cela reste simple ;
3. ne créer une nouvelle abstraction que si le besoin est réellement différent.

Ne pas dupliquer un pattern existant avec un nom ou une implémentation légèrement différente.

### Cohérence avant optimisation locale

Lorsqu'une nouvelle section est intégrée, privilégier la cohérence avec les sections existantes avant d'optimiser localement son rendu.

Ne pas introduire une nouvelle convention de :
- typographie
- espacement
- breakpoint
- couleur
- rayon
- ombre
- animation
si une convention existante répond déjà au besoin.

### Inspecter avant modifier

Pour une tâche qui touche un système existant :
- inspecter d'abord les composants et styles voisins ;
- identifier les patterns déjà utilisés ;
- modifier ensuite.

Ne pas implémenter une section isolément sans tenir compte du reste du site.
