# Envision Design System

**Recognition, Designed.**

Envision is an award-winning design company dedicated to recognition in the built
environment. We create architectural and digital environments that celebrate
contribution, communicate purpose, and make meaning visible in public space —
donor recognition walls, wayfinding, environmental graphics, and interactive
displays for hospitals, universities, and cultural institutions.

This project is the canonical design system: brand foundations (colour, type,
spacing, elevation), reusable React components, and a full marketing-website UI kit.
Consuming projects link the single root **`styles.css`**, then read components from
the compiled bundle on `window.EnvisionDesignSystem_6f7dfa`.

---

## Sources

- **Figma:** "Envision_DesignSystem (1).fig" — mounted read-only during authoring.
  Foundations were transcribed from the COLOURS, TYPOGRAPHY, SHADOWS and
  SPACING-SIZING-REFERENCES pages; components from BUTTONS / TABS / INPUTS / TAGS;
  sections from HERO / NAV-BAR / FOOTER / OUR-PROJECTS / etc.
- **Uploaded fonts:** Gotham (Light/Book/Medium/Bold/Black) and the full Noto Sans
  family (incl. condensed widths) — see `uploads/`.
- **Uploaded brand marks:** `Envision_RecogDesigned_RGB.*` (navy wordmark),
  `Envision_RecogDes_White.*` (reversed), `Envision_RecogDes_BlueSquare.*` (square mark),
  plus `.ai` / `.eps` vector originals in `uploads/`.
- **Contact (from footer):** info@envisioncreates.com · +1-416-694-8516 ·
  Toronto — 750 Millway Avenue, Unit 7, Concord, ON L4K 3T7.

---

## Index / manifest

| Path | What |
|------|------|
| `styles.css` | Root entry point — `@import`s every token + font file. Link this. |
| `tokens/fonts.css` | `@font-face` for Gotham & Noto Sans. |
| `tokens/colors.css` | Colour ramps + semantic aliases. |
| `tokens/typography.css` | Families, weights, type scale. |
| `tokens/spacing.css` | Spacing, radius, shadow, layout, motion. |
| `tokens/base.css` | Element defaults + `.ev-*` type utility classes. |
| `guidelines/*.card.html` | Foundation specimen cards (Colors, Type, Spacing, Brand). |
| `components/buttons/Button` | Square action button (primary/secondary/ghost). |
| `components/display/Badge` | Status / category pill. |
| `components/display/Card` | Project / content surface card. |
| `components/feedback/Alert` | Inline semantic banner. |
| `components/forms/Input` | Labelled text field. |
| `components/navigation/Tabs` | Underline tab bar. |
| `ui_kits/website/` | Full Envision marketing homepage (interactive). |
| `SKILL.md` | Agent-Skill manifest for use in Claude Code. |

**Components** live anywhere as `<Name>.jsx` + sibling `<Name>.d.ts` (+ `.prompt.md`).
Load them in card/kit HTML via `<script src=".../_ds_bundle.js">` then
`const { Button } = window.EnvisionDesignSystem_6f7dfa`.

---

## CONTENT FUNDAMENTALS

**Voice — confident, purposeful, human.** Envision writes like a senior design
partner: assured but warm, never salesy. Copy centres on *meaning, contribution,
and place*. The signature line is **"Recognition, Designed"** and the brand
repeatedly frames its work as *making meaning visible in public space*.

- **Person:** "We" for Envision; "you / your" for the client and their donors.
  ("*We* immerse in *your* story, donors, and architecture.")
- **Casing:** Sentence case for headings and body. **ALL-CAPS with wide tracking**
  is reserved for eyebrows / overlines and footer column titles (WORK, COMPANY,
  CONTACT). Never all-caps for long text.
- **Tone words:** *celebrate, contribution, purpose, permanence, dignity, place,
  recognition, stewardship, lasting.* Headlines are short and declarative
  ("Recognition across every surface", "Projects that stand the test of place").
- **Body copy:** one clear idea per sentence, plain language, no jargon. Lead
  paragraphs run ~1–2 sentences and expand the headline.
- **Numbers & proof:** institutions are named as proof (SickKids, Mount Sinai, ROM,
  Aga Khan Museum, University of Toronto). Avoid invented statistics.
- **Emoji:** none. **Punctuation:** em dashes for asides; ampersands fine in labels.
- **CTAs:** verb-first and concrete — "Start a project", "View our work",
  "Book a consultation", "Send enquiry".

Example (footer): *"Envision is an award-winning design company dedicated to
recognition in the built environment. We create architectural and digital
environments that celebrate contribution, communicate purpose, and make meaning
visible in public space."*

