# Design System

Ce document décrit le système visuel présent dans le code. Figma reste la référence visuelle principale ; les valeurs ci-dessous sont les conventions actuellement implémentées.

## Typographie

Le portfolio utilise **Geist**, chargé dans `layout.tsx` et exposé par `--font-geist`. `Arial` est uniquement présent comme fallback technique dans `body`.

### Rôles globaux

| Rôle | Token de taille | Valeur | Graisse | Line-height | Couleur habituelle |
| --- | --- | --- | --- | --- | --- |
| Hero title | `--font-size-hero-title` | `clamp(42px, 5vw, 62px)` | `700` | `1.05` | `--color-text-primary` |
| Case study title | `--font-size-case-study-title` | `clamp(35px, 4vw, 50px)` | `700` | `1.05` | `--color-text-primary` |
| Section title | `--font-size-section-title` | `clamp(30px, 3vw, 36px)` | `700` | `1.12` | `--color-text-primary` |
| Eyebrow | `--font-size-eyebrow` | `clamp(16px, 1.5vw, 18px)` | `300` | `1.4` | `--color-accent` |
| Body large | `--font-size-body-large` | `clamp(18px, 2vw, 22px)` | `300` | `1.4` | `--color-text-secondary` |
| Body | `--font-size-body` | `18px` | `300` | `1.4` | `--color-text-secondary` |
| Card title | `--font-size-card-title` | `28px` | `700` | `1.12` | accent ou gradient accent |
| Card title compact | `--font-size-card-title-compact` | `24px` | `600` ou `700` selon la carte | `1.12` | `--color-text-primary` |
| Card text | `--font-size-card-text` | `20px` | `300` | `1.4` | `--color-text-secondary` |
| Card text compact | `--font-size-card-text-compact` | `19px` | `300` | `1.4` | `--color-text-secondary` |
| Control / bouton | `--font-size-control` | `16px` | `500` | `1.5` | dépend du bouton |

Le Hero principal utilise aussi `--letter-spacing-display: -0.04em`. Le contenu éditorial de `SectionIntro` utilise le body standard avec `--line-height-body-relaxed: 1.45`.

Les tokens de graisse disponibles sont :

| Token | Valeur |
| --- | --- |
| `--font-weight-light` | `300` |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |

### Variations locales existantes

- L’eyebrow est généralement en accent. Le Hero TradeMind et le teaser TradeMind de la Home utilisent le texte secondaire pour respecter leur composition.
- Le nom `TradeMind` du teaser est un titre de projet spécifique en `clamp(38px, 4vw, 43px)`.
- Les libellés intégrés aux diagrammes, mockups et compositions décoratives gardent leurs tailles locales.
- Les citations des deux Heroes partagent un rôle éditorial similaire : texte italique accent, guillemets en accent soft et double filet vertical. Elles peuvent conserver des variantes visuelles propres à chaque Hero ; ne pas créer de token ou de composant commun uniquement pour elles.

## Couleurs

| Token | Valeur | Usage actuel |
| --- | --- | --- |
| `--color-text-primary` | `#191919` | Titres, texte fort, focus du bouton principal |
| `--color-text-secondary` | `#62666c` | Paragraphes, texte secondaire, bordure du bouton secondaire |
| `--color-accent` | `#6c8678` | Eyebrows, emphases, états actifs, focus |
| `--color-accent-soft` | `#c8d6ce` | Filets, guillemets, séparateurs et bordures légères |
| `--color-background` | `#ffffff` | Fond principal, cartes et texte sur fond sombre |

Le gradient récurrent `var(--color-accent) → #547061` est utilisé par le bouton principal, la Vision Produit et certains titres de cartes. `#547061` reste une couleur locale : une couleur n’est promue en token global que lorsqu’elle devient réellement récurrente au-delà d’un gradient ou d’un usage ponctuel.

Les couleurs des mockups TradeMind, des nuanciers de démonstration et des blocs décoratifs du Hero restent spécifiques à leurs compositions et ne font pas partie de la palette sémantique globale.

## Layout

| Contexte | Largeur observée | Gouttière / padding |
| --- | --- | --- |
| Header et Hero TradeMind large | `1360px` maximum | `40px` par côté via `calc(100% - 80px)` |
| Sections principales de la Home | `1320px` maximum | généralement `24px` |
| Grandes grilles de cartes | `1319px` maximum | padding de section `24px` |
| `SectionIntro` éditorial | `682px` maximum | défini dans le composant partagé |
| Footer | `1440px` maximum | `60px` desktop, `24px` mobile |

