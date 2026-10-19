# Brand voice · Erick Sixto

> One-page guide so every piece of copy sounds like the same person and cites the same numbers.
> Source of truth for facts/numbers is [`next-app/src/data/mock.ts`](next-app/src/data/mock.ts). When in doubt, this doc wins on *voice*; `mock.ts` wins on *figures*; [`DESIGN.md`](DESIGN.md) wins on anything visual (color, type, layout, components).

## Personality

An engineer who ended up in Salesforce. If the brand were a person: the senior specialist you call when the org is already broken and the last three consultants made it worse. Pragmatic over elegant, plain over polished, and confident enough to tell you *not* to build the thing. Never hype, never filler, never a second planning meeting.

Anchor line: **"Operators don't care how elegant your circuit is; they need it to work."**

## Voice attributes

**Direct**
- **We are:** plain, declarative, gets to the point in the first sentence.
- **We are not:** blunt for its own sake, cold, or dismissive.
- **Sounds like:** "If a Flow needs 10 elements, it's Apex."
- **Does NOT sound like:** "We leverage best-in-class methodologies to optimize your automation footprint."

**Pragmatic**
- **We are:** outcome-first, allergic to complexity that doesn't earn its keep.
- **We are not:** anti-craft or sloppy. The standard is high, it's just aimed at *working*, not *impressing*.
- **Sounds like:** "Nothing gets configured unless it solves a problem and earns its keep."
- **Does NOT sound like:** "We built an elegant, fully abstracted framework for future extensibility."

**Confident with boundaries**
- **We are:** clear about who we work with and who we don't; willing to walk away.
- **We are not:** arrogant, salesy, or eager to please.
- **Sounds like:** "I will tell you not to build it."
- **Does NOT sound like:** "We can do anything you need, just say the word!"

**Honest / low-pressure**
- **We are:** no pitch, no proposal theater, no follow-up nagging.
- **We are not:** passive or unsure. Calm, not timid.
- **Sounds like:** "No pitch, no proposal, no follow-up email 3 days later."
- **Does NOT sound like:** "Don't miss out, limited slots, book now!"

## Audience

Primary: **SaaS founders and CX/support leaders** who inherited a Salesforce org that's grown messy and is now fighting their team. Technical enough to smell BS, busy enough to want a decision, not a workshop. Secondary: in-house admins who are solid but stuck on one hard problem.

They want a senior expert who makes the call, not lowest-bid, not template-shopping, not a 6-month procurement cycle.

## Messaging pillars

1. **Salesforce that fits how you already work.** The system bends to the team, not the reverse.
2. **The cleanup nobody else will take.** Remediation: brittle triggers, click-heavy portals, silent integration failures, tangled data models.
3. **You own it when I leave.** Hand off a system your admin can run and extend, not a black box.
4. **I'll tell you the truth, including "don't build it."** Boundaries and candor as a feature, not a risk.

## Style rules

- **Sentence case** for headings. The site bolds the *second half* of a headline for emphasis: "Salesforce that doesn't **fight your team.**"
- **Contractions on.** "doesn't," "won't," "I'll."
- First person singular: **"I"**, not "we." Erick is the brand; no fake agency plural.
- **Specific beats vague.** Prefer real numbers and concrete failure modes ("drops records on Tuesdays") over adjectives ("robust," "seamless").
- **No dashes as punctuation.** No em dashes, no en dashes, and no spaced " - " or " -- " standing in for one. Use a comma, a colon, a period, or parentheses. One typographic exception survives because it is a design mark, not punctuation: the leading dash in the footer descriptor ("— Salesforce Specialist"). The other former exception, a gold dash on section labels, is gone with the labels themselves.
- **Middle dot joins page titles and date ranges**: "About · Erick Sixto", "Jul 2019 · Jul 2021". It also keeps the career column on one line, which "to" does not.
- **No kicker labels above headings.** A tracked uppercase line restating the heading under it ("Operating principles" above "What I won't compromise on.") is cut, not written. The heading carries its own meaning; if a label's words matter, work them into the heading or the first sentence.
- Mono/uppercase micro-copy is reserved for facts: the hero eyebrow ("Erick Sixto · Salesforce Specialist"), metadata rows ("№ 01 · Insurance · 2022"), case-study field names ("The call I made"), and the proof line. Short, factual, never a sentence.
- One exclamation mark is one too many. Let the claim carry the energy.
- **No jargon the buyer doesn't already use.** Apex/LWC/Flow are fine for this audience; "synergize," "leverage," "best-in-class" are banned.

## Calls to action

The site makes one ask. Everything else is evidence for it.

| Where | Exact wording | Role |
|-------|---------------|------|
| Hero and closing block | **Book a 30-minute call** | The primary action, always the solid button |
| Header, every page | **Book a call** | Persistent shorthand for the same link |
| Closing block, beside the button | **or send a brief email →** | The only secondary path |

- Lead with what the call is *not*: free, no pitch, no proposal, no follow-up email. The closing paragraph does this on every page; keep it.
- Never add a third CTA, a newsletter, a download, a "learn more," or a purchase. If a new page needs a closing line, write a new *question* for the closing block and keep the same two actions under it.
- Never write CTA copy that sells software. There is no product, pricing or install surface (see PRODUCT.md, Scope).

## Avoid

Lead-gen / growth-hacking framing (he does **remediation and custom builds**, not lead generation), urgency/scarcity tactics, superlatives without a number, "we" for a team of one, testimonial quotes on-domain (link to the Fiverr profile instead), and any framing of Erick as a software vendor. He sells judgment and builds; there are no products, plans, or prices on the site.

## Canonical proof numbers (do not paraphrase or swap)

These are distinct figures. They get mislabeled when written from memory, so always copy them exactly:

| Figure | Means | Do NOT write |
|--------|-------|--------------|
| **120+** | five-star **reviews** | ~~120+ projects~~ |
| **200+** | **projects / orders** delivered | ~~200+ reviews~~ |
| **7+ years** | Salesforce experience | n/a |
| **Top 3%** | Toptal acceptance tier | n/a |
| **2x certified · Ranger** | Salesforce Trailblazer | n/a |

Credentials, in order of emphasis: **Toptal (Top 3%)** and **Trailblazer Ranger** lead on the main site; **Fiverr Pro** (120+ reviews / 200+ orders) is the full attestation on the About page and links out. It's proof, not a headline.
