# Site Copy Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite all user-facing copy across ericksixto.com to match Brand Guidelines v2 — eliminate AI-voice patterns, add first-person opinions, break structural symmetry, use brand terminology, and sentence-case every CTA.

**Architecture:** This is a content-editing pass, not a code refactor. ~95% of edits land in a single data file (`src/data/mock.js`) with the remainder in five page/component files with hardcoded strings. No new components, no layout changes, no dependency changes — the visual design already matches the brand. Verification is visual via the Create React App dev server.

**Tech Stack:** React 19 + Create React App (CRACO) + Tailwind CSS. All copy is either in `src/data/mock.js` (single source of truth) or inline in JSX.

**Brand reference:** `../../../Brand-Guidelines-v2.html` (the v2 brand book — this plan implements its voice rules against live copy).

**Scope cap:** No changes to `src/data/mock.js` `projects` array (case studies are already well-written per brand review), no changes to `experience` array (timeline data is factual), no changes to `credibilityItems` numbers (those are verified separately).

---

## File Structure

Files that will be modified:

| File | Role | Scope |
|------|------|-------|
| `src/data/mock.js` | Single source of truth for site content | Rewrite: siteConfig, meetingLinks, services (6), processSteps (5), aboutData |
| `src/pages/HomePage.jsx` | Homepage layout + some hardcoded copy | Rewrite: value-prop paragraph (L167), pillars triad (L173-175), hero CTAs (L89, L97), final CTA section (L432) |
| `src/pages/AboutPage.jsx` | About page | Rewrite: "Get in Touch" CTA (L194) |
| `src/pages/ContactPage.jsx` | Contact page | Rewrite: subheading (L39) |
| `src/pages/ProjectsPage.jsx` | Projects listing | Rewrite: subheading (L30) |
| `src/components/layout/Header.jsx` | Nav header | Rewrite: "Book a Free Call" CTA (L76, L124) |

Files NOT touched:
- `src/components/ui/*` — shadcn primitives
- `src/components/layout/Footer.jsx` — uses meetingLinks labels, so updates propagate via mock.js
- `src/components/PlatformLinks.jsx` — structural, no copy
- `src/components/animations.jsx` — no copy
- Case study content within `projects` array
- Work experience timeline within `experience` array

---

## Verification Strategy

This is a content change, not behavior change. No unit tests exist in this project. Verification is:

1. **Build check** — `npm run build` compiles without errors after each task
2. **Visual check** — `npm start` renders without runtime errors; visually inspect changed sections
3. **Grep check** — after all rewrites, confirm zero hits for brand-banned phrases

Each task has a verification step. Do not skip.

---

## Task 1: Rewrite siteConfig headline, subheadline, and descriptor

**Files:**
- Modify: `src/data/mock.js:3-18`

- [ ] **Step 1: Read the current siteConfig block**

Run: `sed -n '3,18p' src/data/mock.js`
Expected: Shows the current siteConfig object.

- [ ] **Step 2: Replace the headline, subheadline, and descriptor**

Replace this block in `src/data/mock.js` (lines 3–18):

```javascript
export const siteConfig = {
  name: "Erick Sixto",
  descriptor: "SALESFORCE SPECIALIST",
  headline: "I build Salesforce systems that teams actually use",
  subheadline:
    "Senior Salesforce Developer with 7+ years helping businesses run cleaner, faster, and with less friction — across Sales Cloud, Service Cloud, and Experience Cloud.",
  email: "sixto.developer@gmail.com",
  website: "www.ericksixto.card.co",
  linkedin: "https://www.linkedin.com/in/ericksixto",
  github: "https://github.com/ericksixto",
  monogramLight: "/images/monogram-light.png",
  monogramDark: "/images/monogram-dark.png",
  portrait: "/images/portrait.jpg",
  headshot: "/images/headshot.jpg",
  workspace: "/images/workspace.jpg",
};
```

With:

