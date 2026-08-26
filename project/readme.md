# InsightLens Design System

**InsightLens + Envision USA — clarity, creativity, and control for retail spaces.**

InsightLens is a division of Envision USA, Inc. The two brands operate as one
connected team behind a single lockup: **InsightLens** turns physical environments
into data (asset management platform, 3D scans and digital twins, IoT and traffic
analytics, digital signage monitoring, cybersecurity support), and **Envision USA**
carries that intelligence into the built world (strategy, design and value
engineering, rollout planning and execution, operate and optimize). The customer
base is large retail and banking networks — hundreds to thousands of branches.

This project is the canonical design system derived from the public website:
brand foundations (colour, type, spacing, elevation), reusable React components,
and two UI kits — the marketing website and the InsightLens platform.
Consuming projects link the root **`styles.css`** and read components from the
compiled bundle on the `window.<Namespace>` global.

---

## Sources

Everything here was derived from **https://www.insightlens.com** (a Wix build),
pages read during authoring:

- `/` · `/about` · `/asset-management-platform` · `/data-technology` · `/3d-scans`
- Navigation IA: About · Our Services (Data & Technology, Strategy Design & Value
  Engineering, Plan & Execute, Operate & Optimize, Cybersecurity Support) ·
  Asset Management Platform · 3D Scans · What Is Your Role? (Design, Facilities,
  Marketing, Merchandising, Real Estate) · Resources (Case Studies, Posts,
  Videos) · Contact

Assets were downloaded directly from the site's CDN (`static.wixstatic.com`) into
`assets/` — the shared logo lockup, the nine gold service icons, the LinkedIn
glyph, the particle-field hero, eight environment photographs, and the product
screenshots that the platform UI kit is reconstructed from.

**What could not be read.** The site's own CSS and webfont files are not
cross-origin readable, so no font family names, exact type sizes, or button
styles could be lifted from source. Colours in this system were sampled
pixel-accurately from the downloaded logo, icons and product screenshots; type
and layout values are a considered reconstruction, not a transcription. See
**Substitutions & open questions**.

---

## Index / manifest

| Path | What |
|------|------|
| `styles.css` | Root entry point — `@import`s every token file. Link this. |
| `tokens/fonts.css` | Webfont loading (Google CDN) + Material Symbols. |
| `tokens/colors.css` | Colour ramps, semantic aliases, chart ramp, scrims. |
| `tokens/typography.css` | Families, weights, type scale, tracking. |
| `tokens/spacing.css` | Spacing, radii, borders, shadows, layout, motion. |
| `tokens/base.css` | Element defaults + `.il-*` type utilities. |
| `guidelines/*.card.html` | 18 foundation specimen cards (Colors, Type, Spacing, Brand). |
| `components/buttons/Button` | Square uppercase action button. |
| `components/forms/Input` | Labelled text field. |
| `components/forms/PromptField` | Pill prompt field from the DISCOVER agent screen. |
| `components/display/Card` | Content / case-study card. |
| `components/display/StatCard` | Dashboard metric readout. |
| `components/display/Badge` | Uppercase status / category pill. |
| `components/display/ServiceIcon` | Wrapper for the nine gold brand icons. |
| `components/charts/DonutChart` | Share-of-total donut, gold-led ramp. |
| `components/charts/BarChart` | Count-by-category bars on a hairline grid. |
| `components/navigation/SideNav` | Platform left rail. |
| `components/navigation/Breadcrumb` | Pipe-separated trail. |
| `components/feedback/Alert` | Inline semantic banner. |
| `ui_kits/website/` | Marketing site recreation (home, platform, 3D scans, contact). |
| `ui_kits/platform/` | InsightLens platform recreation (Discover, Locations, Assets). |
| `assets/logo/` `assets/icons/` `assets/imagery/` `assets/product/` | Real brand assets. |
| `SKILL.md` | Agent-skill manifest for use in Claude Code. |

### Intentional additions

