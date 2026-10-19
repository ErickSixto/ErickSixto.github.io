---
name: Erick Sixto
description: Personal site of a senior Salesforce specialist. A considered document with one action on it.
colors:
  charcoal-ink: "#2F2E2E"
  slate-muted: "#4B5563"
  oat-canvas: "#F1F1EF"
  linen-panel: "#EAE7E0"
  tobacco-gold: "#7E5618"
  default-border: "#E4E3E1"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 6.5vw, 4.2rem)"
    fontWeight: 200
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)"
    fontWeight: 200
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)"
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  item:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
  cta:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.01em"
  proof:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.82rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.12em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.24em"
rounded:
  hairline: "2px"
spacing:
  gutter: "24px"
  section: "96px"
  closing: "128px"
  target: "44px"
components:
  button-primary:
    backgroundColor: "{colors.charcoal-ink}"
    textColor: "{colors.oat-canvas}"
    typography: "{typography.cta}"
    rounded: "{rounded.hairline}"
    padding: "16px 32px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.oat-canvas}"
    textColor: "{colors.charcoal-ink}"
  button-outline:
    backgroundColor: "{colors.oat-canvas}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.hairline}"
    padding: "0 20px"
    height: "{spacing.target}"
  button-outline-hover:
    backgroundColor: "{colors.charcoal-ink}"
    textColor: "{colors.oat-canvas}"
  nav-link:
    textColor: "{colors.slate-muted}"
    padding: "0 12px"
    height: "{spacing.target}"
  nav-link-active:
    textColor: "{colors.charcoal-ink}"
  link-secondary:
    textColor: "{colors.charcoal-ink}"
    typography: "{typography.proof}"
    height: "{spacing.target}"
  panel-closing:
    backgroundColor: "{colors.linen-panel}"
    padding: "128px 24px"
---

# Design System: Erick Sixto

## 1. Overview

**Creative North Star: "The Signed Spec Sheet"**

This is a precision document that a senior engineer put his name to. It reads the way a good specification reads: one column, one left edge, numbered items, metadata set in mono, and nothing on the page that is not load-bearing. The signature is the point. Every case study is framed as "the call I made," and the visual system exists to make that judgment legible, not to decorate it.

Density is low and deliberate. Generous whitespace is not empty space, it is the confidence to leave room. The page has exactly one solid object on it, the booking button, and everything else is type and hairlines on a warm oat surface. Emphasis comes from weight, never from color: a headline opens at weight 200 and lands at 700, and that jump is the whole emphasis vocabulary.

The system rejects, by name, the anti-references in PRODUCT.md: SaaS landing-page clichés (gradient hero, feature-card grids, big-number "hero metric" blocks, stock illustrations, pricing-table theater), generic Salesforce-partner sites (badge walls, stock "team collaborating" photos, "Digital Transformation Partner" boilerplate), loud "growth" design (neon accents, animated gradients, countdown timers, pop-up modals), tracked uppercase kicker labels above headings, and anything that reads as templated.

**The One Edge Rule.** Every block on every page starts on the same left edge of a single 880px column with a 24px gutter. Long-form reading is capped at 720px *inside* that column, with case-study paragraphs held to 62ch, never by re-centering a narrower container. Centered stacks are prohibited: a centered hero over left-aligned sections reads as a template.

**The Visible Without Script Rule.** Content is readable before JavaScript runs. No hidden state is ever server-rendered. The hero entrance is pure CSS; scroll reveals are hidden only after a script confirms it is running. If scripts fail, the page loses motion, never content.

**Key Characteristics:**
- One column, one left edge, one solid object per screen.
- Weight contrast (200 against 700) as the only emphasis device.
- Charcoal ink at four alphas does all structural work; gold marks data only.
- Flat surfaces. Depth comes from hairlines and a single tonal panel.
- Motion is a quiet 16px rise on entry, once, then never again.

## 2. Colors: The Oat and Ink Palette

A warm, near-monochrome document palette: one charcoal, one slate for secondary text, two oat surfaces, and a single tobacco gold that marks data.