---

## VISUAL FOUNDATIONS

**Two blues anchor everything.**
- **Brand navy — `--ev-blue-500` #002E72** — the logo, headings, ink, dark panels,
  and footer. Authoritative and architectural.
- **Action blue — `--ev-action-500` #0066CC** — interactive elements: buttons,
  links, focus, active tabs, icon chips. Primary buttons lighten to **#3385D6** on
  hover. The two are intentionally distinct — navy *states*, action-blue *invites*.

Supporting: a bright sky ramp (enverse-blue) for accents on dark, warm-free greys
for text/surface/line, and semantic ramps (red danger, yellow warning, lime
success, fuchsia/info). Hairline borders use a cool near-white `#E9EBF8`.

**Typography.** Gotham for display & headings (strong hierarchy, navy, slightly
tight tracking); Noto Sans for all body and UI text (built for readability). Scale
follows a 1.2 ratio: H1 60/72 → Caption 12/16. Headings are sentence-case and balanced.

**Shape & edges.** The system is *architectural* — restrained, square-leaning.
**Buttons and inputs have NO border radius** (0px), echoing fabricated signage.
Cards and swatches use a gentle **12px** radius; alerts a sharp **4px**; badges and
avatars are full pills. Nothing is bubbly.

**Backgrounds.** Mostly clean white and `--ev-grey-50`. Hero and CTA sections use a
full-bleed photograph of recognition/wayfinding work under a **navy gradient
protection** (left-dark → right-light) so white type stays legible — no blur
panels, no decorative gradients elsewhere. Imagery is **cool, architectural,
crisp** (blues, glass, signage walls), shot in real built environments — never
illustrative or grainy.

**Elevation.** A soft four-step shadow scale (sm → xl), all low-opacity black, no
coloured glows. Cards rest at `--shadow-sm`; lift to `--shadow-lg` on hover.

**Motion.** Calm and functional. ~200ms standard transitions on
`cubic-bezier(0.4,0,0.2,1)`; colour/border crossfades on buttons, tabs and links.
Interactive cards **lift 4px and zoom their image ~4–5%** on hover. No bounces, no
infinite loops, respects `prefers-reduced-motion`.

**States.**
- *Hover* — primary button lightens (#0066CC→#3385D6); secondary fills with a
  pale tint and switches border/text to sky blue; links turn action-blue; cards lift.
- *Focus* — 3px `--ev-action-100` ring + action-blue border on inputs.
- *Active tab* — action-blue text with a 2px action-blue underline.
- *Disabled* — 45% opacity, `not-allowed` cursor.

**Layout.** Centred container, `--container-max` 1280px, generous 48px side gutters,
96px vertical section rhythm. Sticky translucent nav (blur) that reveals a hairline
border once scrolled. Grids use `gap`, not margins.

---

## ICONOGRAPHY

Envision's UI uses **Google Material Symbols / Material Icons** — the Figma icon
library is organised into the standard Material categories (Action, Alert,
Communication, Content, Navigation, Notification, Maps, Social, Toggle, etc.).

- **Delivery:** linked from the Google Fonts CDN as the *Material Symbols Outlined*
  variable font and used via ligatures —
  `<span class="material-symbols-outlined">arrow_forward</span>`. Every component
  card and the UI kit load it in `<head>`.
- **Common glyphs in use:** `arrow_forward` / `arrow_back` (buttons & the brand's
  recurring arrow motif), `north_east` (outbound links), `search`, `mail`, `close`,
  `check_circle`, `info`, `warning`, `cancel`, plus section icons `verified`,
  `explore`, `architecture`, `devices`.
- **Weight/size:** outlined style, ~weight 500, sized 18–28px inline; in feature
  cards a glyph sits in a 52px pale-blue (`--ev-action-50`) chip with action-blue
  fill.
- **Emoji / Unicode:** never used as icons.
- **Substitution note:** Material Symbols is loaded from CDN (no static webfont was
  bundled). If offline use is required, self-host the Material Symbols Outlined
  font and swap the `<link>` — no markup changes needed.

---

## Notes & substitutions

- **Gotham** and **Noto Sans** are bundled from the uploaded TTFs. If a consumer
  needs a metric-compatible web fallback for Gotham, *Montserrat* is the closest
  Google Font (declared in the `--font-display` stack).
- The grey-scale RGB strings in the Figma colour board were corrupted in the export;
  neutral hex values here are taken from the reliable hex labels and METADATA usage.
- Material Symbols is CDN-linked rather than bundled (see ICONOGRAPHY).
