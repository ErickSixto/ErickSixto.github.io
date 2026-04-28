# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild ericksixto.com as a 4-page editorial-minimalism site driven by stated stances and a lean work index, replacing the current generic-template structure.

**Architecture:** A small library of editorial components (Button, Eyebrow, Hero, EditorialList, StanceList, WorkEntry, ClosingCTA) composed into 4 pages (`/`, `/work`, `/about`, `/products`). All shared content lives in typed data files (`stances.ts`, `work.ts`). Static export to GitHub Pages, no backend changes.

**Tech Stack:** Next.js 16 (Turbopack) · Tailwind 4 · TypeScript · framer-motion (kept but used sparingly) · static export.

**Spec:** [`docs/superpowers/specs/2026-04-28-portfolio-redesign-design.md`](../specs/2026-04-28-portfolio-redesign-design.md).

**Working directory:** `/Users/locus/Documents/ericksixto.github.io/.worktrees/notebook-redesign/next-app`. All `npm` commands run from there. All file paths in this plan are relative to the worktree root.

**Verification model:** No unit tests exist in this codebase. Each task verifies via `npm run lint`, `npm run build`, and (for visible UI) a manual dev-server walkthrough. Adding tests is out of scope.

---

## Task 1: Worktree setup and CSS token foundation

**Files:**
- Modify: `next-app/src/app/globals.css`
- Modify: `next-app/src/data/mock.ts` (platform colors only)

**Why:** The redesign branch is off `main`, so it does NOT yet have the warm CSS tokens, smaller radius, neutralized platform colors, or removed `gradient-sweep-bg` class from the `fix/brand-compliance` branch. Re-apply those changes first so the redesign builds on a clean foundation. If the user later merges `fix/brand-compliance` to main and rebases this branch, the changes will collapse cleanly.

- [ ] **Step 1: Verify dependencies install in the new worktree**

Run from the worktree root:
```bash
cd next-app && npm install
```
Expected: completes with no errors. May show audit warnings (ignore).

- [ ] **Step 2: Verify the baseline build is clean before any edits**

Run from `next-app/`:
```bash
npm run build
```
Expected: build completes, all 13 routes generate (`/`, `/about`, `/contact`, `/products`, `/products/[slug]`, `/products/[slug]/buy`, `/products/[slug]/install`, `/projects`, `/services`, `/_not-found`, `/icon.png`).

- [ ] **Step 3: Apply CSS token + radius fixes to `next-app/src/app/globals.css`**

Replace the `--color-muted`, `--color-muted-foreground`, `--color-border`, `--color-input`, and `--radius` lines, AND remove the `.gradient-sweep-bg` block.

In the `@theme` block, change these lines:
```css
  --color-muted: hsl(220 14% 96%);
  --color-muted-foreground: hsl(215 14% 34%);
```
to:
```css
  --color-muted: hsl(40 7% 94%);
  --color-muted-foreground: hsl(0 2% 28%);
```

Change:
```css
  --color-border: hsl(220 13% 91%);
  --color-input: hsl(220 13% 91%);
```
to:
```css
  --color-border: hsl(40 5% 89%);
  --color-input: hsl(40 5% 89%);
```

Change:
```css
  --radius: 0.5rem;
```
to:
```css
  --radius: 0.25rem;
```

Delete the entire `.gradient-sweep-bg { ... }` block at the bottom of the file.

- [ ] **Step 4: Neutralize platform colors in `next-app/src/data/mock.ts`**

In `socialProof`, change all three `color: "#1DBF73"`, `color: "#204ECF"`, `color: "#00A1E0"` values to `color: "#2F2E2E"`.

In `platformLinks`, change all five color values (`#1DBF73`, `#204ECF`, `#00A1E0`, `#0A66C2`, `#171515`) to `color: "#2F2E2E"`.

- [ ] **Step 5: Verify build still passes**

```bash
npm run build
```
Expected: build completes. No new TypeScript or build errors.

- [ ] **Step 6: Commit**

From the worktree root (not `next-app/`):
```bash
git add next-app/src/app/globals.css next-app/src/data/mock.ts
git commit -m "chore: carry forward warm CSS tokens + neutral platform colors"
```

---

## Task 2: Stances data file

**Files:**
- Create: `next-app/src/data/stances.ts`

**Why:** Stances are the structural spine of the homepage. Define the type and seed with 6 placeholder entries so components can be built and rendered before Erick writes the real ones. The placeholders are clearly marked so Erick can replace them later without touching the components.

- [ ] **Step 1: Create `next-app/src/data/stances.ts`**

Write exactly this content:

```ts
// Operating principles. Each stance is one bold position Erick will defend
// in client conversations. Keep them tight: ~25-35 words total per entry.
//
// Author voice: senior engineer talking peer-to-peer with a busy decision-maker.
// Specific over abstract. Concrete examples beat adjectives.
//
// PLACEHOLDER CONTENT — Erick to replace with real stances before launch.

export type Stance = {
  id: string;
  number: string; // e.g. "P.01"
  headline: string; // bold one-line stance
  rationale: string; // one sentence of "why"
};

export const stances: Stance[] = [
  {
    id: "standard-before-custom",
    number: "P.01",
    headline: "Standard before custom, every time.",
    rationale:
      "I'll exhaust permission sets, validation rules, and standard objects before I touch a Lightning page. Most orgs are broken because someone reached for code first.",
  },
  {
    id: "admin-runs-it",
    number: "P.02",
    headline: "Your admin runs it, not me.",
    rationale:
      "Every engagement ends with a documented hand-off and a backup admin who can extend the work. If your team needs my phone number to change a field, I haven't finished.",
  },
  {
    id: "flow-vs-apex",
    number: "P.03",
    headline: "If a Flow needs ten elements, it's Apex.",
    rationale:
      "Complex orchestration belongs in code that can be tested, reviewed, and reasoned about. Flow is great for declarative work and a debugging nightmare for everything else.",
  },
  {
    id: "adoption-over-architecture",
    number: "P.04",
    headline: "Adoption beats architecture, always.",
    rationale:
      "If your sales team won't open the screen, the cleanest data model is theatre. I optimize for the person clicking, not the consultant reviewing.",
  },
  {
    id: "tell-you-not-to-build",
    number: "P.05",
    headline: "I will tell you not to build it.",
    rationale:
      "Roughly a third of the requests I get end with \"you don't need this.\" Saying no is part of the job. Talking you out of bad work is part of the job.",
  },
  {
    id: "no-pitch",
    number: "P.06",
    headline: "No proposals, no follow-up emails.",
    rationale:
      "After a discovery call I'll either say yes, refer you to someone better suited, or send one short note explaining why I'm not the right fit. No drip sequence, ever.",
  },
];
```