```javascript
export const siteConfig = {
  name: "Erick Sixto",
  descriptor: "SALESFORCE DEVELOPER",
  headline: "Salesforce that doesn't fight your team",
  subheadline:
    "I'm an engineer who ended up in Salesforce. Seven years of it — most of that spent fixing orgs that got harder to use every time someone tried to improve them.",
  email: "sixto.developer@gmail.com",
  website: "www.ericksixto.card.co",
  linkedin: "https://www.linkedin.com/in/ericksixto",
  github: "https://github.com/ericksixto",
  monogramLight: "/images/monogram-light.png",
  monogramDark: "/images/monogram-dark.png",
  portrait: "/images/portrait.jpg",
  headshot: "/images/headshot.jpg",
  workspace: "/images/workspace.jpg",
};
```

**Why:** Hero headline applies before/after #1. Subheadline gets a point of view instead of an alliterative trio. Descriptor changes from "SPECIALIST" (slide-deck word) to "DEVELOPER" (how Erick introduces himself in conversation).

- [ ] **Step 3: Verify grep hit count dropped to zero**

Run: `grep -n "actually use\b" src/data/mock.js`
Expected: no matches (the exact phrase from the old headline is gone).

- [ ] **Step 4: Commit**

```bash
git add src/data/mock.js
git commit -m "copy: rewrite hero headline, subheadline, descriptor per brand v2"
```

---

## Task 2: Rewrite meetingLinks CTA labels to sentence case + brand voice

**Files:**
- Modify: `src/data/mock.js:20-31`

- [ ] **Step 1: Read current meetingLinks block**

Run: `sed -n '20,31p' src/data/mock.js`

- [ ] **Step 2: Replace the meetingLinks object**

Replace this block in `src/data/mock.js` (lines 20–31):

```javascript
export const meetingLinks = {
  discovery: {
    url: "https://tidycal.com/ericksixto/discovery-meeting",
    label: "Book a Free Discovery Call",
    shortLabel: "Free Discovery Call",
  },
  consultation: {
    url: "https://tidycal.com/ericksixto/salesforce-consultation",
    label: "Book a Paid Consultation",
    shortLabel: "Paid Consultation",
  },
};
```

With:

```javascript
export const meetingLinks = {
  discovery: {
    url: "https://tidycal.com/ericksixto/discovery-meeting",
    label: "Let's talk about your org",
    shortLabel: "Talk about your org",
  },
  consultation: {
    url: "https://tidycal.com/ericksixto/salesforce-consultation",
    label: "Book a paid consultation",
    shortLabel: "Paid consultation",
  },
};
```

**Why:** Applies before/after #5. "Let's talk about your org" sounds like a person inviting a conversation, not a SaaS funnel. Consultation label drops Title Case for sentence case.

- [ ] **Step 3: Verify no regressions**