Les conteneurs sont généralement centrés avec `margin-inline: auto` ou `margin: 0 auto`. Les CSS Modules définissent les largeurs particulières nécessaires aux images, diagrammes et compositions TradeMind.

Les sections Home éditoriales utilisent souvent `padding: 120px 24px`, puis `80px 20px` en mobile. Les sections TradeMind utilisent des espacements verticaux propres à leur maquette, généralement compris entre `72px` et `96px`.

Les espacements verticaux restent principalement spécifiques aux sections et sont gérés par leurs CSS Modules. Ils ne doivent être globalisés que lorsqu’un rythme commun est clairement récurrent.

## Responsive

### Conventions communes

- Principe : **Desktop peut composer. Mobile doit raconter.**
- Pour une section éditoriale desktop en deux colonnes texte + visuel, l’ordre mobile de référence est :
  1. eyebrow ;
  2. title ;
  3. visual ;
  4. body copy ;
  5. optional CTA.
- L’alignement éditorial est à gauche par défaut. Le visuel peut être centré dans son propre wrapper.
- L’ordre du DOM ou le réordonnancement CSS mobile doit préserver cette narration : le visuel vient après le titre et avant le corps de texte.
- Une exception doit être justifiée par la maquette, et non inventée localement.
- Les compositions visuelles doivent conserver leur ratio et ne pas créer d’overflow horizontal.
- Une composition décorative complexe peut être réduite ou masquée lorsque sa lisibilité n’est plus garantie.

### Breakpoints réellement utilisés

| Seuil | Usage actuel |
| --- | --- |
| `759px` / `760px` | Breakpoint mobile de référence : `max-width: 759px` pour le mobile, `min-width: 760px` pour le niveau supérieur. Certains modules existants utilisent encore `max-width: 760px` ; ne pas reprendre cette variante pour de nouveaux styles. |
| `1000px` | Réorganisation narrative des sections texte + visuel ; grilles concernées en une colonne |
| `1100px` | Ajustement spécifique du Hero TradeMind |
| `1200px` | Les trois cartes d’exploration passent directement en une colonne |
| `1279px` | Masquage des blocs décoratifs du Hero Home |
| `1300px` | Ajustement de la composition du teaser TradeMind |
| `1440px`, `1600px`, `1800px` | Mise à l’échelle spécifique des blocs décoratifs du Hero Home |

Les seuils au-delà de `1000px` sont des comportements propres aux sections citées, pas des breakpoints globaux à appliquer automatiquement.

## Éléments visuels récurrents

### Cartes

- Grandes cartes éditoriales : fond blanc, rayon `12px`, ombre diffuse proche de `0 0 20px rgb(0 0 0 / 9%)`.
- Les paddings varient selon le contenu : `20px`, `26px` ou environ `30px 31px`.
- Les panneaux internes des mockups utilisent souvent un rayon `7px` et `0 1px 13px rgb(0 0 0 / 10%)`. Ce style reste local aux compositions internes.
- Les cercles d’icône de `66px` utilisent une ombre `0 8px 22px rgb(25 25 25 / 10%)` dans les cartes qui emploient ce motif.

### Boutons partagés

Les composants `PrimaryButton` et `SecondaryButton` partagent :

- padding `12px 18px` ;
- rayon `10px` ;
- typographie `16px / 500 / 1.5` ;
- transition de `160ms` ;
- focus visible de `2px` avec offset `4px` ;
- suppression des transitions avec `prefers-reduced-motion`.

Le bouton principal utilise le gradient accent. Le bouton secondaire utilise une bordure texte secondaire et un fond très léger au hover.

## Répartition des responsabilités

### Styles globaux

- palette sémantique ;
- rôles typographiques réutilisables ;
- graisses, line-heights et letter-spacing communs ;
- reset minimal et police globale.

### CSS Modules

- layout, grilles et espacements de section ;
- breakpoints et ordre responsive local ;
- positionnement des assets et compositions visuelles ;
- styles propres aux diagrammes, mockups, citations et éléments décoratifs.

Une exception locale est acceptable lorsqu’elle correspond à un rôle réellement différent ou à une contrainte explicite de la maquette. Elle ne doit pas recréer un rôle global déjà disponible.
