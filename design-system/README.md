# @insightlens/design-system

InsightLens by Envision USA — design tokens and React component library, implemented
from the `project/` Claude Design handoff bundle in the repo root (see `../README.md`
and `../chats/chat1.md` for the original brief).

**Scope of this package:** design tokens (`src/tokens/*.css`) and the 12 primitive
React components (`src/components/**`). It does not include the marketing site or
platform UI kit screens from the handoff bundle — those remain prototypes in
`../project/ui_kits/` pending a decision on where full page implementations should live.

## Install / use

```bash
npm install
npm run build
```

Consumers link the compiled stylesheet once and import components from the package:

```tsx
import "@insightlens/design-system/styles.css";
import { Button, Card, StatCard } from "@insightlens/design-system";
```

## What's real vs. placeholder

### Resolved against `InsightLens_Brand_Guide_Lines_REV2.pdf` (official brand guide, Nov 2024)

The brand owner supplied the official guide plus the real Gotham font files. Both
were used to correct the design system's earlier reconstructions:

- **Typeface — Gotham, real and self-hosted.** The guide (p.8) names Gotham as the
  *single* brand typeface for both display and body — there is no separate body
  face. The 16 licensed OTF weights supplied were converted to WOFF2 and are shipped
  in `src/assets/fonts/`, wired up via real `@font-face` rules in
  `tokens/fonts.css` (weight-ranged so the existing 400/500/600/700/900 tokens each
  resolve to a real file — Book/Medium/Bold/Black, no synthetic bold). This replaces
  the earlier Montserrat + Noto Sans Google Fonts substitution entirely.
- **Official colors, sampled directly from the guide's own swatches (p.8):**
  - Rich Black (Pantone Black 6): `--il-ink-900: #110f0d` (not pure `#000`)
  - White (Pantone 000C): `#ffffff`
  - Signal gold (Pantone 7549C): `--il-gold-500: #f9ae0b` — cross-checked against
    the rendered "LENS" glyph elsewhere in the same PDF; identical value. Supersedes
    the earlier Wix pixel estimate (`#f9b317`), which was already within a few units.
  - **Navy, action blue and data teal are *not* in the official guide at all** — the
    guide defines only Black/White/Gold. Those three remain an unconfirmed
    platform-UI extension inherited from the original design session; see below.
- **Reversed/white logo — now real.** The guide (p.4, "Master Brand") confirms and
  shows the actual reversed lockup (white "INSIGHT" + gold "LENS" + gold bracket on
  black). Extracted at high resolution directly from the guide's vector artwork
  (not a raster scan) as `src/assets/logo/insightlens-lockup-reversed.png`, plus a
  matching vector-quality positive lockup,
  `src/assets/logo/insightlens-envision-lockup-vector.png`, both true transparent
  PNGs. The dark-ground CSS-filter fake is no longer needed for any consumer that
  switches to this asset.
- **Logo/edge-graphic construction is now documented from source:** the standalone
  gold corner "edge graphic" is specified as proportional — thickness = 16.4% of its
  own equal height/width (p.7) — not a fixed pixel value; noted in `tokens/spacing.css`
  next to `--il-bracket` (which stays a flat 3px for the inline `.il-bracket` border
  rule; a true proportional edge-graphic would be a separate component).

Previously confirmed against the live Wix site's Media Manager (still valid):

- **Logo** (`src/assets/logo/insightlens-envision-lockup.png`) — the real,
  highest-resolution lockup file (3227×237px) pulled directly from the site.
- **Nine service icons** (`src/assets/icons/service-*.png`) — real gold line icons
  pulled from the site's public CDN during the original Claude Design session.

### Still open

1. **Envision navy, action blue, and data teal** — not covered by the official
   brand guide (which only defines Black/White/Gold). These remain pixel-sampled
   estimates from platform screenshots, not confirmed brand-standard hex values.
2. **Type sizes, spacing, and button styling** are still a considered
   reconstruction — the guide documents logo construction/spacing precisely but
   doesn't specify a UI type scale, spacing system, or component styling.
3. **Material Symbols** still stands in for the platform's small UI glyphs — the
   brand guide's own icon set (p.12) is a different, gold line-icon style closer to
   the nine service icons than to Material Symbols; a proper platform icon set is
   still unresolved.
4. **No true vector originals (AI/EPS/SVG) shipped** — the new logo PNGs were
   extracted from the guide's vector artwork at high resolution (crisp, not a raster
   scan) but are still raster files, not the original vector source.

## Components

`Button`, `Input`, `PromptField`, `Card`, `StatCard`, `Badge`, `ServiceIcon`,
`DonutChart`, `BarChart`, `SideNav`, `Breadcrumb`, `Alert` — see each component's
JSDoc and exported prop types in `src/components/**` for usage.