The website exposes no component library, so the primitive set was authored from
what the site and the product screenshots show. Two items have no direct
counterpart in the source and were added because the platform cannot function
without them: **`Alert`** (status and data-freshness messaging) and **`Input`**
(the site's Wix contact form fields were not readable). Both follow the
foundations strictly; treat them as proposals to confirm.

---

## CONTENT FUNDAMENTALS

**Voice — expert, plain-spoken, partnership-first.** The site writes as a
practitioner, not a vendor. Sentences are short and declarative, claims are
operational rather than aspirational, and the recurring subject is *clarity over
complexity*.

- **Person:** "We" for the combined team, "you / your" for the client.
  *"We're retail experts, innovators, strategists, and creators who thrive on
  turning unique ideas into real-world impact."*
- **Signature constructions.** Two-part headlines that pair a capability with an
  outcome: *"Built to organize data. Designed to drive decisions."* And
  short subject-verb-object statements: *"InsightLens brings precision to
  complexity." "Envision brings strategy into the physical world."*
- **Casing.** Sentence case for headlines, leads and body. **ALL-CAPS with wide
  tracking** is reserved for navigation and eyebrow labels (ABOUT, OUR SERVICES,
  ASSET MANAGEMENT PLATFORM, 3D SCANS) and for the platform's own nav rail
  (DISCOVER, LOCATIONS, ASSETS, PROGRAMS, ADMIN). Never all-caps for a sentence.
- **Lead paragraphs** run one to three sentences and stack clauses with commas:
  *"InsightLens gives organizations a shared, reliable view of their locations so
  decisions are grounded in reality, execution is consistent, and operations
  perform at scale."*
- **Proof is testimonial and role-attributed, never named-client.** Quotes are
  credited by title only — "Vice President, Printing and Distribution",
  "Visual Comms Manager, Digital Signage Supplier", "AVP FCAM, Banking Client".
  Follow this: do not invent client names or logos.
- **Numbers** appear as real operational counts inside the product (497 locations,
  477 assets, 25+ years) and almost never as marketing statistics. Do not invent
  percentages.
- **Punctuation:** em dashes for asides, ampersands normal in labels and service
  names. Non-breaking hyphens are used in compounds (*real‑time*, *end‑to‑end*,
  *value‑engineered*).
- **Emoji:** never.
- **CTAs are conversational rather than imperative-hard:** "Let's innovate
  together.", "Contact us here", "Let's talk". Keep the invitation tone.
- **Closing line used site-wide:** *"Let's innovate together."* followed by a
  contact link, then the ownership line *"InsightLens is a division of Envision
  USA, Inc."*

---

## VISUAL FOUNDATIONS

**One accent, one anchor.** The system runs on **signal gold `#F8B018`** against
**true black** on **white**. Gold is not decoration: it is the logo bracket, the
word LENS, every service icon, every chart fill, and the active-state marker in
the platform. **Envision navy `#203870`** is the second brand colour, drawn from
the ENVISION wordmark, and is used for dark panels and the third data series.
Two blues coexist deliberately: navy *states*, action blue `#1070C0` *invites*
(links, avatars, send buttons — sampled from the platform screens). A **data teal
`#1F92B4`** is the second chart series. Everything else is neutral grey.

**Typography.** Display and headings in a heavy geometric sans (Montserrat here,
standing in for the wordmark's face); body and UI in Noto Sans. Headings are
sentence case with slightly negative tracking; the scale runs 64 → 48 → 36 → 26 →
20px over a 20/16/14/12px body scale. The one expressive type move is the
**ALL-CAPS 12px eyebrow at 0.14em tracking**, used above headlines and for all
navigation. Dashboard metrics are set large in the display face with a two-line
grey label beneath — a real pattern from the Locations Overview screen.

**Shape & edges.** Square-leaning and technical. **Buttons and inputs have no
radius (0px)**; alerts 4px; metric tiles 8px; **cards and media 12px**; pills
(999px) are reserved for the platform prompt field, avatars and status badges.
The **gold corner bracket** from the logo is the system's one graphic device —
a 3px top+left rule used to mark a section or a pull-quote. Use it sparingly and
never close it into a full box.

**Backgrounds.** Predominantly white, with `--il-grey-100` for alternating
sections. Dark moments are near-black (`--il-ink-700`), not navy-tinted, and carry
the **particle-field graphic** (`assets/imagery/hero-particle-wave.png`) — a
dotted topographic wave that reads as spatial data. Full-bleed photography is
always laid under a **left-dark protection gradient** (`--il-scrim-dark`) so white
type stays legible; no blur panels, no decorative gradients, no colour overlays
on photography.

**Imagery is documentary, not styled.** Real bank branches and retail interiors,
shot on location under existing lighting — teller counters, signage walls, digital
displays, queue lines, staffed desks. Colour comes from the *client's* brand in
frame (often reds), so treat photographs as found material: never tint, never
duotone, never add grain. The 3D-scan captures (grey point clouds, floor-plan
overlays with coloured zones and asset pins) are the other imagery family and
should be shown raw, on white or near-black.

**Elevation.** Four soft neutral shadows, no coloured glows. Cards rest at
`--il-shadow-sm`; on hover they lift 4px and their cover image scales ~4.5%.
Dark panels and full-bleed sections carry no shadow at all.

**Motion.** Calm and functional: 200ms on `cubic-bezier(.4,0,.2,1)` for colour,
border and shadow; 400ms for image scale and chart growth. No bounce, no parallax,
no infinite loops. The homepage's one animated element is a continuous horizontal
marquee of environment photographs — slow, linear, uninterrupted.
`prefers-reduced-motion` is respected globally in `base.css`.

**States.**
- *Hover* — primary button goes black → navy; accent gold lightens to `#FFC247`;
  secondary fills pale grey; links darken to `--il-blue-700` and underline;
  cards lift and zoom.
- *Focus* — 1px action-blue border plus a 3px `--il-blue-050` ring.
- *Active (platform nav)* — pale gold ground with a 3px gold left marker and the
  label in bold; children expand beneath with a `▸` marker on the current child.
- *Disabled* — 45% opacity, `not-allowed`.

**Layout.** Centred container at 1240px with 48px desktop gutters (20px small),
96px vertical rhythm between marketing sections, body copy capped at ~68
characters. Grids use `gap`, never margins. The site header is a full-width white
bar with the lockup left and uppercase nav right; the platform uses a fixed
232–250px left rail with a scrolling content pane. Transparency and blur are used
only for the sticky header over content — nowhere else.

---

## ICONOGRAPHY

**The brand's own icons are gold line PNGs, and they are the primary set.** Nine
were published on the service pages and are copied into `assets/icons/` — outline
style, ~2px even stroke, rounded joins, drawn in `#F8B018`, no fill, roughly
52×52 display size:

`asset-management-platform` (stacked layers) · `3d-scans-digital-twins` (split
volume) · `iot-sensors-traffic-analytics` (broadcast waves) · `e-paper-digital-signage`
(document/screen) · `digital-display-monitoring` (magnifier) · `api-integration`
(two puzzle pieces, one gold-filled) · `cybersecurity-compliance` (shield with
check) · `ma-data-models` (map with pin) · `multi-purpose-spatial-intelligence`
(building cluster). Use `ServiceIcon` whenever a capability is being named.

**Supplementary UI glyphs use Material Symbols Outlined** from the Google Fonts
CDN (`<span class="material-symbols-outlined">arrow_forward</span>`), loaded by
`tokens/fonts.css`. This is a **flagged substitution**: the platform screenshots
show small monochrome UI icons in the left rail and toolbars whose source set is
not identifiable from imagery. Material Symbols Outlined at weight 400 is the
closest match in stroke and terminal treatment; swap it if the platform uses
something else. Common glyphs: `arrow_forward`, `arrow_upward`, `search`,
`dashboard`, `location_city`, `category`, `campaign`, `smart_display`,
`monitor_heart`, `timeline`, `settings`, `download`, `close`, `info`,
`check_circle`, `warning`, `cancel`.

**Never** emoji, and never Unicode characters as icons — the single exception is
the `▸` marker on the active platform sub-nav item, which the product itself uses.
The LinkedIn mark (`assets/icons/linkedin.png`) is the only social icon in use.

---

## Substitutions & open questions

1. **Fonts are substituted.** Montserrat (display) and Noto Sans (body/UI) stand
   in for the real families; the site's font files and CSS are not readable
   cross-origin. Montserrat is the closest freely available match to the
   InsightLens wordmark and is also the declared Gotham fallback in the parent
   Envision system. **Please supply the real brand fonts** (or their names) and
   only `tokens/fonts.css` and `tokens/typography.css` need to change.
2. **No reversed / white logo lockup was available** — only the colour PNG on
   white. The dark-ground specimen filters the colour file as a placeholder.
   Please supply the reversed and square marks, plus vector originals.
3. **Type sizes, spacing and button styling are a reconstruction** from rendered
   pages, not values read from source. Expect to correct them.
4. **Material Symbols is a stand-in** for the platform's small UI icon set.
5. **No slide template was provided,** so no sample slides were authored.
6. Colour values were sampled from real assets and quantised in the process:
   gold `#F8B018` and navy `#203870` may each be within ~2 of the official values.
   Please confirm against brand standards.
