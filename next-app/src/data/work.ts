// Selected work index. Each entry follows a strict skeleton:
//  - found: the org as Erick found it (1-2 sentences, plain language)
//  - call: the judgment call Erick made (2-3 sentences, the authority signal)
//  - outcome: one quantified result, one sentence (1-2 sentences)
//
// Five named-customer engagements. The first three are featured on the home
// page (work.slice(0, 3)), so order matters — strongest customer/metric first.

export type WorkEntry = {
  id: string; // hash anchor, kebab-case
  number: string; // "№ 01"
  client: string; // real customer name, displayed prominently
  industry: string;
  scale: string; // e.g. "90 employees", "30 reps"
  year: number;
  title: string; // sentence-style, action-focused, no client name
  found: string; // org as I found it
  call: string; // the call I made
  outcome: string; // outcome
  outcomeMetric?: string; // optional pull-out number, e.g. "−38%"
};

export const work: WorkEntry[] = [
  {
    id: "trackanything-lwc-migration",
    number: "№ 01",
    client: "TrackAnything",
    industry: "Asset Tracking SaaS",
    scale: "Field service teams",
    year: 2024,
    title:
      "Migrated a 3,400-line Visualforce page to Lightning Web Components without rebuilding it.",
    found:
      "A 5-year-old Visualforce page handled 80% of daily user interactions and had grown to 3,400 lines. Business logic, UI markup, and controller code were woven together in a way that made every new feature risky. The team had been quoted six figures for a full rebuild and shelved it twice.",
    call:
      "I refused the full rebuild. The data model and business logic were sound — only the presentation layer had become unmaintainable. I decomposed the page into discrete LWC components with clean interfaces, migrated them section by section over 8 weeks, and kept the Visualforce shell live until each component was proven in production. Pushed back on 3 feature requests mid-migration that would have re-entangled what we'd just untangled.",
    outcome:
      "First contentful paint dropped from 6.2 seconds to under 1. The codebase shipped with a component library the in-house developer can extend independently. Total cost came in at roughly a quarter of the original rebuild quote.",
    outcomeMetric: "6.2s → 0.9s",
  },
  {
    id: "zurich-member-portal",
    number: "№ 02",
    client: "Zurich Insurance Group",
    industry: "Insurance",
    scale: "Three member segments",
    year: 2022,
    title: "Rebuilt the member portal so 7 clicks became 2.",
    found:
      "Zurich's North American member portal had been built incrementally over years. 3 distinct audience segments shared one set of confusing flows, and key tasks like updating a plan or finding policy details took 7 or more clicks across inconsistent screens. The component library was duplicated 3 times — once per segment — with no shared primitives.",
    call:
      "I refused to ship segment-specific portals on top of duplicated code. Designed a single reusable LWC component library with audience-aware configuration, then collapsed the 3 flows into one streamlined journey with optional surfaces per segment. Worked directly with the design team to keep the UX honest and the markup lean.",
    outcome:
      "Members complete the most common tasks in 2 clicks instead of 7. The component library is now the foundation Zurich extends from — every component documented, tested, and segment-aware out of the box.",
    outcomeMetric: "7 → 2 clicks",
  },
  {
    id: "5th-axis-rep-quotas",
    number: "№ 03",
    client: "5th Axis",
    industry: "Precision Manufacturing",
    scale: "40+ external reps",
    year: 2023,
    title:
      "Tracked external rep quotas without paying for Salesforce licenses they'd never use.",
    found:
      "40+ independent manufacturer reps carried 5th Axis alongside competing lines. None had Salesforce access — the licensing math doesn't work for users who'd log in twice a quarter to check a number. Quota tracking lived in a shared spreadsheet, commission disputes were a quarterly event, and sales leadership couldn't see territory performance until month-end close.",
    call:
      "I refused to scope licenses for users who'd never use them. Built a custom quota object in Salesforce, exposed read-only territory dashboards through an Experience Cloud guest portal (no license cost), and wrote an Apex service that pulled rep performance from existing order data nightly. Reps got an email digest every Monday with a personal portal link — no login required.",
    outcome:
      "Commission disputes stopped almost overnight: one source of truth, visible to everyone. The \"where are we against quota?\" question went from a 3-day spreadsheet pull to a Monday-morning glance. Annual licensing savings covered the build cost in 7 months.",
    outcomeMetric: "$0 license cost",
  },
  {
    id: "landgeeks-property-workspace",
    number: "№ 04",
    client: "LandGeeks",
    industry: "Property Management",
    scale: "Operations team",
    year: 2024,
    title:
      "Built a console workspace that replaced 4 disconnected tools.",
    found:
      "LandGeeks was managing properties, owners, and documents across disconnected tools. Their team was re-entering data between systems, and there was no single place to see a property's full picture: owner history, uploaded files, location on a map, and related contacts — all in one view. Reporting was fragmented and manual.",
    call:
      "Built a console-style Lightning App around a new data model: custom property and owner objects with rich relationship architecture, a dynamic map component wired to the Google Maps API, a document management panel with file preview, and a filterable property list with multi-criteria search. Kept the architecture component-first so each panel is independently extensible. Wrote Apex services to back the map rendering and filter logic so the components stayed lean.",
    outcome:
      "The team's daily workflow collapsed from 4 tools into 1 console. Property owners are linked to their records, files are attached and visible in context, and the map answers location questions that used to require a separate lookup entirely.",
    outcomeMetric: "4 tools → 1",
  },
  {
    id: "viritopia-pre-opportunity",
    number: "№ 05",
    client: "Viritopia",
    industry: "Sustainable Architecture",
    scale: "Sales team",
    year: 2023,
    title:
      "Designed a Pre-Opportunity object for deals still in the research phase.",
    found:
      "Viritopia sells living walls — a product where buyers spend months in research before they commit. Their team was creating Opportunities for every qualified inquiry, which bloated the pipeline and made forecasting unreliable. The standard stage progression didn't match how these deals actually move: a prospect can be fully qualified but still 2 quarters away from a real decision.",
    call:
      "Introduced a custom Pre-Opportunity object that sits upstream of the standard pipeline. Qualified prospects enter research-phase tracking here — with their own stage logic, activity history, and conversion criteria — and graduate to Opportunities only when there's a genuine business decision in motion. Kept the standard Opportunity object untouched so existing reports, forecasting, and integrations continued working without changes.",
    outcome:
      "Pipeline stopped reflecting wishful thinking. The sales team has a clear view of what's a real deal versus what's still being evaluated. Conversion from Pre-Opportunity became a meaningful signal — and the founder stopped pulling the forecast apart every quarter to explain the noise.",
    outcomeMetric: "Pipeline clarity",
  },
];
