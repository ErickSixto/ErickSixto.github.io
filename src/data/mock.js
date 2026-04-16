// Portfolio data for Erick Sixto — Salesforce Specialist

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
    shortDesc: "End-to-end Salesforce setup tailored to how your team actually works.",
    description: "I configure and customize Salesforce orgs that map to real business processes. No over-engineering. No unnecessary complexity. Just clean, usable systems.",
    outcome: "A Salesforce org your team adopts without resistance.",
    deliverables: ["Custom objects & fields", "Page layouts & record types", "Validation rules & formulas", "User training & handoff documentation"],
    icon: "Settings",
  },
  {
    id: "experience-cloud",
    title: "Experience Cloud Portals",
    shortDesc: "Customer-facing portals that are fast, clear, and built with reusable components.",
    description: "I build Experience Cloud portals that reduce friction for your end users. Login flows, plan views, member dashboards — all built with Lightning Web Components.",
    outcome: "Portals your customers actually find useful.",
    deliverables: ["Portal setup & configuration", "Custom Lightning Web Components", "Login flows & navigation", "Responsive UI & UX optimization"],
    icon: "Globe",
  },
  {
    id: "integrations",
    title: "Salesforce Integrations",
    shortDesc: "Connect Salesforce with your existing tools — reliably and maintainably.",
    description: "Whether it's syncing with external systems or building custom API connections, I design integrations that don't break and that your admins can understand.",
    outcome: "Systems that talk to each other without constant firefighting.",
    deliverables: ["REST & SOAP API integrations", "Middleware design & patterns", "Error handling & retry logic", "Monitoring & alerting setup"],
    icon: "RefreshCw",
  },
  {
    id: "automation",
    title: "Automation & Process Design",
    shortDesc: "Flows, triggers, and Apex logic that reduce manual work and stay maintainable.",
    description: "I build automation that works long-term. Clear trigger architecture, bulkified Apex, well-documented Flows, and process logic your team can extend.",
    outcome: "Less manual work. Fewer errors. Processes that scale.",
    deliverables: ["Apex triggers with FFLib patterns", "Flow automation", "Scheduled & batch jobs", "Process documentation"],
    icon: "Zap",
  },
  {
    id: "data-architecture",
    title: "Data Model Cleanup & Architecture",
    shortDesc: "Restructure messy data models into clean, scalable foundations.",
    description: "Bad data models create problems that compound. I audit schemas, clean up relationships, and design architectures that support reporting, automation, and growth.",
    outcome: "A data foundation you can build on with confidence.",
    deliverables: ["Data model audit & ERD", "Object relationship redesign", "Data migration support", "Schema documentation"],
    icon: "Database",
  },
  {
    id: "reporting",
    title: "Reporting, Dashboards & Operational Visibility",
    shortDesc: "Give leadership the visibility they need to make decisions.",
    description: "I design reports and dashboards that surface real operational insights — not vanity metrics. Clean filters, clear layouts, and data that helps teams prioritize.",
    outcome: "Leadership makes better decisions. Teams know what to focus on.",
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
  { step: "01", title: "Clarify the Outcome", description: "Before writing code, I make sure we agree on what success looks like. Not features — outcomes." },
  { step: "02", title: "Define Scope Early", description: "Clear boundaries prevent scope creep and keep delivery on track. I document what\u2019s in and what\u2019s out." },
  { step: "03", title: "Call Out Tradeoffs", description: "Every technical decision has tradeoffs. I surface them early so you make informed choices." },
  { step: "04", title: "Deliver in Increments", description: "You see working code regularly — not a big reveal at the end. Feedback loops stay tight." },
  { step: "05", title: "Hand Off Maintainable Systems", description: "I deliver systems your team can actually run. Documentation, clean code, and clear architecture." },
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
  intro: "I\u2019m a Salesforce Specialist with 7+ years of experience building systems that teams actually use.",
  story: [
    "I started as a Mechatronics Engineer — which taught me to think in systems. I moved into front-end development because I cared about usability: if people can\u2019t use what you build, it doesn\u2019t matter how well it\u2019s engineered.",
    "That mindset carried into Salesforce. Over seven years, I\u2019ve worked across Sales Cloud, Service Cloud, and Experience Cloud for companies ranging from insurance enterprises to fast-moving startups.",
    "My focus is on maintainability, usability, reliable integrations, clean handoff, and business impact. I work best on the problems that most consultants avoid: messy data models, brittle automation, confusing portals, and unreliable integrations.",
  ],
  approach: "I don\u2019t believe in over-engineering. I believe in understanding the problem, choosing the simplest architecture that solves it, and delivering a system that your team can maintain after I\u2019m gone.",
};
