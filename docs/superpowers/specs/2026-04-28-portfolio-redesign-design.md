# Portfolio Redesign — Design Spec

**Date:** 2026-04-28
**Branch:** `redesign/notebook`
**Author:** Erick Sixto (with Claude Sonnet 4.6)

## Summary

Restructure ericksixto.com from a generic "consultant brochure" into an opinionated, stances-led consulting site for non-technical decision-makers. Editorial-minimalism visual direction. Premium through restraint, not decoration.

## Goals

- **Drive consulting lead-gen.** The whole site exists to convert serious decision-makers into discovery calls.
- **Establish authority without writing.** No blog. No essays. Authority comes from stated stances and lean case studies.
- **Match the visual register to the buyer.** Founders and CX leaders need to feel "this person makes decisions" within 10 seconds. Editorial minimalism does that. Webflow-template chrome doesn't.
- **Cut content surface area by ~40%.** Remove `/services`, `/contact`, the marquee, the testimonials grid, the social-proof grid, the process-steps strip. Keep only what each buyer archetype actually reads.

## Non-goals

- Product distribution as a primary surface. `/products` stays available but does not get homepage real estate.
- Blog or essay infrastructure. Erick will publish on LinkedIn and Instagram, not on the site.
- Technical-buyer signals (code snippets, architecture diagrams, schema dumps). Buyers are non-technical; deep technical artifacts read as cold.
- Backwards compatibility with the current homepage's hero metric template, services grid, testimonials grid, or social-proof cards. All four are replaced.

## Buyer profile

Two archetypes, in order of frequency:

1. **Founder / CEO at a small SaaS or scrappy company** (10-50 people). Inherited a Salesforce mess. Doesn't know what they don't know. Wants someone they can trust to just fix it.
2. **Head of CX / VP Customer Success.** Experience Cloud / portal / community work. Cares about user adoption above all.

Shared attitude: **busy decision-makers buying judgment, not features.** They want someone who'll make calls, not run more planning meetings.

## Information architecture

| Path | Role |
|---|---|
| `/` | Positioning, stances, peek of selected work, CTA |
| `/work` | 5-8 selected projects in lean format (~150 words each) |
| `/about` | Personal story, portrait, career timeline |
| `/products` | Existing products surface (Access Analyzer + future) |
| `/products/[slug]` | Product detail, kept |
| `/products/[slug]/buy` | Stripe checkout, kept |
| `/products/[slug]/install` | Post-purchase install, kept |

**Removed:** `/services`, `/projects` (renamed to `/work`), `/contact`. The CTA "Book a 30-minute call" lives directly on every page.

**Redirects:** `/projects → /work`, `/services → /` (308 permanent), `/contact → /#closing-cta`.

## Homepage (`/`)

Five blocks, top to bottom. Centered single column for prose; slightly wider blocks for stances and work index.

### Block 1 — Hero

- Eyebrow: `ERICK SIXTO · SALESFORCE SPECIALIST` (JetBrains Mono caps, 0.62rem, 0.28em letter-spacing). Text in muted-l (`#6B7280`); the `·` dot separator in gold (`#CB9135`).
- Headline: `Salesforce that doesn't fight your team.` (Inter 200, ~clamp(2.2rem, 4.4vw, 4.2rem), bolded last clause in Inter 700)
- Hairline rule: 32px wide, 1px, charcoal at ~33% opacity
- Lead paragraph (~3 lines, 56ch max): introduces "I'm Erick Sixto", positions the engagement model
- CTA: `Book a 30-minute call →` — outlined button, 1px charcoal border, fills charcoal on hover with oat text
- Credibility line: `120+ projects · 7 years · Toptal · Trailblazer Ranger` (JetBrains Mono caps, 0.66rem, dot separators)

**No portrait in the hero.** The portrait moves to `/about`. Headline carries the moment.

### Block 2 — Operating principles (the stances)

- Section label: `— Operating principles` (gold mono caps)
- Intro: section h2 (`Eight things I won't compromise on.`) + paragraph
- 6-8 stances rendered as a numbered list (NOT cards):
  - `P.01` (gold mono) | bold one-line stance | one-sentence rationale
  - 1px hairline rule between rows
- Stance content: see "Content requirements" below

### Block 3 — Selected work peek

- Section label: `— Selected work`
- Section h2: `Recent engagements.`
- 3 entries shown as a list:
  - Industry tag + employee count + year (mono caps)
  - Title (Inter 500, sentence case)
  - One-line outcome (muted)
  - `read →` link (mono small caps)
