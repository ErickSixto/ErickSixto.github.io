// Selected work index. Each entry follows a strict skeleton:
//  - found: the org as Erick found it (1-2 sentences, plain language)
//  - call: the judgment call Erick made (2-3 sentences, the authority signal)
//  - outcome: one quantified result, one sentence (1-2 sentences)
//
// Five named-customer engagements. The first three are featured on the home
// page (work.slice(0, 3)), so order matters — strongest customer/metric first.
//
// Length target: ~110-130 words total per entry. Cut padding ruthlessly —
// brand rule: "Cut 30%. Length is not credibility."

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
      "A 5-year-old Visualforce page handled 80% of daily interactions and had grown to 3,400 unmaintainable lines. The codebase had grown too tangled to safely touch — every change carried real risk.",
    call:
      "I refused the rebuild. The data model was sound — only the UI was choking. Decomposed the page into discrete LWC components and migrated them section by section over 8 weeks, keeping the Visualforce shell live until each piece was proven in production.",
    outcome:
      "First contentful paint dropped from 6.2 seconds to under 1. The codebase shipped with a component library the in-house dev can extend independently. Total cost: a quarter of the original quote.",
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
      "Zurich's North American member portal had grown incrementally for years. 3 audience segments shared confusing flows, key tasks took 7+ clicks, and the component library was duplicated once per segment with no shared primitives.",
    call:
      "I refused to ship segment-specific portals on top of duplicated code. Built a single reusable LWC library with audience-aware configuration, then collapsed the 3 flows into one streamlined journey.",
    outcome:
      "Members complete common tasks in 2 clicks instead of 7. The library is now Zurich's foundation for the next portal — every component documented, tested, and segment-aware.",
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
      "40+ independent reps carried 5th Axis alongside competing lines. None had Salesforce access — the licensing math doesn't work for users who'd log in twice a quarter. Quotas lived in a spreadsheet and commission disputes were quarterly.",
    call:
      "I refused to scope licenses for users who'd never use them. Built a custom quota object, exposed dashboards through an Experience Cloud guest portal (no license cost), and wrote an Apex service that pulled rep performance from order data nightly. Reps got a Monday digest with a personal link — no login required.",
    outcome:
      "Commission disputes stopped overnight. \"Where are we against quota?\" went from a 3-day spreadsheet pull to a Monday glance. License savings covered the build cost in 7 months.",
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
      "LandGeeks was managing properties, owners, and documents across disconnected tools. The team re-entered data constantly, and no single place showed a property's full picture — owner history, files, location, related contacts.",
    call:
      "Built a console-style Lightning App: custom property and owner objects, a dynamic map component on the Google Maps API, a file management panel, and a filterable property list with multi-criteria search. Architecture stays component-first so each panel is independently extensible.",
    outcome:
      "Daily workflow collapsed from 4 tools into 1 console. Owners are linked to their records, files attach in context, and the map answers location questions that used to require a separate lookup.",
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
      "Viritopia sells living walls — buyers spend months researching before they commit. Their team was creating Opportunities for every qualified inquiry, bloating the pipeline. A prospect can be fully qualified but still 2 quarters from a real decision.",
    call:
      "Introduced a custom Pre-Opportunity object upstream of the standard pipeline. Qualified prospects enter research-phase tracking with their own stage logic, then graduate to Opportunities only when there's a genuine business decision in motion. Standard object stays untouched, so existing reports keep working.",
    outcome:
      "Pipeline stopped reflecting wishful thinking. Conversion from Pre-Opportunity became a meaningful signal, and the founder stopped tearing the forecast apart every quarter.",
    outcomeMetric: "Pipeline clarity",
  },
];
