// Portfolio data for Erick Sixto — Salesforce Specialist

export const siteConfig = {
  name: "Erick Sixto",
  descriptor: "SALESFORCE SPECIALIST",
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
  workspace: "https://images.pexels.com/photos/34803974/pexels-photo-34803974.jpeg",
};

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

export const credibilityItems = [
  { value: "7+", label: "Years Experience" },
  { value: "120+", label: "Five-Star Reviews" },
  { value: "200+", label: "Projects Delivered" },
  { value: "Top 3%", label: "Toptal Verified" },
];

export const socialProof = [
  {
    platform: "Fiverr Pro",
    description: "Vetted Pro & Top Seller on the world's largest freelance marketplace.",
    metrics: [
      { value: "120+", label: "5-Star Reviews" },
      { value: "200+", label: "Completed Orders" },
    ],
    badges: ["Verified Pro", "Top Seller"],
    url: "https://www.fiverr.com/ericksixto",
    color: "#1DBF73",
    letter: "F",
  },
  {
    platform: "Toptal",
    description: "Accepted into the top 3% of freelance talent worldwide.",
    metrics: [{ value: "Top 3%", label: "of Global Talent" }],
    badges: ["Vetted Developer", "Elite Network"],
    url: "https://www.toptal.com/developers/resume/erick-sixto",
    color: "#204ECF",
    letter: "T",
  },
  {
    platform: "Salesforce Trailblazer",
    description: "Two-time certified specialist recognized in the Salesforce ecosystem.",
    metrics: [{ value: "2x", label: "Certified Specialist" }],
    badges: ["Ranger", "Certified"],
    url: "https://www.salesforce.com/trailblazer/sixtohdez",
    color: "#00A1E0",
    letter: "S",
  },
];

