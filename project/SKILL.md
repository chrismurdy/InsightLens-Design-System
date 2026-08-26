---
name: insightlens-design
description: Use this skill to generate well-branded interfaces and assets for InsightLens by Envision USA, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files: `styles.css` (link this first), `tokens/*.css`, `components/*` (React
primitives), `ui_kits/website` and `ui_kits/platform` (full-screen recreations),
`assets/` (real logo, nine gold service icons, environment photography, product
screenshots). Fonts are substituted (Montserrat + Noto Sans) — see the
"Substitutions & open questions" section of readme.md before shipping anything
customer-facing.
