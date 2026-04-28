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