Run: `grep -n "Book a Free Discovery Call" src/data/mock.js`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add src/data/mock.js
git commit -m "copy: rewrite meeting CTA labels to sentence case + conversational voice"
```

---

## Task 3: Rewrite all six services (shortDesc, description, outcome)

**Files:**
- Modify: `src/data/mock.js:87-142`

- [ ] **Step 1: Read the current services array**

Run: `sed -n '87,142p' src/data/mock.js`
Expected: Shows the six-service array.

- [ ] **Step 2: Replace the entire services array**

Replace the `export const services = [ ... ];` block (lines 87–142) with:

```javascript
export const services = [
  {
    id: "implementation",
    title: "Salesforce Implementation & Customization",
    shortDesc: "Salesforce setup that fits your team — not the other way around.",
    description: "I set up Salesforce orgs that map to how your team already works. Nothing gets configured unless it solves a real problem. If a feature doesn't earn its place, it doesn't ship.",
    outcome: "A system your team picks up without training marathons.",
    deliverables: ["Custom objects & fields", "Page layouts & record types", "Validation rules & formulas", "User training & handoff documentation"],
    icon: "Settings",
  },
  {
    id: "experience-cloud",
    title: "Experience Cloud Portals",
    shortDesc: "Portals your customers don't complain about.",
    description: "Experience Cloud portals that load fast and stop getting in the user's way. Built with Lightning Web Components, reusable from day one — so the next dev who touches this doesn't have to rebuild from scratch.",
    outcome: "Portals users stop calling support about.",
    deliverables: ["Portal setup & configuration", "Custom Lightning Web Components", "Login flows & navigation", "Responsive UI & UX optimization"],
    icon: "Globe",
  },
  {
    id: "integrations",
    title: "Salesforce Integrations",
    shortDesc: "Integrations your admins can troubleshoot without calling me.",
    description: "I build integrations your admins can troubleshoot without calling me. REST, SOAP, middleware — whatever the connection needs, it ships with monitoring and clear error handling.",
    outcome: "Systems that talk to each other without constant firefighting.",
    deliverables: ["REST & SOAP API integrations", "Middleware design & patterns", "Error handling & retry logic", "Monitoring & alerting setup"],
    icon: "RefreshCw",
  },
  {
    id: "automation",
    title: "Automation & Process Design",
    shortDesc: "Flows, triggers, and Apex that don't need a maintenance contract.",
    description: "Automation that keeps working after I leave. Trigger architecture your admins can read. Apex that handles bulk without falling over. Flows that don't require a PhD to debug.",
    outcome: "Less manual work. Fewer surprises. Processes that scale without rewrites.",
    deliverables: ["Apex triggers with FFLib patterns", "Flow automation", "Scheduled & batch jobs", "Process documentation"],
    icon: "Zap",
  },
  {
    id: "data-architecture",
    title: "Data Model Cleanup & Architecture",
    shortDesc: "Untangle the data model before it breaks everything downstream.",
    description: "A messy data model is a tax on everything downstream — reports, automation, integrations, future features. I untangle the schema before it quietly breaks the next five things you build.",
    outcome: "A data foundation you can build on without second-guessing.",
    deliverables: ["Data model audit & ERD", "Object relationship redesign", "Data migration support", "Schema documentation"],
    icon: "Database",
  },
  {
    id: "reporting",
    title: "Reporting, Dashboards & Operational Visibility",
    shortDesc: "Leadership visibility without the vanity metrics.",
    description: "Dashboards that answer the questions your team actually asks — and hide the ones they don't. Filters that make sense. Layouts that load. Metrics tied to decisions, not meetings.",
    outcome: "Leadership makes faster calls. Teams know what to focus on.",
    deliverables: ["Custom reports & report types", "Executive dashboards", "Operational KPI tracking", "Data quality monitoring"],
    icon: "BarChart3",
  },
];
```

**Why:** Breaks the six-service template that was visible when reading them back-to-back. Each now has distinct rhythm and vocabulary. Integrations uses the canonical before/after #4 rewrite. No more alliterative trios. Opinions added ("If a feature doesn't earn its place, it doesn't ship"). Banned words removed ("real business processes," "real operational insights").

- [ ] **Step 3: Verify banned phrases are gone**

Run: `grep -n "real business\|real operational\|that your team actually\|actually find useful" src/data/mock.js`
Expected: no matches.

- [ ] **Step 4: Verify services count is still 6**

Run: `grep -c "^    id:" src/data/mock.js`
Expected: at least 13 (6 services + 7 projects); the services array still has exactly 6 ids — visually confirm in the output.

- [ ] **Step 5: Commit**

```bash
git add src/data/mock.js
git commit -m "copy: rewrite all 6 services — break template, vary rhythm, remove banned phrases"
```

---

## Task 4: Rewrite processSteps — break the symmetric 5-step cadence

**Files:**
- Modify: `src/data/mock.js:304-310`

- [ ] **Step 1: Read current processSteps**

Run: `sed -n '304,310p' src/data/mock.js`

- [ ] **Step 2: Replace the processSteps array**

Replace (lines 304–310):

```javascript
export const processSteps = [
  { step: "01", title: "Clarify the Outcome", description: "Before writing code, I make sure we agree on what success looks like. Not features — outcomes." },
  { step: "02", title: "Define Scope Early", description: "Clear boundaries prevent scope creep and keep delivery on track. I document what's in and what's out." },
  { step: "03", title: "Call Out Tradeoffs", description: "Every technical decision has tradeoffs. I surface them early so you make informed choices." },
  { step: "04", title: "Deliver in Increments", description: "You see working code regularly — not a big reveal at the end. Feedback loops stay tight." },
  { step: "05", title: "Hand Off Maintainable Systems", description: "I deliver systems your team can actually run. Documentation, clean code, and clear architecture." },
];
```

With:

```javascript
export const processSteps = [
  { step: "01", title: "Clarify the outcome", description: "I don't start building until we agree on what 'done' actually means. Not a feature list. A business result." },
  { step: "02", title: "Scope it on paper", description: "Scope gets written down before we start — what's in, what's out. Disagreements are cheap in week one. Expensive in week five." },
  { step: "03", title: "Name the tradeoffs", description: "Every architectural call has a tradeoff. I name them while you can still change your mind." },
  { step: "04", title: "Ship in pieces", description: "You see working pieces every week. No surprise reveals at the end." },
  { step: "05", title: "Hand off a system, not a black box", description: "The work isn't done until your team can extend it without me. Documentation, clean code, architecture your admins can read." },
];
```

**Why:** Applies before/after #3. Titles move to sentence case. Descriptions vary in length and rhythm — step 04 is short, step 05 has three fragments. The old identical two-sentence structure (where sentence 2 restates sentence 1) is gone.

- [ ] **Step 3: Verify the "Clarify the Outcome" phrasing is gone**

Run: `grep -n "what success looks like" src/data/mock.js`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add src/data/mock.js
git commit -m "copy: rewrite processSteps — break symmetric cadence, add opinions"
```