### Primary
- **Charcoal Ink** (#2F2E2E): all primary text, every headline, and the fill of the booking button. It also draws every hairline in the system at four fixed alphas (see The One Ink Rule). Contrast on Oat Canvas is 11.97:1.

### Tertiary
- **Tobacco Gold** (#7E5618): the single accent. Used only for numbering (`P.01`, `№ 01`), inline list markers (`+`), the separator dot in the eyebrow, two link underlines, and the focus ring. Contrast on Oat Canvas is 5.7:1, so it is legible at label sizes.

### Neutral
- **Oat Canvas** (#F1F1EF): the page surface everywhere, including the sticky header. Warm, never white.
- **Linen Panel** (#EAE7E0): the only second surface. Used solely for the closing call-to-action block at the foot of every page, so the final ask sits on its own ground.
- **Slate Muted** (#4B5563): secondary text. Hero leads, section intros, the eyebrow, idle nav links, the "org as I found it" paragraph. Contrast on Oat Canvas is 6.7:1.
- **Default Border** (#E4E3E1): the inherited default for any element given a border without a color. Every visible rule in the components specifies its own ink alpha instead.

### Named Rules
**The One Ink Rule.** Structure is drawn in Charcoal Ink at fixed alphas, never in a new gray: 0.067 for section dividers, 0.133 for list rules and case-study separators, 0.2 for outline borders and quiet underlines, 0.333 for the short hero rule and emphasis underlines. If you need a fifth alpha, you need fewer lines.

**The Gold Marks Data Rule.** Gold appears on numbers, markers, separators and focus, and nowhere else. It never fills a surface, never colors a headline, never labels a section, and never exceeds a few percent of any screen. Its rarity is what makes a number read as a number.

**The No Pure White Rule.** Pure #FFFFFF and pure #000000 are prohibited. The lightest value is Oat Canvas; the darkest is Charcoal Ink.

## 3. Typography

**Display Font:** Archivo (with Helvetica Neue, Helvetica, Arial)
**Body Font:** Archivo
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SF Mono, Menlo)

**Character:** Archivo is a grotesque drawn for print and editorial setting, so its slightly narrow, sturdy forms read as a document rather than an app. It was chosen over Inter, the web's default sans, to avoid the training-data reflex. JetBrains Mono carries facts: numbers, metadata, proof. Together they sound like an engineer's specification with an editor's restraint.

### Hierarchy
- **Display** (200, clamp(1.6rem, 6.5vw, 4.2rem), 1.04 desktop / 1.08 mobile, tracking -0.03em): the page headline, one per page, capped at 18ch and balanced. Lands on a 700-weight closing phrase.
- **Headline** (200, clamp(1.6rem, 2.8vw, 2.4rem), 1.1, tracking -0.02em): section headings on the home and about pages. The closing question runs one step larger, clamp(1.8rem, 3.4vw, 2.8rem), capped at 22ch.
- **Title** (300, clamp(1.6rem, 3vw, 2.2rem), 1.15): case-study titles on /work, capped at 24ch. Sits 40px below the client line and 28px above its own content so it binds downward.
- **Item** (500 to 600, 1.05 to 1.1rem, 1.5): list-row titles, such as each operating principle and each work-peek row.
- **Body** (400, 0.95 to 1.05rem, 1.7): running text, capped at 50 to 56ch, set with `text-wrap: pretty` so no paragraph ends on a single orphaned word.
- **CTA** (500, 0.92rem, tracking 0.01em): the booking button label only.
- **Proof** (JetBrains Mono 500, 0.82rem, tracking 0.12em, uppercase): the third-party evidence line under the hero CTA, and mono inline links. Evidence is set in ink, not slate.
- **Label** (JetBrains Mono 400 to 500, 0.72rem, tracking 0.14 to 0.24em, uppercase): eyebrows, metadata rows, case-study field labels, footer marks.

### Named Rules
**The 200/700 Rule.** Every headline splits into an extralight lead and a bold landing: "Salesforce that doesn't **fight your team.**" The weight jump is the only emphasis device. Never italic, never color, never underline for emphasis.

**The 11px Floor Rule.** No text renders below 11px. The smallest step is the 0.72rem label at 11.52px. Being on the ramp does not excuse being illegible.

**The Mono Is For Facts Rule.** JetBrains Mono sets numbers, metadata, proof and short links. It never sets a sentence of prose, and it is never used as costume to signal "technical."

## 4. Elevation

The system is flat. Depth is conveyed by hairlines and by a single tonal shift, the Linen Panel under the closing call to action. Nothing floats, nothing glows, nothing is glass.

### Shadow Vocabulary
- **Scroll Seam** (`box-shadow: 0 6px 24px -18px rgba(47,46,46,0.4)`): appears on the sticky header only once the page has scrolled past 8px, paired with a 0.067 ink hairline, to show that content is passing beneath it. At rest the header has neither.
- **Focus Ring** (`box-shadow: 0 0 0 2px #7E5618, 0 0 0 4px #F1F1EF`): the keyboard focus indicator on every link, button and field. Gold ring, canvas gap. It replaces the browser outline.

### Named Rules
**The Flat Document Rule.** Surfaces are flat at rest. The only shadows in the system are the scroll seam and the focus ring, and both respond to state. If a shadow is visible on a page that has not been scrolled or focused, it is a bug.

## 5. Components

Components are few and quiet. The site has one button that matters, and the rest is type.

### Buttons
- **Shape:** near-square corners (2px), the radius of a printed rule rather than a pill.
- **Primary (the booking button):** solid Charcoal Ink with Oat Canvas text, 0.92rem at weight 500, 16px by 32px padding, 56px tall. It is the only solid block on any page, and it carries a trailing arrow. On hover it inverts to an outline: transparent fill, ink text, ink border, over 200ms.
- **Outline (header "Book a call"):** transparent with a 0.2 ink border, ink text, 44px tall. On hover it fills with ink. It is deliberately subordinate to the primary.
- **Secondary link ("or send a brief email"):** JetBrains Mono at 0.82rem with a 0.2 ink underline, given a 44px hit area without moving the text.

### Lists
- **Style:** full-width rows divided by 0.133 ink rules top and bottom. No cards, no fills, no icons.
- **Row:** gold mono number on the left (`P.01`), item title, then a slate rationale. Rows stagger in on scroll, 70ms apart.

### Case Study (signature component)
- **Structure:** a metadata row (gold number, industry, scale, year in mono), the client name in 600 weight, the title, then three labeled fields in a two-column grid: **Org as I found it** (slate), **The call I made** (ink), **Outcome** (ink, with the result figure set in mono). The fields are separated by 0.067 hairlines.
- **Why it matters:** this is the "signed" part of the spec sheet. The middle field is always the judgment call, and it is always in full ink.

### Hero
- **Structure:** left-aligned on the column. Mono eyebrow, display headline, a 32px rule at 0.333 ink, a slate lead capped at 56ch, the primary button, then the proof line. A faint grain texture fades out from the top behind it.
- **Motion:** each block rises 16px and fades in on load, 60ms apart, with an ease-out-quart curve. Pure CSS, so it plays without JavaScript.

### Navigation
- **Style:** Archivo at 0.82rem. Idle links in Slate Muted, the active link in ink at weight 500 with `aria-current`. Every link has a 44px hit area.
- **Desktop:** name and mono tagline left, links centered, outline button right.
- **Mobile:** links move to an evenly spaced strip under the bar, each 44px tall.
- **Skip link:** the first tab stop on every page. Hidden until focused, then shown as a solid ink block in the top-left corner.

### Closing Panel
- **Style:** the Linen Panel surface, 128px vertical padding, left-aligned on the column. A headline-scale question, a slate paragraph, then the primary button beside the secondary link.

## 6. Do's and Don'ts

### Do:
- **Do** start every block on the same left edge of the 880px column. Cap long reading at 720px inside it, and paragraphs at 62ch.
- **Do** split every headline into a weight-200 lead and a weight-700 landing.
- **Do** keep the booking button the only solid ink block on the page.
- **Do** set evidence (200+ projects, Toptal, Trailblazer Ranger) in ink at 0.82rem mono, never smaller and never in slate.
- **Do** draw structure in Charcoal Ink at 0.067, 0.133, 0.2 or 0.333 alpha.
- **Do** give every interactive element a 44px hit area and a visible gold focus ring.
- **Do** render content in the server HTML. Let motion be the only thing that depends on JavaScript.
- **Do** mark links that open a new tab for screen readers.

### Don't:
- **Don't** use SaaS landing-page clichés: gradient hero, feature-card grids, big-number "hero metric" blocks, stock illustrations, or pricing-table theater.
- **Don't** imitate generic Salesforce-partner sites: badge walls, stock "team collaborating" photos, or "Digital Transformation Partner" boilerplate.
- **Don't** use loud "growth" design: neon accents, animated gradients, countdown timers, or pop-up modals.
- **Don't** put a tracked uppercase kicker label above a heading. The heading carries its own weight; if the words matter, work them into the heading or the body.
- **Don't** center a hero or a closing block over left-aligned content. That is the generic centered stack.
- **Don't** use gold for a surface, a headline, a section label or decoration. Gold marks data.
- **Don't** set any text below 11px, or set prose in JetBrains Mono.
- **Don't** add a products, pricing, checkout or storefront surface. The site sells judgment, and the only ask is the call.
- **Don't** use cards, nested cards, side-stripe borders, gradient text, glassmorphism or bounce easing.
- **Don't** ship `opacity: 0` in server-rendered HTML.
- **Don't** use em dashes or en dashes as punctuation in any copy.