- Bottom: `see all 8 engagements →` to `/work`

### Block 4 — Closing CTA

- Section label: `— Get in touch`
- Editorial h2: `Got an org that's working against your team?`
- Brief paragraph reinforcing "no pitch"
- Primary CTA + secondary text link (`or send a brief email →`)

### Block 5 — Footer

- Single horizontal row: name + descriptor (left), four nav links (center), copyright + domain (right, mono)
- No social icons row, no platform-color blocks, no list of "selected sites"

## `/work`

Same hero pattern as homepage. Then:

- **Index block.** Magazine-style table of contents: numbered rows linking to in-page anchors. Three columns: number / title / industry+year (right-aligned mono).
- **Entry blocks.** Each entry on the same page, hash-anchored (e.g. `/work#cx-portal`). Each entry has the same skeleton:
  - Metadata bar (mono caps): `№ 02 · Customer Success · 30 reps · 2024`
  - Entry h2 (Inter 300 with bolded ending phrase, max 24ch)
  - Three sub-sections, each `[label] | [content]` two-column layout:
    1. **Org as I found it** — the problem in plain language (1-2 sentences, muted color)
    2. **The call I made** — the judgment call. The authority signal. (2-3 sentences, primary color)
    3. **Outcome** — one metric, one sentence (1-2 sentences, with mono number)

5-8 entries total. Each ~150 words. No separate `/work/[slug]` detail pages.

## `/about`

Reuses homepage system. No new components.

- Hero block: eyebrow `— About`, headline (e.g. *"An engineer who ended up in Salesforce."*), lead paragraph
- **Portrait block.** Single editorial portrait, full-width within the 720px column. No rounded corners, no decorative frame, no blur layers. Mono caption beneath: `Mexico City · 2025` or similar.
- Story block: 3-4 paragraphs in 60ch centered column. Editorial pacing, not bullet points.
- Career timeline: 2-column list with hairline rules. Year/role on left, what you actually did on right.
- Closing CTA mirrors homepage close.

## `/products`

Same hero pattern. Same hairline-list treatment.

- Hero: `— Products`, headline `Tools I've shipped.`, lead
- Two-column entries (one row per product):
  - Left: product name (Inter 600), tagline, "Available now" / "Coming soon" mono badge
  - Right: price (Inter 500 tabular), `Install →` CTA (outlined button)
- Hairline rule between rows
- Detail pages (`/products/[slug]`, `/buy`, `/install`) keep functional structure; visual cleanup to match the editorial direction. Top-stripe accents removed; gold restricted to section labels and the `Available now` badge.

## Visual system

### Typography

| Element | Size | Weight | Tracking |
|---|---|---|---|
| Hero h1 | clamp(2.2rem, 4.4vw, 4.2rem) | Inter 200 | −0.03em |
| Section h2 | clamp(1.6rem, 2.8vw, 2.4rem) | Inter 200 | −0.02em |
| Work entry h2 | clamp(1.6rem, 3vw, 2.2rem) | Inter 300 | −0.02em |
| Stance/work title | 1.05rem | Inter 600 | −0.005em |
| Body | 1rem | Inter 400 | normal |
| Lead | 1.05rem | Inter 400 | normal |
| Eyebrow / section label | 0.62rem | JetBrains Mono 500 | 0.28em uppercase |
| Stance number / metadata | 0.62-0.7rem | JetBrains Mono 500 | 0.16em uppercase |

The Inter 200 → Inter 700 contrast is the typographic personality. No `font-bold` slabs as headings.

### Color rules