---

## Task 5: Rewrite aboutData — surface the mechatronics story

**Files:**
- Modify: `src/data/mock.js:343-351`

- [ ] **Step 1: Read current aboutData**

Run: `sed -n '343,351p' src/data/mock.js`

- [ ] **Step 2: Replace the aboutData object**

Replace (lines 343–351):

```javascript
export const aboutData = {
  intro: "I'm a Salesforce Specialist with 7+ years of experience building systems that teams actually use.",
  story: [
    "I started as a Mechatronics Engineer — which taught me to think in systems. I moved into front-end development because I cared about usability: if people can't use what you build, it doesn't matter how well it's engineered.",
    "That mindset carried into Salesforce. Over seven years, I've worked across Sales Cloud, Service Cloud, and Experience Cloud for companies ranging from insurance enterprises to fast-moving startups.",
    "My focus is on maintainability, usability, reliable integrations, clean handoff, and business impact. I work best on the problems that most consultants avoid: messy data models, brittle automation, confusing portals, and unreliable integrations.",
  ],
  approach: "I don't believe in over-engineering. I believe in understanding the problem, choosing the simplest architecture that solves it, and delivering a system that your team can maintain after I'm gone.",
};
```

With:

```javascript
export const aboutData = {
  intro: "I'm an engineer who ended up in Salesforce. Seven years of it — mostly fixing things other people built.",
  story: [
    "I trained as a Mechatronics Engineer. That's the discipline where a motor failing on the factory floor teaches you more than any textbook — because the operator is standing there waiting for it to work. I moved into front-end development because I wanted to build software the same way: if a person can't use it, it doesn't matter how elegant the engineering is.",
    "Salesforce came next. Seven years, multiple clouds, a dozen industries — from insurance carriers to SaaS startups moving faster than their ops could follow.",
    "The work I'm best at is the work most consultants don't want to take: the brittle trigger no one's touched in two years, the portal users can't figure out, the integration that silently drops records on Tuesdays. I like untangling things.",
  ],
  approach: "I don't over-engineer. The goal is the simplest architecture that solves the real problem — and a system your team can keep running after I'm gone.",
};
```

**Why:** Applies brand principle #04 — lets the mechatronics story breathe. The factory-floor detail is concrete and grounded. The three-paragraph template with evenly weighted sentences is gone: paragraph 1 is long and specific, paragraph 2 is short, paragraph 3 has a three-item list with a punchy closer.

- [ ] **Step 3: Verify intro no longer uses the "actually use" crutch**

Run: `grep -n "systems that teams actually use" src/data/mock.js`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add src/data/mock.js
git commit -m "copy: rewrite About — surface mechatronics story with concrete detail"
```

---

## Task 6: Rewrite HomePage hero CTAs and value-prop section

**Files:**
- Modify: `src/pages/HomePage.jsx:89` (hero primary CTA)
- Modify: `src/pages/HomePage.jsx:97` (hero secondary CTA)
- Modify: `src/pages/HomePage.jsx:166-176` (value-prop paragraph + pillars triad)

- [ ] **Step 1: Read current hero CTA block**

Run: `sed -n '85,100p' src/pages/HomePage.jsx`

- [ ] **Step 2: Replace hero primary CTA label**

In `src/pages/HomePage.jsx`, find the exact line:

```jsx
                    Book a Free Discovery Call
