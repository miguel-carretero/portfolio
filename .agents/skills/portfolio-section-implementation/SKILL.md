---
name: portfolio-section-implementation
description: Implement or review a portfolio section from a Figma design while reusing the project's visual, front-end, and responsive conventions. Use for new or revised Home and TradeMind sections, not isolated micro-fixes.
---

# Portfolio section implementation

Use this skill for a substantial visual integration or review of a portfolio section. It complements the repository rules; it does not replace them.

## 1. Read the project context

Before editing, read:

- `AGENTS.md` for scope, Figma, assets, responsive and delivery rules;
- `docs/design-system.md` for the visual conventions that already exist.

## 2. Inspect before creating

Inspect the route, neighboring sections and relevant shared components before choosing an implementation.

- Search for equivalent components, typographic roles, tokens, buttons, card patterns and responsive layouts.
- Reuse an existing component or token when it matches the need.
- Inspect the relevant CSS Modules to reuse the project breakpoint conventions instead of adding a near-duplicate breakpoint.

## 3. Use the design source correctly

When a Figma node is provided, inspect that exact node. If a screenshot is supplied, use it as the primary visual comparison and Figma for dimensions, content, styles and structure.

Follow the applicable Figma workflow before requesting design context. Do not copy Figma-generated positioning or code blindly.

## 4. Choose the simplest suitable strategy

Decide explicitly whether the section needs:

- semantic HTML/CSS for simple interface structure;
- a small reusable React component for a repeated, real pattern;
- a local exported asset for a complex visual;
- separate asset wrappers when future animation requires independent elements.

Do not rebuild complex mockups in the DOM without a clear benefit. Do not introduce a generic abstraction or dependency without a present need.

## 5. Implement within the existing system

- Keep React and TypeScript direct and readable; use semantic HTML.
- Use CSS Modules for layout, section spacing, responsive behavior and visual composition.
- Reuse global visual roles from `docs/design-system.md` before creating local typography, colors, weights, line-heights or clamps.
- Keep Geist as the portfolio typeface.
- Keep Figma assets local; do not keep temporary Figma asset URLs in production code.
- Do not add animation during static integration unless it is explicitly requested. When animation is planned later, prepare only the necessary DOM structure.

## 6. Preserve the responsive narrative

Reuse existing breakpoints. The mobile reference is `max-width: 759px`; the next level starts at `min-width: 760px`.

Before implementing a mobile `text + visual` editorial section, verify this narrative order:

`eyebrow → title → visual → body copy → optional CTA`

Never leave descriptive text before the visual when the section follows this pattern, unless the design explicitly defines an exception.

Keep complex asset compositions together when they must remain a single visual group. Avoid horizontal overflow.

For any section that switches to a vertical layout at `1100px` or below, verify that no unnecessary desktop `max-width` still constrains its editorial blocks and that the text uses the useful container width rather than becoming a narrow centered column. Check the transition and intermediate layouts at `1101px`, `1100px`, approximately `900px`, `768px` and `390px`.

## 7. Review before handing off

Before completion, check:

- no existing component or token was duplicated;
- typography and breakpoints follow the documented conventions or have a Figma-backed local exception;
- every mobile `text + visual` editorial section follows `eyebrow → title → visual → body copy → optional CTA`, unless the design explicitly documents an exception;
- semantic structure and basic accessibility remain correct;
- no unrelated section, animation or asset was changed;
- the diff contains no dead CSS, duplicate declarations or unnecessary complexity.

Run the relevant route and the checks required by the task and `AGENTS.md`. Do not commit, push or start the next section without explicit instruction.

## Delivery

For a substantial task, provide the short Tech Lead report required by `AGENTS.md`: files modified, reused elements, key implementation decisions and verification results.