| Token | Hex | Use |
|---|---|---|
| Oat | `#F1F1EF` | Page background. Every page. |
| Charcoal | `#2F2E2E` | Primary text. CTA borders. |
| Muted | `#4B5563` | Lead and supporting paragraphs. |
| Muted-l | `#6B7280` | Metadata, captions, mono labels. |
| Hairline | `#2F2E2E` @ 12-22% opacity | Replaces all card borders. |
| Gold | `#CB9135` | **Standing uses (don't count toward budget):** section labels (`— Operating principles`, etc.), stance numbers (`P.01`), focus ring, hero eyebrow dot separator. **Plus maximum one** other focal accent per page (e.g. one outcome metric, one badge). Total simultaneously visible gold elements per viewport: ≤ 4. |
| White | `#FFFFFF` | Reserved for rare elevation surfaces. Most pages use no white at all. |

### Components

**Allowed:**
- Outlined CTA button (1px charcoal border, charcoal text, fills charcoal on hover with oat text, 2px radius)
- Hairline-divided list (1px rule between rows; replaces card grids everywhere)
- Two-column rows (`[label] | [content]` — dominant layout primitive)
- Editorial image frame (no border-radius, generous margin, optional mono caption)

**Banned:**
- Cards with shadows, with visible borders > 1px, or with rounded corners > 4px
- Top-stripe colored accents (`h-1 bg-[#CB9135]`)
- Hero metric template (big bold number + small label + repeat × 4)
- Identical card grids with icons
- Colored badges (use mono caps text instead)
- Gradients of any kind, including subtle background blooms
- Glassmorphism / backdrop-blur as decoration
- Decorative blur or rotation layers behind images
- Marquee / scrolling-text strips
- Testimonial card grid
- Social-proof platform card grid

### Spacing rhythm

- Section vertical padding: 6rem mobile → 10-12rem desktop (`py-24 md:py-40`)
- Inter-element gap inside sections: 1.2-2rem
- Hairline rule: always 1px

### Border radius

- Outlined buttons: 2px
- Images, dividers, mockup containers: 0px
- The 4px brand-spec radius is reserved for true elevation surfaces only

### Motion

- Initial page load: subtle fade-up on hero block, 240ms ease-out-quart
- Hover: color transitions only, 200ms
- **No infinite animations.** No scroll-driven parallax. No wobble or breathing.

## Content requirements (Erick supplies)

### 1. Stances — 6 to 8

Each: bold one-line headline + one-sentence rationale (~25-35 words total).

Output: `next-app/src/data/stances.ts` (TypeScript array).

Drafted with Claude during implementation using prompts like:
- "What's a kind of work you've turned down in the last year, and why?"
- "What does every junior Salesforce consultant do that you wish they wouldn't?"
- "What's something you'll defend to a client even if it costs you the engagement?"

### 2. Work entries — 5 to 8

Each entry needs:
- Industry/role tag, employee count or scale, year
- Project title (sentence-style, ~12-18 words)
- "Org as I found it" — 1-2 sentences
- "The call I made" — 2-3 sentences
- "Outcome" — 1-2 sentences with one quantified metric

Anonymization: client names → industry + size descriptor (e.g. "B2B SaaS · 90 employees").

Output: `next-app/src/data/work.ts`.

Drafted from the existing `projects` mock data plus Erick's project list. Existing data covers ~80% of the structure; the "Outcome" sections need rewriting for prose tone.

### 3. About copy

3-4 paragraphs personal story. Existing `aboutData.story` is the seed; trim to ~30%, edit for editorial pacing.

Output: `next-app/src/data/about.ts` (or inlined in `/about/page.tsx`).

### 4. Portrait

Single editorial portrait for `/about`. Existing `/images/headshot.jpg` works; replacement is optional and out of scope for this redesign.

## Implementation notes

- **Branch:** `redesign/notebook`
- **Framework:** existing Next.js 16 (Turbopack) + Tailwind 4. No framework changes.
- **CSS tokens:** the warm-tinted palette tokens, smaller radius, and gradient-class removal from the `fix/brand-compliance` branch should land first. Two paths: (1) merge `fix/brand-compliance` to `main`, then rebase `redesign/notebook` onto it; (2) cherry-pick the `globals.css` and `mock.ts` color changes into `redesign/notebook`. Path 1 is preferred — it keeps history clean and ensures the brand-compliance work isn't lost. The redesign rebuilds page components, not the design-token foundation.
- **Files affected:** all `src/app/*/page.tsx` rewritten. `src/components/animations.tsx` likely simplified (most current animations removed). `src/components/layout/header.tsx` and `footer.tsx` rewritten to match the editorial style. New `src/data/stances.ts` and rewritten `src/data/work.ts`.
- **Component library:** existing shadcn-style `Button`, `Card`, `Badge` may stay imported, but cards in particular are not used. Most page-level components are JSX directly.
- **Build target:** static export to `ericksixto.com` GitHub Pages, unchanged.
- **Performance:** removing the marquee, the framer-motion infinite animations, and the testimonial grid will reduce JS bundle size meaningfully. Specific budget not in scope.

## Out of scope

- New portrait photography
- Real stance content (drafted during implementation)
- Real anonymized work entries (drafted during implementation)
- Email capture form, mailing list, or any non-CTA lead-capture
- Blog, essays, or long-form writing infrastructure
- Dark mode
- Multi-language
- Replacing TidyCal as the booking provider
- Replacing Stripe as the products checkout provider

## Open questions

None at spec time. All open questions during implementation become content questions answered by Erick (stances, work entries, about copy edits).