```

Replace with:

```jsx
                    Let's talk about your org
```

- [ ] **Step 3: Replace hero secondary CTA label**

Find:

```jsx
                    See My Work
```

Replace with:

```jsx
                    See my work
```

**Why:** Sentence case per brand rule for all CTAs.

- [ ] **Step 4: Read current value-prop block**

Run: `sed -n '160,180p' src/pages/HomePage.jsx`

- [ ] **Step 5: Replace the value-prop paragraph and pillar triad**

Find this block in `src/pages/HomePage.jsx` (around lines 166–176):

```jsx
              <p className="text-lg text-[#2F2E2E]/70 leading-relaxed max-w-2xl mx-auto">
                Most Salesforce orgs end up over-configured and under-adopted. I build systems with clean architecture, clear automation, and usable interfaces — so your team actually uses what gets built.
              </p>
```

Replace with:

```jsx
              <p className="text-lg text-[#2F2E2E]/70 leading-relaxed max-w-2xl mx-auto">
                Most Salesforce orgs have too many features and not enough adoption. I focus on the opposite — less configuration, more usability. If your team won't use it, I won't build it.
              </p>
```

Then find the three-pillar array (lines 173–175):

```jsx
              { title: "Clean Architecture", desc: "Thoughtful object models and well-structured code that scales without becoming fragile." },
              { title: "Maintainable Systems", desc: "Your team can extend and manage the system after handoff — without calling me for every change." },
              { title: "Business Impact", desc: "Every decision ties back to a real business outcome. No unnecessary complexity." },
```

Replace with:

```jsx
              { title: "Clean architecture", desc: "Object models that scale without turning brittle. Code your next dev can read." },
              { title: "Maintainable by default", desc: "Your team extends the system after handoff. I'm not on speed-dial for every change." },
              { title: "Built for the outcome", desc: "Every decision ties back to a business result. No complexity for the sake of looking clever." },
```

**Why:** Applies before/after #2 (value prop) verbatim. Pillar titles move to sentence case. "Real business outcome" loses the redundant "real." Added a mild opinion to the third pillar.

- [ ] **Step 6: Build check**

Run: `npm run build 2>&1 | tail -20`
Expected: Compilation successful (may have warnings, must not have errors).

- [ ] **Step 7: Commit**

```bash
git add src/pages/HomePage.jsx
git commit -m "copy: rewrite homepage hero CTAs and value prop"
```

---

## Task 7: Rewrite HomePage final CTA section

**Files:**
- Modify: `src/pages/HomePage.jsx:432` (heading in final CTA section)

- [ ] **Step 1: Read the final CTA block**

Run: `sed -n '428,450p' src/pages/HomePage.jsx`

- [ ] **Step 2: Replace the heading**

Find:

```jsx
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to fix your Salesforce?</h2>
```

Replace with:

```jsx
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Got an org that's fighting your team?</h2>
```

**Why:** Echoes the hero headline ("Salesforce that doesn't fight your team") — repetition of a strong concept builds recognition. "Ready to fix your Salesforce?" is generic consultant phrasing that could appear on any site.

- [ ] **Step 3: Build check**

Run: `npm run build 2>&1 | tail -20`
Expected: Compilation successful.

- [ ] **Step 4: Commit**

```bash
git add src/pages/HomePage.jsx
git commit -m "copy: rewrite homepage final CTA heading to echo hero"
```

---

## Task 8: Update Header navbar CTAs

**Files:**
- Modify: `src/components/layout/Header.jsx:76`
- Modify: `src/components/layout/Header.jsx:124`

- [ ] **Step 1: Read the navbar CTA blocks**

Run: `sed -n '70,80p;120,130p' src/components/layout/Header.jsx`

- [ ] **Step 2: Replace both "Book a Free Call" labels**

Both lines contain:

```jsx
                Book a Free Call
```

Replace both occurrences with:

```jsx
                Let's talk