- [ ] **Step 2: Verify TypeScript and build**

```bash
npm run build
```
Expected: clean build. The new file is valid TypeScript.

- [ ] **Step 3: Commit**

```bash
git add next-app/src/data/stances.ts
git commit -m "feat(data): seed operating principles with placeholders"
```

---

## Task 3: Work data file

**Files:**
- Create: `next-app/src/data/work.ts`

**Why:** Replaces the project-card schema in `mock.ts` with the new three-section skeleton (`found`, `call`, `outcome`). Existing project content seeds the file; Erick will edit the prose later. The component layer reads from this file only.

- [ ] **Step 1: Create `next-app/src/data/work.ts`**

Write exactly this content:

```ts
// Selected work index. Each entry follows a strict skeleton:
//  - found: the org as Erick found it (1-2 sentences, plain language)
//  - call: the judgment call Erick made (2-3 sentences, the authority signal)
//  - outcome: one quantified result, one sentence (1-2 sentences)
//
// Keep entries to ~150 words total. Anonymize client names to industry + size.
//
// PLACEHOLDER CONTENT — Erick to edit prose before launch. Existing project
// data has been mapped to this schema; the "call I made" sections need the
// most rewriting.

export type WorkEntry = {
  id: string; // hash anchor, kebab-case
  number: string; // "№ 01"
  industry: string;
  scale: string; // e.g. "90 employees", "30 reps"
  year: number;
  title: string; // sentence-style, ~12-18 words
  found: string; // org as I found it
  call: string; // the call I made
  outcome: string; // outcome
  outcomeMetric?: string; // optional pull-out number, e.g. "−38%"
};

export const work: WorkEntry[] = [
  {
    id: "pipeline-migration",
    number: "№ 01",
    industry: "B2B SaaS",
    scale: "90 employees",
    year: 2024,
    title: "Migrated three years of pipeline to a single source of truth.",
    found:
      "Twelve sales reps had each developed their own naming conventions for accounts. Forecasting reports were unreliable enough that the founder had given up on them and was tracking pipeline in a spreadsheet. The CRM existed; nobody trusted it.",
    call:
      "Closed twelve reps' worth of duplicate accounts before we touched a single object. Rebuilt the data model around how the team actually sells, not how Salesforce assumes you'll sell. Added validation rules that fail fast instead of letting bad data into reports.",
    outcome:
      "Forecasting reports stopped lying. The founder got their pipeline view back. Total engagement: six weeks, no overrun.",
  },
  {
    id: "cx-portal",
    number: "№ 02",
    industry: "Customer Success",
    scale: "30 reps",
    year: 2024,
    title: "Rebuilt a CX portal that was driving tickets, not deflecting them.",
    found:
      "Experience Cloud site shipped a year before by another consultant. Customers were filing tickets to ask where their tickets were, because the portal's case-status object hadn't been wired to the email automation. The CS team was running two systems in parallel.",
    call:
      "I told them not to rebuild. The portal architecture was fine. The problem was three half-finished automations and a permission set that hadn't been reviewed since launch. I refused to scope a redesign and proposed a four-week fix-and-document engagement instead.",
    outcome:
      "Weekly support volume dropped 38% in the first month after relaunch. Their admin can now extend the case-routing logic without me, which was the actual goal.",
    outcomeMetric: "−38%",
  },
  {
    id: "automation-consolidation",
    number: "№ 03",
    industry: "Professional Services",
    scale: "50 employees",
    year: 2023,
    title: "Replaced four homegrown automation Flows with one Apex service.",
    found:
      "A four-hour nightly batch was syncing project records to an external billing system through a chain of four Process Builder + Flow combinations. The chain failed silently roughly once a week, and nobody noticed until invoices were late.",
    call:
      "Consolidated all four into one queueable Apex class with explicit error handling and retry logic. Migrated the trigger contract while the old chain stayed live, then cut over in a single deploy. Wrote a runbook the admin team could read in fifteen minutes.",
    outcome:
      "Sub-minute scheduled runs replaced the four-hour batch. Silent failures became logged retries. No more invoicing errors three months in.",
    outcomeMetric: "4h → 1min",
  },
  {
    id: "lead-routing",
    number: "№ 04",
    industry: "Insurance",
    scale: "200 reps",
    year: 2023,
    title: "Rebuilt lead routing for an insurance broker after a regional expansion.",
    found:
      "PLACEHOLDER — Erick to fill in. Original org as found.",
    call:
      "PLACEHOLDER — Erick to fill in. The judgment call made.",
    outcome:
      "PLACEHOLDER — Erick to fill in. One quantified result.",
  },
  {
    id: "data-cleanup",
    number: "№ 05",
    industry: "B2B SaaS",
    scale: "150 employees",
    year: 2022,
    title: "Untangled six years of duplicate accounts from an acquisition merge.",
    found:
      "PLACEHOLDER — Erick to fill in. Original org as found.",
    call:
      "PLACEHOLDER — Erick to fill in. The judgment call made.",
    outcome:
      "PLACEHOLDER — Erick to fill in. One quantified result.",
  },
];
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add next-app/src/data/work.ts
git commit -m "feat(data): seed work entries with three-section skeleton"
```

---

## Task 4: Atomic editorial components — Eyebrow, SectionLabel, EditorialButton

**Files:**
- Create: `next-app/src/components/editorial/Eyebrow.tsx`
- Create: `next-app/src/components/editorial/SectionLabel.tsx`
- Create: `next-app/src/components/editorial/EditorialButton.tsx`

**Why:** These are the three smallest building blocks reused across every page. Build them once with strict APIs so pages can't accidentally mix the wrong type at the wrong place.

- [ ] **Step 1: Create `next-app/src/components/editorial/Eyebrow.tsx`**

```tsx
// Hero eyebrow — JetBrains Mono caps, two parts joined by a gold dot separator.
// Used at the top of every page hero (e.g. "ERICK SIXTO · SALESFORCE SPECIALIST").

import React from "react";

export function Eyebrow({
  left,
  right,
  className = "",
}: {
  left: string;
  right?: string;
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[#6B7280] ${className}`}
    >
      {left}
      {right ? (
        <>
          <span className="text-[#CB9135] mx-2">·</span>
          {right}
        </>
      ) : null}
    </div>
  );
}
```

- [ ] **Step 2: Create `next-app/src/components/editorial/SectionLabel.tsx`**

```tsx
// Section label — gold mono caps with a leading em-dash. Used for every
// section header on every page (e.g. "— Operating principles", "— Selected work").

