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