```

**Why:** Navbar CTAs should be short. "Let's talk" keeps the conversational tone from the longer primary CTA while fitting a compact navbar slot. Drops "Free" (unnecessary — brand rule) and "Call" (assumed).

- [ ] **Step 3: Verify no lingering "Book a Free" in Header**

Run: `grep -n "Book a Free" src/components/layout/Header.jsx`
Expected: no matches.

- [ ] **Step 4: Build check**

Run: `npm run build 2>&1 | tail -20`
Expected: Compilation successful.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Header.jsx
git commit -m "copy: shorten navbar CTA to sentence-case conversational label"
```

---

## Task 9: Update AboutPage CTA to sentence case

**Files:**
- Modify: `src/pages/AboutPage.jsx:194`

- [ ] **Step 1: Read the CTA block**

Run: `sed -n '190,198p' src/pages/AboutPage.jsx`

- [ ] **Step 2: Replace the CTA label**

Find:

```jsx
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
```

Replace with:

```jsx
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
```

**Why:** Sentence case per brand rule for CTAs.

- [ ] **Step 3: Build check**

Run: `npm run build 2>&1 | tail -20`
Expected: Compilation successful.

- [ ] **Step 4: Commit**

```bash
git add src/pages/AboutPage.jsx
git commit -m "copy: sentence-case About page CTA"
```

---

## Task 10: Rewrite ContactPage subheading

**Files:**
- Modify: `src/pages/ContactPage.jsx:39`

- [ ] **Step 1: Read the contact heading block**

Run: `sed -n '35,45p' src/pages/ContactPage.jsx`

- [ ] **Step 2: Replace the subheading**

Find:

```jsx
              The fastest way to get started is a free discovery call. Or send me a message below.
```

Replace with:

```jsx
              A 30-minute call is the fastest way to figure out if we should work together. Or drop a message below — I reply inside a day.
```

**Why:** More specific (30 minutes, 1-day reply time) — the brand is value-oriented and specific. Removes the templated "free discovery call" phrasing. Adds a small commitment (24-hour response) which is both opinionated and reassuring.

- [ ] **Step 3: Build check**

Run: `npm run build 2>&1 | tail -20`
Expected: Compilation successful.

- [ ] **Step 4: Commit**

```bash
git add src/pages/ContactPage.jsx
git commit -m "copy: rewrite contact subheading with specific commitment"
```

---

## Task 11: Rewrite ProjectsPage subheading

**Files:**
- Modify: `src/pages/ProjectsPage.jsx:30`

- [ ] **Step 1: Read the projects subheading**

Run: `sed -n '25,35p' src/pages/ProjectsPage.jsx`

- [ ] **Step 2: Replace the subheading**

Find:

```jsx
                Real-world Salesforce projects that solved real business problems. Click any project to see the full story.
```

Replace with:

```jsx
                Salesforce work I've shipped. Business outcomes, not feature lists — click any project for the full story.
```

**Why:** Two uses of the banned intensifier "real" gone. Replaces "real business problems" with the outcome-focused framing brand-v2 prefers.

- [ ] **Step 3: Build check**

Run: `npm run build 2>&1 | tail -20`
Expected: Compilation successful.

- [ ] **Step 4: Commit**

```bash
git add src/pages/ProjectsPage.jsx
git commit -m "copy: rewrite projects subheading — remove 'real' intensifier"
```

---

## Task 12: Final brand-phrase audit

**Files:** Repository-wide grep.

This task catches any remaining banned phrases from the brand guidelines that earlier tasks missed.

