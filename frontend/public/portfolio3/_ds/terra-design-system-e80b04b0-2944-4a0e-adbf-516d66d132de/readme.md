# Terra — Organic Design System

Terra is the design language for a calm, grounded family of garden- and home-companion products. Its north star is **"Rooted Warmth"**: earthy tones, soft shapes, and natural textures that feel human and unhurried — never sterile, clinical, or tech-y.

This project is the machine-readable design system: design tokens, reusable React components, foundation specimen cards, and a full product UI kit. A compiler bundles the components into `_ds_bundle.js` and indexes the tokens automatically.

## Sources
No external codebase, Figma file, or brand kit was provided. The system was authored entirely from the written **Terra — Organic Design** brand brief (colors, typography, elevation, component, and tone rules). If you have the original brand assets — real logo files, photography, an icon set, or product screens — share them and this system can be tightened to match.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import list only). Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent Skill front-matter so this folder works inside Claude Code.

**`tokens/`** — CSS custom properties, each `@import`ed by `styles.css`
- `colors.css` · `typography.css` · `spacing.css` · `elevation.css` · `fonts.css`

**`components/`** — reusable React primitives (`window.TerraDesignSystem_e80b04`)
- `core/` — Button, IconButton, Card, Badge, Avatar
- `forms/` — Input, Select, Checkbox, Switch
- `navigation/` — Tabs
- `feedback/` — Alert

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand)

**`ui_kits/garden-app/`** — Terra, a home-garden companion web app: dashboard, plant detail, schedule (clickable `index.html`).

**`assets/`** — logo mark (green + cream variants).

---

## Brand & product context
Terra products help people care for living things at a gentle pace — a backyard plot, a windowsill of herbs, a few houseplants. The voice is that of a calm, knowledgeable friend, not a dashboard barking metrics. The visual world is a sunlit potting bench: warm cream paper, forest greens, amber wood tones.

---

## Content fundamentals (voice & copy)

- **Tone:** warm, calm, encouraging, plainspoken. Like a seasoned gardener leaning over the fence — never urgent or salesy.
- **Person:** address the reader as **you**; the product refers to itself as **Terra** or **we**, sparingly. Possessive and personal: "your plants," "your plot."
- **Casing:** sentence case everywhere — headings, buttons, labels. Title Case is avoided. ALL-CAPS only for tiny eyebrow labels with wide letter-spacing.
- **Length:** short, unhurried sentences. Generous whitespace beats dense paragraphs.
- **Verbs:** gentle and concrete — "tend," "grow," "water," "log," "rest," "soak." Avoid aggressive CTA verbs ("Crush," "Boost," "Unlock").
- **Numbers & units:** human and rounded — "Water in 3 days," "6.4h of sun," "16–24°C." Pair every metric with plain-language meaning ("Thirsty," "Healthy").
- **Emoji:** not used. Warmth comes from words, type, and color — not emoji.
- **Examples:**
  - Headline: *"Good morning, Maya"* · *"Grow something good"* · *"Rooted warmth"*
  - Button: *"Log watering"* · *"Add plant"* · *"Save draft"*
  - Status: *"Soil is dry. A good soak this morning will keep your basil happy."*
  - Empty/error (soft, never blaming): *"Pump 2 is offline."* / *"Frost expected tonight — cover tender seedlings."*

---

## Visual foundations

- **Color vibe:** earthy and desaturated. Forest green `#4a7c59` is the primary (actions, nav, interactive). Warm amber `#705c30` is the tertiary accent (highlights, badges). Background is warm cream `#faf6f0`, never pure white. **No neon, no pure hues.** Every neutral gray carries a yellow/green undertone (see `--neutral-*`).
- **Surfaces:** tonal layering over heavy shadow. Three cream planes do the work — `--surface-bg` (cream), `--surface-card` (raised, near-white warm), `--surface-sunk` (recessed). Stack tones to separate regions before reaching for elevation.
- **Type:** **Literata** (warm serif, optical sizing) for all headings/display — gives personality and a literary, grounded feel; weights 500–600 with tight tracking (−0.02em). **Nunito Sans** (friendly, rounded) for body and labels. Body line-height is generous (1.65); reading is comfortable and unhurried.
- **Spacing:** breathable. 4px base scale, but components lean roomy — cards pad 24px, controls 12–18px. White space is a feature.
- **Corner radius:** soft everywhere. 12px (`--radius-md`) on buttons, inputs, cards; pills for badges/switches. Nothing sharp; no 0–4px corners.
- **Elevation:** barely-there, warm-tinted shadows. Signature is `--shadow-md: 0 4px 20px rgba(46,50,48,0.06)`. Shadows are diffuse and low-opacity, tinted with the warm near-black `#2e3230` rather than pure black. Prefer tonal separation; add shadow only on hover/lift or true overlays.
- **Borders:** hairline, low-contrast warm neutrals (`--outline`, `--outline-variant`). Used to define cards/inputs quietly — never as loud dividers, never colored left-accent bars.
- **Backgrounds:** flat warm cream. No gradients, no glassmorphism, no busy patterns. Imagery (plant photos) provides texture instead.
- **Imagery:** natural and warm — real plants, soil, sunlight, hands. Warm color temperature, soft natural light. **Avoid** clinical, cold, blue-tinted, or tech-stock imagery. Photos sit in 12px-radius frames over the sunk cream tone.
- **Animation:** subtle and soft. 120–200ms ease transitions. Hover lifts a card `translateY(-2px)` and deepens the shadow one step. No bounce, no spring overshoot, no flashy motion. Respects an unhurried pace.
- **Hover states:** primary buttons darken one green step (600→700); secondary/ghost fill with the faint green tint (`--green-50`); cards lift + shadow.
- **Press states:** buttons scale to 0.98 and darken another step (→800). Gentle, never jumpy.
- **Focus:** soft green ring — `box-shadow: 0 0 0 4px` of 38%-opacity primary (`--focus-ring`). Calm, not a hard outline.
- **Transparency / blur:** used minimally. Color-mix tints (focus ring, hovers) yes; backdrop blur and frosted glass are not part of the language.
- **Layout rules:** generous margins, comfortable max-widths (`--container-max` 1200px, prose 680px). Large touch targets (buttons ≥44px tall, hit areas ≥44px). Content breathes.

---

## Iconography

- **No proprietary icon set was provided.** The UI kit uses **Lucide-style** line icons (https://lucide.dev) — rounded caps/joins, ~1.9px stroke, `currentColor` — which suit Terra's soft, organic feel. They live as small inline-SVG React components in `ui_kits/garden-app/Icons.jsx` (sprout, leaf, droplet, sun, thermometer, scissors, calendar, etc.).
- **Style rules if extending:** outline (not filled), rounded line ends, consistent ~2px stroke, drawn on a 24px grid, colored via `currentColor` so they inherit text/brand color. Botanical and nature metaphors are preferred (sprout, leaf, droplet, sun).
- **Emoji:** never used as icons or decoration.
- **Unicode glyphs:** the arrow "→" appears in inline text links; otherwise use SVG icons.
- **Logo:** `assets/logo-mark.svg` (forest-green sprout) + `logo-mark-cream.svg` (for dark green surfaces). ⚠️ Placeholder mark — see Caveats.

---

## Using the components

In a card or kit HTML: link `styles.css`, load `_ds_bundle.js`, then read components off the namespace:

```html
<link rel="stylesheet" href="/styles.css" />
<script src="/_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Input } = window.TerraDesignSystem_e80b04;
</script>
```

When mounting several Babel `src` files that share global scope, destructure the namespace **inside** each component function (not at module top level) to avoid identifier collisions and load-order races.