export const platformLinks = [
  { name: "Fiverr Pro", url: "https://www.fiverr.com/ericksixto", color: "#1DBF73", letter: "F" },
  { name: "Toptal", url: "https://www.toptal.com/developers/resume/erick-sixto", color: "#204ECF", letter: "T" },
  { name: "Trailblazer", url: "https://www.salesforce.com/trailblazer/sixtohdez", color: "#00A1E0", letter: "S" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ericksixto", color: "#0A66C2", letter: "in" },
  { name: "GitHub", url: "https://github.com/ericksixto", color: "#171515", letter: "G" },
];

export const marqueeItems = [
  "Apex", "Lightning Web Components", "Sales Cloud", "Service Cloud",
  "Experience Cloud", "Integrations", "Automation", "Data Architecture",
  "FFLib", "REST API", "Flows", "Dashboards", "Cloud Coach", "nCino",
];

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

export const projects = [
  {
    id: "launch-readiness",
    title: "Launch Readiness Checklist",
    client: "Included Health / Nimble Gravity",
    category: "Sales Cloud",
    industry: "Healthcare",
    goal: "A real-time tracking system that ensures product launches happen on time and with fewer issues across multiple teams.",
    businessImpact: "Operations teams gained full visibility into launch blockers before they became launch failures.",
    problem: "Teams lacked visibility into launch readiness across workstreams, causing delayed launches and missed defects.",
    solution: "Built a custom readiness tracking system with automated status updates and real-time dashboards in Sales Cloud.",
    impact: [
      { metric: "30%", label: "Fewer launch defects" },
      { metric: "4 days", label: "Faster time-to-launch" },
    ],
    keyCapabilities: ["Automated cross-team status tracking", "Real-time readiness dashboards", "Proactive issue alerts before launch"],
    techStack: ["Sales Cloud", "Cloud Coach", "Apex", "Automation"],
    deliverables: "Custom object model, automated checklist tracking, readiness dashboards, real-time status alerts.",
  },
  {
    id: "athena-pricing",
    title: "Pricing Integration Engine",
    client: "Included Health / Nimble Gravity",
    category: "Integration",
    industry: "Healthcare",
    goal: "An automated pricing engine that connects insurance plan data between Athena and Salesforce — eliminating manual lookups.",
    businessImpact: "Pricing teams stopped manually checking rates. Estimates became instant and error-free.",
    problem: "Pricing data was fragmented across two systems, causing manual errors and inaccurate insurance estimates.",
    solution: "Mapped package data into Charge Tables and insurance plan records, enabling automated pricing directly in Salesforce.",
    impact: [
      { metric: "Zero", label: "Pricing complaints" },
      { metric: "100%", label: "Automated estimates" },
    ],
    keyCapabilities: ["Cross-system data synchronization", "Automated pricing lookups", "Error-free estimate generation"],
    techStack: ["Salesforce", "Athena", "REST API", "Apex"],
    deliverables: "Pricing data mapping, Charge Table configuration, automated estimate generation, error handling.",
  },
  {
    id: "zurich-portal",
    title: "Member Self-Service Portal",
    client: "Zurich Insurance Group",
    category: "Experience Cloud",
    industry: "Insurance",
    goal: "A modern portal where insurance members can view plans, manage accounts, and get support — without calling an agent.",
    businessImpact: "Members completed key tasks in 2 clicks instead of 7. Support tickets decreased significantly.",
    problem: "Members faced a confusing, click-heavy portal that was inconsistent and lacked modern UX.",
    solution: "Built a reusable component library with streamlined flows optimized for three distinct audience segments.",
    impact: [
      { metric: "7\u21922", label: "Clicks for key tasks" },
      { metric: "3", label: "Audience segments" },
    ],
    keyCapabilities: ["Reusable component library", "Streamlined login & navigation", "Multi-segment personalization"],
    techStack: ["Experience Cloud", "LWC", "Apex"],
    deliverables: "Reusable LWC component library, login flow configuration, responsive plan views.",
  },
  {
    id: "axos-portal",
    title: "Broker Operations Portal",
    client: "Unosquare",
    category: "Experience Cloud",
    industry: "Financial Services",
    goal: "A broker-facing portal with automated workflows and built-in operational visibility — so teams spend less time firefighting.",
    businessImpact: "Teams reclaimed 6+ hours per week previously spent on manual triage and debugging.",
    problem: "The portal lacked reusable components, had poor logging, and required excessive manual overhead.",
    solution: "Delivered reusable LWCs, a production logging framework, Jira intake automation, and clean trigger architecture.",
    impact: [
      { metric: "4 hrs/wk", label: "Saved on triage" },
      { metric: "2 hrs/wk", label: "Saved on debugging" },
    ],
    keyCapabilities: ["Production logging framework", "Automated Jira intake", "Maintainable trigger architecture"],
    techStack: ["Experience Cloud", "LWC", "FFLib", "nCino"],
    deliverables: "Reusable LWC library, production logging framework, Jira automation, trigger architecture.",
  },
  {
    id: "glowback-integration",
    title: "CRM \u2194 Project Management Sync",
    client: "Glowback LED",
    category: "Integration",
    industry: "Manufacturing",
    goal: "Automated two-way sync between Salesforce and Wrike — so project updates flow seamlessly between sales and production.",
    businessImpact: "Teams stopped manually duplicating work items. Status updates became instant and reliable.",
    problem: "Work items were manually tracked across two systems, leading to missed updates and inconsistent statuses.",
    solution: "Built bidirectional synchronization with status mapping, attachment handling, and circular update safeguards.",
    impact: [
      { metric: "Full", label: "Bidirectional sync" },
      { metric: "Zero", label: "Circular update issues" },
    ],
    keyCapabilities: ["Bidirectional data synchronization", "Smart status mapping", "Admin-configurable settings"],
    techStack: ["Salesforce", "Wrike API", "Apex", "Batch Processing"],
    deliverables: "Automated sync engine, status mapping, attachment handler, admin-maintainable settings.",
  },
  {
    id: "kart-aide",
    title: "Automated Subscription Intake",
    client: "Kart Aide",
    category: "Automation",
    industry: "SaaS",
    goal: "An email-driven system that automatically processes subscription requests — creating accounts, leads, and approvals without manual work.",
    businessImpact: "The intake process went from fully manual to fully automated with complete audit trails.",
    problem: "Every subscription email required manual account creation, lead assignment, and approval workflows.",
    solution: "Built an email-to-Apex handler that auto-creates records and triggers approval processes with full logging.",
    impact: [
      { metric: "100%", label: "Automated intake" },
      { metric: "Full", label: "Audit trail" },
    ],
    keyCapabilities: ["Email-driven processing", "Auto account & lead creation", "Built-in approval workflows"],
    techStack: ["Email Services", "Apex", "Approval Processes", "Dashboards"],
    deliverables: "Email-to-Apex handler, automated account/lead creation, approval workflows, monitoring dashboards.",
  },
  {
    id: "track-anything",
    title: "Legacy UI Modernization",
    client: "Track Anything",
    category: "Modernization",
    industry: "Operations",
    goal: "Migrated a slow, legacy change-tracking tool to modern Lightning Web Components — making audits faster and the UI actually usable.",
    businessImpact: "Page load dropped by 70% and the number of clicks to reach actionable data went from 8 down to 3.",
    problem: "A Visualforce tracking tool was slow, hard to maintain, and provided poor visibility into changes.",
    solution: "Rebuilt the tool in LWC with improved UI, operational clarity, and faster auditing capabilities.",
    impact: [
      { metric: "70%", label: "Faster load time" },
      { metric: "8→3", label: "Clicks to value" },
    ],
    keyCapabilities: ["Full UI redesign", "Improved field tracking", "Better operational visibility"],
    techStack: ["LWC", "Apex", "UI Design"],
    deliverables: "LWC-based tracking tool, improved audit interface, field change visualization.",
  },
];

export const experience = [
  {
    company: "Nimble Gravity",
    role: "Senior Salesforce Developer",
    period: "Feb 2023 \u2014 Present",
    description: "Leading Salesforce development for enterprise clients. Building custom data models, integrations, and Experience Cloud solutions across complex multi-cloud environments.",
    highlights: ["Enterprise implementations", "Complex integrations", "Team leadership"],
  },
  {
    company: "Zurich Insurance Group",
    role: "Salesforce Developer",
    period: "Jan 2022 \u2014 Feb 2023",
    description: "Built core Experience Cloud portal for Zurich North America. Delivered reusable LWC components and member-facing experiences supporting multiple audience segments.",
    highlights: ["Experience Cloud portals", "Reusable LWC library", "Multi-segment UX"],
  },
  {
    company: "Unosquare",
    role: "Salesforce Consultant",
    period: "Jul 2021 \u2014 Jan 2022",
    description: "Consulted on Salesforce implementations for financial services clients. Built broker portals, logging frameworks, and automated intake processes.",
    highlights: ["Financial services", "nCino extensions", "FFLib architecture"],
  },
  {
    company: "The Ksquare Group",
    role: "Junior Software Engineer \u2192 Salesforce Developer",
    period: "Jul 2019 \u2014 Jul 2021",
    description: "Started as a software engineer and transitioned into Salesforce development. Built foundational skills in Apex, Lightning, and Salesforce administration.",
    highlights: ["Career foundation", "Apex & Lightning", "Full-stack development"],
  },
];

export const processSteps = [
  { step: "01", title: "Clarify the outcome", description: "I don't start building until we agree on what 'done' actually means. Not a feature list. A business result." },
  { step: "02", title: "Scope it on paper", description: "Scope gets written down before we start — what's in, what's out. Disagreements are cheap in week one. Expensive in week five." },
  { step: "03", title: "Name the tradeoffs", description: "Every architectural call has a tradeoff. I name them while you can still change your mind." },
  { step: "04", title: "Ship in pieces", description: "You see working pieces every week. No surprise reveals at the end." },
  { step: "05", title: "Hand off a system, not a black box", description: "The work isn't done until your team can extend it without me. Documentation, clean code, architecture your admins can read." },
];

export const testimonials = [
  {
    id: "grant-cohn",
    author: "grant_cohn",
    country: "United States",
    rating: 5,
    text: "Sixto was a pleasure to work with. He spent the time to meet with me and discuss exactly what I wanted and informed me on ways I could adjust my scope of work to operate more efficiently in my Salesforce org. I will be using Sixto again in the near future for any other projects related to Salesforce.",
    service: "CRM Management",
    platform: "Fiverr",
  },
  {
    id: "xcoreff1",
    author: "xcoreff1",
    country: "United States",
    rating: 5,
    isRepeatClient: true,
    text: "Erick, as always, goes above and beyond what we ask. We've used him for multiple projects over several years and his expertise is unmatched. He'll present multiple ways something can be done on the back-end and then will offer additional ways to increase visibility and presentation on the front-end. Highly recommend!",
    service: "CRM Management",
    platform: "Fiverr",
  },
  {
    id: "dfigroup",
    author: "dfigroup",
    country: "United States",
    rating: 4.7,
    text: "Sixto H exceeded our expectations with detailed documentation and outstanding attention to detail. His proactive communication and politeness made the cooperation seamless. We're excited to continue our Salesforce development with him, as our mutual trust, competence, and communication truly stand out.",
    service: "Help / Consultation",
    platform: "Fiverr",
  },
];

export const aboutData = {
  intro: "I'm an engineer who ended up in Salesforce. Seven years of it — mostly fixing things other people built.",
  story: [
    "I trained as a Mechatronics Engineer. That's the discipline where a motor failing on the factory floor teaches you more than any textbook — because the operator is standing there waiting for it to work. I moved into front-end development because I wanted to build software the same way: if a person can't use it, it doesn't matter how elegant the engineering is.",
    "Salesforce came next. Seven years, multiple clouds, a dozen industries — from insurance carriers to SaaS startups moving faster than their ops could follow.",
    "The work I'm best at is the work most consultants don't want to take: the brittle trigger no one's touched in two years, the portal users can't figure out, the integration that silently drops records on Tuesdays. I like untangling things.",
  ],
  approach: "I don't over-engineer. The goal is the simplest architecture that solves the real problem — and a system your team can keep running after I'm gone.",
};