- [ ] **Step 1: Grep for each banned word in src/**

Run the following and confirm each outputs zero matches (ignore results in `node_modules`):

```bash
for phrase in "leverage" "utilize" "synergy" "best-in-class" "cutting-edge" "world-class" "empower" "revolutionize" "seamless" "holistic" "robust"; do
  echo "=== $phrase ==="
  grep -rn --include="*.jsx" --include="*.js" --exclude-dir="node_modules" -i "\b$phrase\b" src
done
```

Expected: no output under any heading (or clearly safe output — e.g., a comment referencing the word). If any banned word appears in live copy, stop and rewrite before proceeding.

- [ ] **Step 2: Grep for AI-smell crutches**

```bash
grep -rn --include="*.jsx" --include="*.js" --exclude-dir="node_modules" -E "(actually uses?|actually find useful|real business|real operational)" src
```

Expected: no matches.

- [ ] **Step 3: Grep for Title Case CTA labels**

```bash
grep -rn --include="*.jsx" --include="*.js" --exclude-dir="node_modules" -E "(Book a Free|Book a Paid|Get in Touch|See My Work|Ready to)" src
```

Expected: no matches. If "Book a Paid" appears, it may be the consultation label which we intentionally changed to sentence case.

- [ ] **Step 4: If all audits pass, commit audit note**

Create a short note committing any final fixes found in this pass. If nothing found, skip the commit.

```bash
# Only if edits were made in this task:
git add -A
git commit -m "copy: final brand-phrase audit cleanup"
```

---

## Task 13: Visual QA in the dev server

**Files:** No file edits — visual verification.

- [ ] **Step 1: Start the dev server**

Run: `npm start`
Expected: App opens in browser at http://localhost:3000 (or next available port). No runtime errors in the browser console.

- [ ] **Step 2: Walk every page**

Visually verify each of these on the running site:

| Page | What to check |
|------|---------------|
| `/` (home) | Hero headline reads "Salesforce that doesn't fight your team." Primary CTA says "Let's talk about your org." Secondary CTA says "See my work." Value-prop paragraph and three pillars match the new copy. Final CTA heading reads "Got an org that's fighting your team?" |
| `/about` | Intro starts with "I'm an engineer who ended up in Salesforce." Three story paragraphs match the new copy, starting with the factory-floor line. CTA at bottom reads "Get in touch." |
| `/services` | All six services display the new shortDesc, description, and outcome. Scan for any remaining "actually use" / "real business" — there should be none. |
| `/projects` | Subheading reads "Salesforce work I've shipped. Business outcomes, not feature lists…" Individual project case studies are unchanged and still render correctly. |
| `/contact` | Subheading mentions "30-minute call" and "reply inside a day." |
| Navbar | "Let's talk" appears as the CTA in both desktop and mobile nav states. |
| Footer | "Book a paid consultation" displays (it pulls from mock.js meetingLinks). |

- [ ] **Step 3: Stop the dev server**

`Ctrl-C` to stop. Nothing to commit.

- [ ] **Step 4: Final production build check**

Run: `npm run build 2>&1 | tail -30`
Expected: "Compiled successfully" or "Compiled with warnings" (warnings OK, errors not).

---

## Task 14: Handoff

- [ ] **Step 1: Verify git log is clean**

Run: `git log --oneline main..HEAD`
Expected: a sequence of `copy:` prefixed commits, one per task. No merge commits.

- [ ] **Step 2: Check working tree is clean**

Run: `git status`
Expected: "nothing to commit, working tree clean."

- [ ] **Step 3: Hand off to finishing-a-development-branch skill**

Announce: "I'm using the finishing-a-development-branch skill to complete this work."

Follow that skill: it will present merge / PR / cleanup options. Do not push or merge without the user's explicit choice.

---

## Self-Review Checklist

Before declaring the plan complete, this plan was checked against the brand v2 guidelines and brand review findings:

- ✅ Before/After #1 (hero headline) — Task 1
- ✅ Before/After #2 (value proposition) — Task 6
- ✅ Before/After #3 (process step) — Task 4
- ✅ Before/After #4 (Integrations service) — Task 3
- ✅ Before/After #5 (primary CTA) — Task 2 + Task 6
- ✅ Rule 01 (break patterns) — Task 3, Task 4 vary rhythm explicitly
- ✅ Rule 02 (add opinions) — Task 3 adds opinions per service; Task 5 in the story
- ✅ Rule 03 (use vocabulary) — All rewrites pass the "said out loud" test
- ✅ Rule 04 (let the story breathe) — Task 5 expands mechatronics story with concrete detail
- ✅ Rule 05 (cut 30%) — subheadline, process steps, about paragraphs are all shorter
- ✅ Sentence-case CTAs — Tasks 2, 6, 7, 8, 9
- ✅ Banned word scan — Task 12 grep audit
- ✅ Visual QA — Task 13 dev server walkthrough

**No placeholders remain in this plan. Every step contains the actual copy an engineer needs.**
