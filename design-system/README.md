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

Verified against the live InsightLens Wix site (`insightlens.com`) via a connected
Wix account during implementation:

- **Logo** (`src/assets/logo/insightlens-envision-lockup.png`) — confirmed as the
  real, highest-resolution lockup file (3227×237px) directly from the site's Media
  Manager.
- **Signal gold** (`--il-gold-500: #f9b317`) — refined from a Media Manager pixel
  sample of the real logo/favicon/icon files (previously `#f8b018`, a CDN-scrape
  estimate).
- **Nine service icons** (`src/assets/icons/service-*.png`) — real gold line icons
  pulled from the site's public CDN during the original Claude Design session.

Still unresolved — not retrievable through Wix's public API even with a connected
account, since a classic Wix Editor site's font/theme settings aren't exposed via
REST, and no font files, reversed/white logo, or vector originals were found in the
site's Media Manager:

1. **Fonts are substituted** (Montserrat display / Noto Sans body) — supply the real
   licensed families to fix; only `tokens/fonts.css` and `tokens/typography.css`
   need to change.
2. **No reversed/white logo** exists anywhere on the site. The dark-ground use case
   still needs a real asset.
3. **Envision navy, action blue, and data teal** are still pixel-sampled estimates,
   not confirmed brand-standard hex values.
4. **Type sizes, spacing, and button styling** are a considered reconstruction, not
   values read from source CSS.
5. **Material Symbols** stands in for the platform's small UI glyphs.

## Components

`Button`, `Input`, `PromptField`, `Card`, `StatCard`, `Badge`, `ServiceIcon`,
`DonutChart`, `BarChart`, `SideNav`, `Breadcrumb`, `Alert` — see each component's
JSDoc and exported prop types in `src/components/**` for usage.
