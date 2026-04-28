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
    id: "trackanything-lwc-migration",
    number: "№ 04",
    industry: "Asset Tracking SaaS",
    scale: "Field service teams",
    year: 2024,
    title:
      "Migrated TrackAnything's core asset-tracking app from Visualforce to Lightning Web Components.",
    found:
      "A five-year-old Visualforce page handled 80% of daily user interactions but had grown to 3,400 lines. Mobile users were timing out on the initial load. The support queue had a recurring \"page is broken on iPad\" ticket category. The team had been quoted six figures for a full rebuild and had shelved the project twice.",
    call:
      "I refused the full rebuild. The data model was sound — only the UI was choking. Migrated section-by-section to LWC over eight weeks, keeping the Visualforce shell live until each piece was proven in production. Pushed back on three feature requests during the migration that would have re-bloated the new components.",
    outcome:
      "First contentful paint dropped from 6.2 seconds to under one. The \"page is broken on iPad\" ticket category went to zero. Total project cost was roughly a quarter of the original quote, and the codebase shipped with a component library the in-house dev could extend without me.",
    outcomeMetric: "6.2s → 0.9s",
  },
  {
    id: "5th-axis-rep-quotas",
    number: "№ 05",
    industry: "Precision Manufacturing",
    scale: "40+ external reps",
    year: 2023,
    title:
      "Tracked external sales rep quotas without paying for Salesforce licenses they'd never use.",
    found:
      "Forty-plus independent manufacturer reps carried 5th Axis alongside competing lines. None had Salesforce access — the licensing math doesn't work for users who'd log in twice a quarter to check a number. Quota tracking lived in a shared spreadsheet, commission disputes were a quarterly event, and sales leadership couldn't see territory performance until month-end close.",
    call:
      "I refused to scope licenses for users who'd never use them. Built a custom quota object in Salesforce, exposed read-only territory dashboards through an Experience Cloud guest portal (no license cost), and wrote an Apex service that pulled rep performance from existing order data nightly. Reps got an email digest every Monday with a personal portal link — no login required.",
    outcome:
      "Commission disputes stopped almost overnight: one source of truth, visible to everyone. The \"where are we against quota?\" question went from a three-day spreadsheet pull to a Monday-morning glance. Annual licensing savings covered the build cost in seven months.",
    outcomeMetric: "$0 license cost",
  },
];