import React from "react";

export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[#CB9135] font-medium ${className}`}
    >
      — {children}
    </span>
  );
}
```

- [ ] **Step 3: Create `next-app/src/components/editorial/EditorialButton.tsx`**

```tsx
// Outlined CTA button. 1px charcoal border. Fills charcoal on hover with oat
// text. 2px radius. The single button style across the entire site.
//
// Renders as <a> when `href` is provided, otherwise as <button>.

import React from "react";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  onClick?: () => void;
};

export function EditorialButton(props: AnchorProps | ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 border border-[#2F2E2E] text-[#2F2E2E] " +
    "px-7 py-3 text-[0.78rem] tracking-[0.04em] rounded-[2px] " +
    "transition-colors duration-200 hover:bg-[#2F2E2E] hover:text-[#F1F1EF]";

  const className = `${baseClasses} ${props.className ?? ""}`;

  if ("href" in props && props.href !== undefined) {
    const externalProps = props.external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a href={props.href} className={className} {...externalProps}>
        {props.children}
      </a>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className={className}>
      {props.children}
    </button>
  );
}
```

- [ ] **Step 4: Verify build and types**

```bash
npm run build
```
Expected: clean build. No "unused export" warnings (these will be consumed in later tasks).

- [ ] **Step 5: Commit**

```bash
git add next-app/src/components/editorial
git commit -m "feat(editorial): add Eyebrow, SectionLabel, EditorialButton primitives"
```

---

## Task 5: Hero block component

**Files:**
- Create: `next-app/src/components/editorial/Hero.tsx`

**Why:** The hero pattern (eyebrow → headline with bolded ending → hairline rule → lead → CTA → optional credibility) is reused on all four pages. Encapsulate it so each page only supplies content.

- [ ] **Step 1: Create `next-app/src/components/editorial/Hero.tsx`**

```tsx
// Editorial hero block. Centered, max-width 760px. Used as the top section
// of every page. The headline is split into a leading phrase + bolded ending
// to enforce the Inter 200 → Inter 700 contrast.

import React from "react";
import { Eyebrow } from "./Eyebrow";
import { EditorialButton } from "./EditorialButton";

export function Hero({
  eyebrowLeft,
  eyebrowRight,
  headlineLead,
  headlineBold,
  lead,
  cta,
  credibility,
}: {
  eyebrowLeft: string;
  eyebrowRight?: string;
  headlineLead: string;
  headlineBold: string;
  lead?: string;
  cta?: { label: string; href: string; external?: boolean };
  credibility?: string[];
}) {
  return (
    <section className="text-center px-6 pt-28 pb-24 max-w-[760px] mx-auto">
      <Eyebrow left={eyebrowLeft} right={eyebrowRight} className="mb-12 inline-block" />

      <h1 className="font-extralight text-[clamp(2.2rem,4.4vw,4.2rem)] leading-[1.04] tracking-[-0.03em] text-[#2F2E2E] mb-10 max-w-[18ch] mx-auto">
        {headlineLead}{" "}
        <strong className="font-bold">{headlineBold}</strong>
      </h1>

      <div className="w-8 h-px bg-[#2F2E2E55] mx-auto mb-10" />

      {lead ? (
        <p className="text-[1.05rem] leading-[1.7] text-[#4B5563] max-w-[56ch] mx-auto mb-11">
          {lead}
        </p>
      ) : null}

      {cta ? (
        <div className="mb-11">
          <EditorialButton href={cta.href} external={cta.external}>
            {cta.label} <span aria-hidden>→</span>
          </EditorialButton>
        </div>
      ) : null}

      {credibility && credibility.length > 0 ? (
        <div className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[#6B7280]">
          {credibility.map((item, i) => (
            <React.Fragment key={item}>
              {item}
              {i < credibility.length - 1 ? (
                <span className="text-[#2F2E2E33] mx-3">·</span>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </section>
  );
}
```

Note: `font-extralight` corresponds to Inter weight 200 in Tailwind. Confirm by inspecting `next/font/google` usage — the `Inter` import in `layout.tsx` already includes weight 200 because `next/font/google` defaults to fetching all weights when none is specified explicitly. This should "just work."

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add next-app/src/components/editorial/Hero.tsx
git commit -m "feat(editorial): add Hero block component"
```

---

## Task 6: EditorialList primitive + StanceList composite

**Files:**
- Create: `next-app/src/components/editorial/EditorialList.tsx`
- Create: `next-app/src/components/editorial/StanceList.tsx`

**Why:** Hairline-divided lists replace cards everywhere. `EditorialList` is the layout primitive (rows separated by 1px rules); `StanceList` composes it with the stance shape. Work peek and About timeline reuse the same primitive.

- [ ] **Step 1: Create `next-app/src/components/editorial/EditorialList.tsx`**

```tsx
// Primitive for hairline-divided lists. Rows are children; the component
// adds top/bottom 1px rules at #2F2E2E1F. Used by stances, work peek,
// /work index, and the about timeline.

import React from "react";

export function EditorialList({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-t border-[#2F2E2E1F] ${className}`}
    >
      {React.Children.map(children, (child) => (
        <div className="border-b border-[#2F2E2E1F]">{child}</div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create `next-app/src/components/editorial/StanceList.tsx`**

```tsx
// Renders the operating principles list. Each row is a two-column grid
// [P.01 number] [bold headline + rationale].

import React from "react";
import { EditorialList } from "./EditorialList";
import type { Stance } from "@/data/stances";

export function StanceList({ stances }: { stances: Stance[] }) {
  return (
    <EditorialList>
      {stances.map((s) => (
        <div
          key={s.id}
          className="grid grid-cols-[80px_1fr] gap-8 py-7 items-baseline"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.16em] text-[#CB9135] font-medium">
            {s.number}
          </span>
          <div>
            <strong className="block text-[1.05rem] font-semibold text-[#2F2E2E] mb-2 tracking-[-0.005em]">
              {s.headline}
            </strong>
            <p className="text-[0.92rem] text-[#4B5563] leading-[1.6] max-w-[60ch]">
              {s.rationale}
            </p>
          </div>
        </div>
      ))}
    </EditorialList>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```
Expected: clean build.

- [ ] **Step 4: Commit**

```bash
git add next-app/src/components/editorial/EditorialList.tsx next-app/src/components/editorial/StanceList.tsx
git commit -m "feat(editorial): add EditorialList primitive + StanceList"
```

---

## Task 7: WorkEntry, WorkPeek, and WorkIndex components

**Files:**
- Create: `next-app/src/components/editorial/WorkEntry.tsx`
- Create: `next-app/src/components/editorial/WorkPeek.tsx`
- Create: `next-app/src/components/editorial/WorkIndex.tsx`

**Why:** These three render the work data in three contexts: full entry on `/work`, three-row peek on the homepage, table-of-contents at the top of `/work`.

- [ ] **Step 1: Create `next-app/src/components/editorial/WorkEntry.tsx`**

```tsx
// Full work entry on /work. Three labeled sub-sections in a [label | content]
// two-column layout. The "call I made" section uses primary text; "found" uses
// muted; "outcome" highlights the optional metric in a larger mono number.

import React from "react";
import type { WorkEntry as WorkEntryType } from "@/data/work";

export function WorkEntry({ entry }: { entry: WorkEntryType }) {
  return (
    <article id={entry.id} className="py-20 border-t border-[#2F2E2E22] first:border-t-0 first:pt-8">
      <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#6B7280] mb-6 flex flex-wrap gap-4">
        <span className="text-[#CB9135] font-medium">{entry.number}</span>
        <span>{entry.industry}</span>
        <span>{entry.scale}</span>
        <span>{entry.year}</span>
      </div>

      <h2 className="font-light text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] tracking-[-0.02em] text-[#2F2E2E] mb-8 max-w-[24ch]">
        {entry.title}
      </h2>

      <Section label="Org as I found it" muted>
        {entry.found}
      </Section>
      <Section label="The call I made">{entry.call}</Section>
      <Section label="Outcome">
        {entry.outcomeMetric ? (
          <span className="font-mono text-[1.05rem] text-[#2F2E2E] font-medium mr-2">
            {entry.outcomeMetric}
          </span>
        ) : null}
        {entry.outcome}
      </Section>
    </article>
  );
}

function Section({
  label,
  children,
  muted = false,
}: {
  label: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-8 py-5 border-t border-[#2F2E2E11] items-baseline">
      <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-[#6B7280] pt-1">
        {label}
      </span>
      <p
        className={`text-[0.95rem] leading-[1.7] ${
          muted ? "text-[#4B5563]" : "text-[#2F2E2E]"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Create `next-app/src/components/editorial/WorkPeek.tsx`**

```tsx
// Homepage peek: three lean rows. Each row links to /work#<id>.
// Includes a "see all N" link below the list.

import React from "react";
import Link from "next/link";
import { EditorialList } from "./EditorialList";
import type { WorkEntry } from "@/data/work";

export function WorkPeek({
  entries,
  totalCount,
}: {
  entries: WorkEntry[];
  totalCount: number;
}) {
  return (
    <>
      <EditorialList>
        {entries.map((entry) => (
          <Link
            key={entry.id}
            href={`/work#${entry.id}`}
            className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-8 py-7 items-baseline group"
          >
            <div>
              <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[#6B7280] mb-2">
                {entry.industry} · {entry.scale} · {entry.year}
              </div>
              <div className="text-[1.1rem] font-medium text-[#2F2E2E] mb-1 tracking-[-0.005em] group-hover:text-[#2F2E2E]">
                {entry.title}
              </div>
              <div className="text-[0.9rem] text-[#4B5563]">{entry.outcome}</div>
            </div>
            <span className="font-mono text-[0.7rem] text-[#2F2E2E] border-b border-[#2F2E2E55] pb-px self-center">
              read →
            </span>
          </Link>
        ))}
      </EditorialList>
      <div className="text-right mt-10">
        <Link
          href="/work"
          className="font-mono text-[0.7rem] text-[#2F2E2E] border-b border-[#CB9135] pb-px"
        >
          see all {totalCount} engagements →
        </Link>
      </div>
    </>
  );
}
```

- [ ] **Step 3: Create `next-app/src/components/editorial/WorkIndex.tsx`**

```tsx
// Table-of-contents at the top of /work. Each row links to an in-page anchor.

import React from "react";
import { EditorialList } from "./EditorialList";
import type { WorkEntry } from "@/data/work";

export function WorkIndex({ entries }: { entries: WorkEntry[] }) {
  return (
    <EditorialList>
      {entries.map((entry) => (
        <a
          key={entry.id}
          href={`#${entry.id}`}
          className="grid grid-cols-[60px_1fr_auto] gap-8 py-5 text-[0.85rem] items-baseline"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.16em] text-[#6B7280]">
            {entry.number}
          </span>
          <span className="text-[#2F2E2E] font-medium tracking-[-0.005em]">
            {entry.title}
          </span>
          <span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[#6B7280]">
            {entry.industry} · {entry.year}
          </span>
        </a>
      ))}
    </EditorialList>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```
Expected: clean build.

- [ ] **Step 5: Commit**

```bash
git add next-app/src/components/editorial
git commit -m "feat(editorial): add WorkEntry, WorkPeek, WorkIndex"
```

---

## Task 8: ClosingCTA block

**Files:**
- Create: `next-app/src/components/editorial/ClosingCTA.tsx`

**Why:** The "Got an org that's working against your team?" closing pattern repeats on every page (with different copy). Encapsulate it.

- [ ] **Step 1: Create `next-app/src/components/editorial/ClosingCTA.tsx`**

```tsx
// Closing block on every page. Centered. Section label, large editorial
// question, brief paragraph, primary CTA + secondary text link.

import React from "react";
import { SectionLabel } from "./SectionLabel";
import { EditorialButton } from "./EditorialButton";

export function ClosingCTA({
  label,
  questionLead,
  questionBold,
  body,
  primary,
  secondary,
}: {
  label: string;
  questionLead: string;
  questionBold: string;
  body: string;
  primary: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="text-center max-w-[720px] mx-auto px-6 py-28 border-t border-[#2F2E2E11]">
      <SectionLabel className="mb-4 inline-block">{label}</SectionLabel>
      <h2 className="font-extralight text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-[#2F2E2E] mb-6 mt-2">
        {questionLead}{" "}
        <strong className="font-bold">{questionBold}</strong>
      </h2>
      <p className="text-[1rem] leading-[1.7] text-[#4B5563] max-w-[50ch] mx-auto mb-10">
        {body}
      </p>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        <EditorialButton href={primary.href} external={primary.external}>
          {primary.label} <span aria-hidden>→</span>
        </EditorialButton>
        {secondary ? (
          <a
            href={secondary.href}
            className="font-mono text-[0.72rem] text-[#2F2E2E] border-b border-[#2F2E2E33] pb-px"
          >
            {secondary.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add next-app/src/components/editorial/ClosingCTA.tsx
git commit -m "feat(editorial): add ClosingCTA block"
```

---

## Task 9: Header and Footer rewrite

**Files:**
- Modify: `next-app/src/components/layout/header.tsx` (full rewrite)
- Modify: `next-app/src/components/layout/footer.tsx` (full rewrite)

**Why:** Existing header has a sticky-on-scroll backdrop-blur, mobile hamburger drawer, and a colored CTA button — none of which fit the editorial direction. Replace with a simple top bar that doesn't change on scroll. Footer is currently a multi-column grid; replace with a single horizontal row.

- [ ] **Step 1: Rewrite `next-app/src/components/layout/header.tsx`**

```tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { meetingLinks } from "@/data/mock";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#2F2E2E11] bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="text-[0.95rem] font-semibold tracking-[-0.01em] text-[#2F2E2E]">
          Erick Sixto
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`text-[0.78rem] transition-colors duration-200 ${
                  isActive ? "text-[#2F2E2E] font-medium" : "text-[#4B5563] hover:text-[#2F2E2E]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={meetingLinks.discovery.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.72rem] border border-[#2F2E2E33] text-[#2F2E2E] px-4 py-2 rounded-[2px] hover:bg-[#2F2E2E] hover:text-[#F1F1EF] transition-colors duration-200"
        >
          Book a call
        </a>
      </div>

      {/* Mobile nav: keep simple — links inline below the bar on small screens */}
      <nav className="md:hidden border-t border-[#2F2E2E11] flex justify-center gap-6 px-6 py-3 text-[0.78rem]">
        {navLinks.map((link) => {
          const isActive =
            link.path === "/"
              ? pathname === "/"
              : pathname.startsWith(link.path);
          return (
            <Link
              key={link.path}
              href={link.path}
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "text-[#2F2E2E] font-medium" : "text-[#4B5563]"}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Rewrite `next-app/src/components/layout/footer.tsx`**

```tsx
import React from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2F2E2E11] mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-wrap justify-between items-center gap-4 text-[0.74rem] text-[#6B7280]">
        <div>
          <strong className="text-[#2F2E2E] font-semibold">Erick Sixto</strong>
          <span className="ml-3 font-mono text-[0.62rem] tracking-[0.16em] uppercase">
            — Salesforce Specialist
          </span>
        </div>

        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className="text-[#4B5563] hover:text-[#2F2E2E] transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        <span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase">
          © {year} · ericksixto.com
        </span>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Update `next-app/src/app/layout.tsx` body padding**

The current `body` has `bg-[#F1F1EF]` which is correct, but the `pt-32` offset on individual pages assumes a fixed header. With the new non-fixed header, that padding becomes wrong. Open `next-app/src/app/layout.tsx` and confirm the body element looks like:

```tsx
<body className="font-sans antialiased bg-[#F1F1EF] text-[#2F2E2E]">
  <Header />
  {children}
  <Footer />
</body>
```

(No changes if it already matches.)

- [ ] **Step 4: Verify build**

```bash
npm run build
```
Expected: clean build. Existing pages will look broken visually (because they reference the old fixed-header offset), but the build itself should pass.

- [ ] **Step 5: Commit**

```bash
git add next-app/src/components/layout/header.tsx next-app/src/components/layout/footer.tsx next-app/src/app/layout.tsx
git commit -m "feat(layout): rewrite header + footer to editorial style"
```

---

## Task 10: Homepage rewrite

**Files:**
- Modify: `next-app/src/app/page.tsx` (full rewrite)

**Why:** The current homepage is the single biggest deviation from the new design. Replace it entirely with the five-block editorial structure.

- [ ] **Step 1: Replace `next-app/src/app/page.tsx` with the editorial homepage**

```tsx
import React from "react";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { StanceList } from "@/components/editorial/StanceList";
import { WorkPeek } from "@/components/editorial/WorkPeek";
import { ClosingCTA } from "@/components/editorial/ClosingCTA";
import { stances } from "@/data/stances";
import { work } from "@/data/work";
import { meetingLinks } from "@/data/mock";

export default function HomePage() {
  const peek = work.slice(0, 3);

  return (
    <main>
      <Hero
        eyebrowLeft="Erick Sixto"
        eyebrowRight="Salesforce Specialist"
        headlineLead="Salesforce that doesn't"
        headlineBold="fight your team."
        lead="I'm Erick Sixto. Seven years fixing Salesforce orgs that got worse every time someone tried to improve them. I take a small number of engagements per year, mostly with SaaS founders and CX teams who need someone to make the call, not run another planning meeting."
        cta={{
          label: "Book a 30-minute call",
          href: meetingLinks.discovery.url,
          external: true,
        }}
        credibility={["120+ projects", "7 years", "Toptal", "Trailblazer Ranger"]}
      />

      <section className="max-w-[880px] mx-auto px-6 py-24 border-t border-[#2F2E2E11]">
        <div className="mb-14 max-w-[56ch]">
          <SectionLabel className="mb-5 inline-block">Operating principles</SectionLabel>
          <h2 className="font-extralight text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E] mb-4">
            Eight things I won't{" "}
            <strong className="font-bold">compromise on.</strong>
          </h2>
          <p className="text-[0.95rem] leading-[1.7] text-[#4B5563]">
            Regardless of the org, the engagement, or how badly the timeline is squeezed. These are the standards that have made my best client relationships last, and the ones I'm willing to walk away from work over.
          </p>
        </div>
        <StanceList stances={stances} />
      </section>

      <section className="max-w-[880px] mx-auto px-6 py-24 border-t border-[#2F2E2E11]">
        <div className="mb-10">
          <SectionLabel className="mb-3 inline-block">Selected work</SectionLabel>
          <h2 className="font-extralight text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E]">
            Recent <strong className="font-bold">engagements.</strong>
          </h2>
        </div>
        <WorkPeek entries={peek} totalCount={work.length} />
      </section>

      <ClosingCTA
        label="Get in touch"
        questionLead="Got an org that's working"
        questionBold="against your team?"
        body="A 30-minute call is free. I'll tell you whether I can help, and if I can't, I'll usually know who can. No pitch, no proposal, no follow-up email three days later."
        primary={{
          label: "Book a 30-minute call",
          href: meetingLinks.discovery.url,
          external: true,
        }}
        secondary={{
          label: "or send a brief email →",
          href: "mailto:sixto@ericksixto.com",
        }}
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: clean build.

- [ ] **Step 3: Run dev server and visit `/`**

```bash
npm run dev -- --port 3001
```
In a browser, open `http://localhost:3001/`. Confirm:
- Hero is centered with no portrait
- Eyebrow has gold dot separator
- Headline has bolded ending "fight your team."
- Stances render as 6 numbered rows with hairline rules
- Work peek shows 3 entries
- Closing CTA appears at the bottom
- Header and footer are minimal

Stop the dev server (Ctrl+C) before continuing.

- [ ] **Step 4: Commit**

```bash
git add next-app/src/app/page.tsx
git commit -m "feat(home): rewrite homepage as editorial-minimalism stances-led page"
```

---

## Task 11: `/work` route

**Files:**
- Create: `next-app/src/app/work/page.tsx`

**Why:** New route. Combines hero + index + entries on a single hash-anchored page.

- [ ] **Step 1: Create `next-app/src/app/work/page.tsx`**

```tsx
import React from "react";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { WorkIndex } from "@/components/editorial/WorkIndex";
import { WorkEntry } from "@/components/editorial/WorkEntry";
import { ClosingCTA } from "@/components/editorial/ClosingCTA";
import { work } from "@/data/work";
import { meetingLinks } from "@/data/mock";

export const metadata = {
  title: "Selected work — Erick Sixto",
  description: "Five to eight Salesforce engagements with the call I made and the outcome.",
};

export default function WorkPage() {
  return (
    <main>
      <Hero
        eyebrowLeft="Selected work"
        headlineLead={`${work.length} engagements,`}
        headlineBold="chosen carefully."
        lead="Most of my Salesforce work doesn't show up here — Fiverr clients, NDA work, projects that ended cleanly. These are the ones I'd send a prospective client to read first. Roughly 150 words each."
      />

      <section className="max-w-[880px] mx-auto px-6 py-12 border-t border-[#2F2E2E11]">
        <SectionLabel className="mb-5 inline-block">Index</SectionLabel>
        <WorkIndex entries={work} />
      </section>

      <section className="max-w-[720px] mx-auto px-6 pt-12 pb-24">
        {work.map((entry) => (
          <WorkEntry key={entry.id} entry={entry} />
        ))}
      </section>

      <ClosingCTA
        label="Want to be entry №09?"
        questionLead="Bring me the engagement"
        questionBold="other consultants ducked."
        body="The work I keep is the work that wouldn't fit a packaged Salesforce template. If your org is one of those, let's talk."
        primary={{
          label: "Book a 30-minute call",
          href: meetingLinks.discovery.url,
          external: true,
        }}
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: clean build with `/work` listed in the route table.

- [ ] **Step 3: Visual check**

```bash
npm run dev -- --port 3001
```
Visit `http://localhost:3001/work`. Confirm:
- Hero renders with correct count
- Index lists all 5 entries
- Entries render with three labeled sub-sections each
- Hash anchors work: clicking an index row scrolls to the matching entry
- Closing CTA appears

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add next-app/src/app/work
git commit -m "feat(work): add /work route with index + entries"
```

---

## Task 12: `/about` rewrite

**Files:**
- Modify: `next-app/src/app/about/page.tsx` (full rewrite)

**Why:** Existing `/about` has decorative gradient layers, animated borders, and a card-grid timeline. Replace with the editorial pattern: hero + portrait block + story + 2-column timeline + closing CTA.

- [ ] **Step 1: Replace `next-app/src/app/about/page.tsx`**

```tsx
import React from "react";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { EditorialList } from "@/components/editorial/EditorialList";
import { ClosingCTA } from "@/components/editorial/ClosingCTA";
import { siteConfig, aboutData, experience, meetingLinks } from "@/data/mock";

export const metadata = {
  title: "About — Erick Sixto",
  description: "An engineer who ended up in Salesforce. Seven years fixing orgs.",
};

export default function AboutPage() {
  return (
    <main>
      <Hero
        eyebrowLeft="About"
        headlineLead="An engineer who ended up"
        headlineBold="in Salesforce."
        lead={aboutData.intro}
      />

      <section className="max-w-[720px] mx-auto px-6 pb-16 border-t border-[#2F2E2E11] pt-12">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.headshot}
            alt="Erick Sixto, Salesforce Specialist"
            loading="lazy"
            className="w-full max-w-[480px] mx-auto block"
          />
          <figcaption className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#6B7280] text-center mt-4">
            Mexico City · 2025
          </figcaption>
        </figure>
      </section>

      <section className="max-w-[600px] mx-auto px-6 py-16 border-t border-[#2F2E2E11]">
        <SectionLabel className="mb-5 inline-block">Story</SectionLabel>
        {aboutData.story.map((paragraph, i) => (
          <p
            key={i}
            className="text-[1rem] leading-[1.8] text-[#2F2E2E] mb-6 last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </section>

      <section className="max-w-[880px] mx-auto px-6 py-16 border-t border-[#2F2E2E11]">
        <div className="mb-10">
          <SectionLabel className="mb-3 inline-block">Career</SectionLabel>
          <h2 className="font-extralight text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E]">
            Where I've <strong className="font-bold">worked.</strong>
          </h2>
        </div>
        <EditorialList>
          {experience.map((role, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-6 items-baseline"
            >
              <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[#6B7280]">
                {role.period}
              </div>
              <div>
                <div className="text-[1rem] font-semibold text-[#2F2E2E] tracking-[-0.005em]">
                  {role.role}
                </div>
                <div className="text-[0.85rem] text-[#4B5563] mb-2">{role.company}</div>
                <p className="text-[0.9rem] leading-[1.6] text-[#4B5563]">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </EditorialList>
      </section>

      <ClosingCTA
        label="Get in touch"
        questionLead="Want to talk about"
        questionBold="working together?"
        body="A 30-minute call is free. I'll tell you whether I can help, and if I can't, I'll usually know who can."
        primary={{
          label: "Book a 30-minute call",
          href: meetingLinks.discovery.url,
          external: true,
        }}
        secondary={{
          label: "or send a brief email →",
          href: "mailto:sixto@ericksixto.com",
        }}
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```
Expected: clean build.

- [ ] **Step 3: Visual check**

```bash
npm run dev -- --port 3001
```
Visit `http://localhost:3001/about`. Confirm:
- Hero centered, no portrait above the fold
- Portrait appears below hero, no rounded corners, no decorative frame
- Story paragraphs render in a narrow column
- Career timeline is a 2-column hairline list
- Closing CTA appears

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add next-app/src/app/about/page.tsx
git commit -m "feat(about): rewrite /about as editorial story page"
```

---

## Task 13: `/products` and product detail restyle

**Files:**
- Modify: `next-app/src/app/products/page.tsx` (full rewrite)
- Modify: `next-app/src/app/products/[slug]/page.tsx` (selective edits)
- Modify: `next-app/src/app/products/[slug]/buy/page.tsx` (selective edits)
- Modify: `next-app/src/app/products/[slug]/install/page.tsx` (selective edits)

**Why:** The products section is functionally correct but visually doesn't match the new editorial direction. Restyle the index page completely; lighter touch on the detail / buy / install flows (just enough to feel consistent).

- [ ] **Step 1: Rewrite `next-app/src/app/products/page.tsx`**

```tsx
import Link from "next/link";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { EditorialList } from "@/components/editorial/EditorialList";
import { EditorialButton } from "@/components/editorial/EditorialButton";
import { ClosingCTA } from "@/components/editorial/ClosingCTA";
import { meetingLinks } from "@/data/mock";
import { getAllProducts } from "@/content/products";

export const metadata = {
  title: "Products — Erick Sixto",
  description: "Salesforce-native tools that explain your org and ship the fix.",
};

export default function ProductsIndexPage() {
  const products = getAllProducts().filter(
    (p) => p.status === "live" || p.status === "coming-soon"
  );

  return (
    <main>
      <Hero
        eyebrowLeft="Products"
        headlineLead="Tools I've"
        headlineBold="shipped."
        lead="Salesforce-native products that solve a specific problem I got tired of fixing by hand. Each one runs in your org, not on my server."
      />

      <section className="max-w-[880px] mx-auto px-6 py-12 border-t border-[#2F2E2E11]">
        <SectionLabel className="mb-6 inline-block">Available</SectionLabel>
        {products.length === 0 ? (
          <p className="text-[#4B5563]">No products available right now.</p>
        ) : (
          <EditorialList>
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 sm:gap-12 py-8 items-baseline group"
              >
                <div>
                  <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#6B7280] mb-2">
                    {product.status === "live" ? "Available now" : "Coming soon"}
                  </div>
                  <h2 className="text-[1.4rem] font-semibold text-[#2F2E2E] mb-2 tracking-[-0.01em]">
                    {product.name}
                  </h2>
                  <p className="text-[0.95rem] leading-[1.6] text-[#4B5563] max-w-[60ch]">
                    {product.tagline}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-3">
                  <div>
                    <span className="text-[1.4rem] font-semibold text-[#2F2E2E] tabular-nums tracking-[-0.005em]">
                      ${product.price}
                    </span>
                    <span className="text-[0.72rem] text-[#6B7280] ml-1.5 font-mono uppercase tracking-[0.16em]">
                      {product.currency}
                    </span>
                  </div>
                  <span className="font-mono text-[0.7rem] text-[#2F2E2E] border-b border-[#2F2E2E55] pb-px">
                    learn more →
                  </span>
                </div>
              </Link>
            ))}
          </EditorialList>
        )}
      </section>

      <ClosingCTA
        label="Custom build?"
        questionLead="Need something"
        questionBold="that doesn't exist yet?"
        body="If a packaged tool would solve your problem but no-one's built it, we can scope a custom one in our discovery call."
        primary={{
          label: "Book a 30-minute call",
          href: meetingLinks.discovery.url,
          external: true,
        }}
      />
    </main>
  );
}
```

- [ ] **Step 2: Update `next-app/src/app/products/[slug]/page.tsx` for visual consistency**

The detail page currently uses card patterns and rounded-2xl frames. Edit it so:
- Replace the outermost `bg-[#F1F1EF]` hero block's wrapping classes from `rounded-2xl` to `rounded-none` if any are present
- Replace any remaining `text-[#CB9135]` on non-section-label sub-labels with `text-[#4B5563]`
- Replace `marker:text-[#CB9135]` already updated; verify no other gold leakage

Open the file. Locate any remaining `rounded-2xl`, replace with `rounded-none`. Locate `bg-gradient-to-*`, remove (use plain background). Verify no `h-1 bg-[#CB9135]` stripes remain.

If after this scan you find specific sections that read like cards-in-cards, this is the time to flatten them. Otherwise leave the structure alone — heavy redesign of the product detail page is out of scope.

- [ ] **Step 3: Same light pass on `[slug]/buy/page.tsx` and `[slug]/install/page.tsx`**

For each file:
- Replace `rounded-2xl` with `rounded-none` on cards
- Verify no remaining gold leakage on non-section-labels
- Verify no top-stripe accents

Functional structure (Stripe links, install URL display) stays exactly as it is.

- [ ] **Step 4: Verify build**

```bash
npm run build
```
Expected: clean build, all product routes still listed.

- [ ] **Step 5: Visual check**

```bash
npm run dev -- --port 3001
```
Visit `http://localhost:3001/products` and click into the Access Analyzer detail page. Confirm:
- Index page has hero + product list (one row per product)
- Detail page has consistent oat background and no card-shadow / rounded-2xl frames
- Buy and install pages still function (don't actually buy anything)

Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add next-app/src/app/products
git commit -m "feat(products): restyle products index + light cleanup on slug pages"
```

---

## Task 14: Delete removed routes and add static redirects

**Files:**
- Delete: `next-app/src/app/services/`
- Delete: `next-app/src/app/projects/`
- Delete: `next-app/src/app/contact/`
- Create: `next-app/public/services/index.html`
- Create: `next-app/public/projects/index.html`
- Create: `next-app/public/contact/index.html`

**Why:** The new IA removes these three routes, but visitors and search engines may have links to them. A static HTML file at `public/<route>/index.html` with a `<meta http-equiv="refresh">` redirect handles this on the GitHub Pages static export with no runtime cost.

- [ ] **Step 1: Delete the three removed app routes**

```bash
rm -rf next-app/src/app/services next-app/src/app/projects next-app/src/app/contact
```

- [ ] **Step 2: Create the redirect HTML files**

Create `next-app/public/services/index.html` with this content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Erick Sixto — services moved</title>
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0;url=/">
<link rel="canonical" href="https://ericksixto.com/">
<style>body{font-family:system-ui,sans-serif;text-align:center;padding:4rem 1rem;color:#2F2E2E;background:#F1F1EF}a{color:#2F2E2E}</style>
</head>
<body>
<p>This page moved. Redirecting to <a href="/">the home page</a>.</p>
</body>
</html>
```

Create `next-app/public/projects/index.html` identical except for the redirect target:
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Erick Sixto — projects moved</title>
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0;url=/work">
<link rel="canonical" href="https://ericksixto.com/work">
<style>body{font-family:system-ui,sans-serif;text-align:center;padding:4rem 1rem;color:#2F2E2E;background:#F1F1EF}a{color:#2F2E2E}</style>
</head>
<body>
<p>This page moved. Redirecting to <a href="/work">the work index</a>.</p>
</body>
</html>
```

Create `next-app/public/contact/index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Erick Sixto — contact moved</title>
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0;url=/">
<link rel="canonical" href="https://ericksixto.com/">
<style>body{font-family:system-ui,sans-serif;text-align:center;padding:4rem 1rem;color:#2F2E2E;background:#F1F1EF}a{color:#2F2E2E}</style>
</head>
<body>
<p>Contact moved to the home page. Book a call <a href="/">there</a>, or email <a href="mailto:sixto@ericksixto.com">sixto@ericksixto.com</a>.</p>
</body>
</html>
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```
Expected: build succeeds. The route table no longer lists `/services`, `/projects`, or `/contact`. The `out/` directory (Next.js static export, if `output: "export"` is configured) should include `services/index.html`, `projects/index.html`, `contact/index.html` from the public folder copy.

- [ ] **Step 4: Verify redirect HTML files made it through**

```bash
ls next-app/.next/server/app 2>/dev/null
ls next-app/public/services next-app/public/projects next-app/public/contact
```
Expected: the public/ directories each contain `index.html`.

- [ ] **Step 5: Commit**

```bash
git add next-app/src/app next-app/public/services next-app/public/projects next-app/public/contact
git commit -m "feat(routing): drop /services /projects /contact, add static meta-refresh redirects"
```

---

## Task 15: Final verification + cleanup pass

**Files:**
- (Read-only) Walkthrough of all four pages

**Why:** Catch anything that fell through the cracks: orphaned imports, leftover gold leakage, broken links, motion that shouldn't be there.

- [ ] **Step 1: Run the full type-check + build**

```bash
npm run lint
npm run build
```
Expected: both clean.

- [ ] **Step 2: Search for orphaned imports of removed components**

The `Marquee`, `CountUp`, and `AnimatedText` from `@/components/animations` were used heavily by the old homepage. They may now be unused. Search:

```bash
grep -rn "Marquee\|CountUp\|AnimatedText" next-app/src/app
```
If no results: the imports in `@/components/animations.tsx` are now unused. Open that file and confirm whether to delete unused exports. If the file becomes empty of used exports, leave it alone (deletion is out of scope here).

```bash
grep -rn "from \"@/components/ui/card\"" next-app/src/app
```
If no results: the `Card` component from shadcn is unused. Leave it; future product pages may use it.

- [ ] **Step 3: Search for any remaining brand-violation patterns**

```bash
grep -rn "h-1 bg-\[#CB9135\]" next-app/src/app
grep -rn "rounded-2xl" next-app/src/app
grep -rn "bg-gradient" next-app/src/app
grep -rn "shadow-2xl\|shadow-lg\|shadow-md" next-app/src/app
grep -rn "animate={{ rotate" next-app/src/app
```
Expected: zero hits on `h-1 bg-[#CB9135]`. The other patterns may have legitimate uses on product detail pages (kept light); audit each hit and confirm it's intentional. If a `rounded-2xl` or `bg-gradient` slipped through on a redesigned page, fix it.

- [ ] **Step 4: Run the dev server and walk through every page**

```bash
npm run dev -- --port 3001
```

Walk through:
- `/` — confirm 5 blocks (hero, stances, work peek, closing, footer), no portrait in hero
- `/work` — hero + index + 5 entries + closing
- `/work#cx-portal` — direct hash anchor scrolls to entry №02
- `/about` — hero + portrait + story + career + closing
- `/products` — hero + product list + closing
- `/products/access-analyzer` — detail page, no top-stripe, oat background
- `/services` — meta-refresh to `/`
- `/projects` — meta-refresh to `/work`
- `/contact` — meta-refresh to `/`

Click "Book a call" in the header; confirm it opens TidyCal in a new tab. Resize the browser to mobile width; confirm header collapses to inline nav and pages remain readable.

Stop the dev server.

- [ ] **Step 5: Final commit if any cleanup edits were made**

If Step 3 found and fixed any leftover patterns:
```bash
git add -A next-app/src
git commit -m "chore(redesign): final cleanup pass"
```
If nothing changed in Step 3, skip the commit.

- [ ] **Step 6: Summarize and stop**

The redesign branch is complete. Recommended next moves (not part of this plan):
- Erick replaces the placeholder content in `next-app/src/data/stances.ts` and `next-app/src/data/work.ts`
- Erick reviews the hero copy on each page — placeholder phrasings like "An engineer who ended up in Salesforce." can be edited in `next-app/src/data/mock.ts > aboutData`
- Open a PR from `redesign/notebook` to `main` (after `fix/brand-compliance` is merged or rebased away)

---

## Self-review notes (writing-plans)

- **Spec coverage:** every spec section maps to a task. The Hero block, the stance list, the work three-section skeleton, the four-page IA, the visual system colors and components, the redirects for removed routes, and the content-gathering reminders are all covered. The "no portrait in hero" rule is enforced by Hero having no portrait prop. Products [slug] / buy / install pages are explicitly given a "light pass" per the spec's "kept functional structure; visual cleanup."
- **Placeholder scan:** No "TBD" or "TODO" steps. The data files (stances.ts, work.ts) include explicit `PLACEHOLDER — Erick to fill in` markers in their content; this is intentional content scaffolding, not a plan placeholder.
- **Type consistency:** `Stance.id`, `Stance.number`, `Stance.headline`, `Stance.rationale` consistent across stances.ts and StanceList. `WorkEntry` properties consistent across work.ts, WorkEntry, WorkPeek, WorkIndex. `EditorialButton` `href + external + onClick` props consistent across consumers.
- **Build verification:** every task ends with `npm run build` and a commit. Visible-UI tasks add a dev-server walkthrough before commit.
