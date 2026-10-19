# PRODUCT.md · Erick Sixto

> Inferred from the codebase on 2026-05-29; revised 2026-10-19 after the design review (scope narrowed, Archivo, one-edge layout). Edit freely.

**register:** brand

## Product purpose

The personal site and lead-generation surface for **Erick Sixto**, a Senior Salesforce Specialist (mechatronics engineer turned Salesforce consultant, 7 years). The site exists to win a *small* number of high-fit engagements per year, not to maximize volume. Its single conversion goal is **booking a 30-minute discovery call**; a brief email is the secondary path. The design *is* the pitch: it has to signal seniority and judgment in the first screen.

## Users

- **SaaS founders and CX / support team leads** with a Salesforce org that has grown messy: brittle automations, a portal users avoid, a pipeline that no longer matches how they sell.
- Buyers who want **a senior expert who makes the call**, not another planning meeting, a junior admin, or a lowest-bid template shop.
- Time-poor and skeptical of consultants. They scan, they judge fast, and they distrust hype. They respond to specifics and evidence (third-party attestations, named outcomes).

## Brand personality

Senior, opinionated, plainspoken. An engineer's rigor applied to Salesforce: *"operators don't care how elegant your circuit is; they need it to work."* Confident enough to publish who he **won't** work with. Decisive. The recurring promise is "the call I made." Quietly premium, never loud.

## Tone of voice

Direct and declarative. Short sentences, dry wit, concrete over abstract. Specifics and numbers instead of adjectives. No buzzwords, no growth-hacker energy, no fake urgency. American English. The copy actively disavows sales theater ("no pitch, no proposal, no follow-up email 3 days later").

## Visual direction

A signed spec sheet: a precision document someone senior put their name to. One 880px column with a single shared left edge, a warm oat canvas (`#F1F1EF`), charcoal ink (`#2F2E2E`) for text and every hairline, and one tobacco gold (`#7E5618`) that marks data only: numbering, inline markers, separators, and the focus ring. Archivo carries the type with extreme weight contrast (200 extralight against 700 bold) as the only emphasis device; JetBrains Mono sets facts (eyebrows, metadata, the proof line). The booking button is the one solid object on any page. Flat surfaces, generous whitespace, capped line lengths, content readable before JavaScript runs.

The full visual system (tokens, type scale, components, and the named rules) lives in [`DESIGN.md`](DESIGN.md). This section states the intent; DESIGN.md is normative on the specifics.

## Anti-references

- SaaS landing-page clichés: gradient hero, feature-card grids, big-number "hero metric" blocks, stock illustrations, pricing-table theater.
- Generic Salesforce-partner / agency sites: badge walls, stock "team collaborating" photos, "Digital Transformation Partner" boilerplate.
- Loud "growth" design: neon accents, animated gradients, countdown timers, pop-up modals.
- Anything that reads as templated. Sameness is the enemy; restraint is the differentiator.
- The generic centered stack: a centered hero and closing block bracketing left-aligned sections. Every block shares one left edge.
- Tracked uppercase kicker labels above headings ("— Operating principles" above "What I won't compromise on."). A generated-looking tell: the heading already carries the meaning and the label only restates it. If the words matter, work them into the heading or the body.

## Strategic principles

1. **Every element earns its place.** If it doesn't build trust or move toward the call, it's cut.
2. **Restraint signals seniority.** The confidence to leave space is the brand.
3. **Evidence over assertion.** Third-party attestations and named outcomes do the persuading.
4. **Read like a document, behave like a portfolio.** Calm, scannable, substantive, never a sales funnel.
5. **Services and evidence only, no storefront.** The site sells Erick's judgment, not packaged software. There is no products or pricing surface, and a single listed tool reads as an abandoned shelf. Anything buyable belongs in the discovery call, not in the navigation.

## Scope

In scope: the home page, the selected work index, the about page, and the booking path. Out of scope: a products or pricing surface, a storefront, install or checkout flows, and any route that asks the visitor to buy rather than to book. The Access Analyzer product and the `/products` routes were removed on 2026-10-16; `/products` and `/products/access-analyzer` survive only as noindex redirect stubs pointing at `/work`.
