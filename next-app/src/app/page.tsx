import React from "react";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { StanceList } from "@/components/editorial/StanceList";
import { WorkPeek } from "@/components/editorial/WorkPeek";
import { ClosingCTA } from "@/components/editorial/ClosingCTA";
import { stances } from "@/data/stances";
import { work } from "@/data/work";
import { meetingLinks } from "@/data/mock";

export const metadata = {
  title: "Erick Sixto — Salesforce Specialist",
  description:
    "Senior Salesforce specialist. 7 years fixing orgs that got worse every time someone tried to improve them. Lead-gen for SaaS founders and CX teams.",
};

export default function HomePage() {
  const peek = work.slice(0, 3);

  return (
    <main>
      <Hero
        eyebrowLeft="Erick Sixto"
        eyebrowRight="Salesforce Specialist"
        headlineLead="Salesforce that doesn't"
        headlineBold="fight your team."
        lead="I'm Erick Sixto — mechatronics engineer turned Salesforce specialist. 7 years fixing orgs that got worse every time someone tried to improve them. I take a small number of engagements per year, mostly with SaaS founders and CX teams who need someone to make the call, not run another planning meeting."
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
          <h2 className="font-normal text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E] mb-4">
            What I won&apos;t{" "}
            <strong className="font-bold">compromise on.</strong>
          </h2>
          <p className="text-[0.95rem] leading-[1.7] text-[#4B5563]">
            Regardless of the org, the engagement, or how badly the timeline is squeezed. These are the standards that have made my best client relationships last, and the ones I&apos;m willing to walk away from work over.
          </p>
        </div>
        <StanceList stances={stances} />
      </section>

      <section className="max-w-[880px] mx-auto px-6 py-24 border-t border-[#2F2E2E11]">
        <div className="mb-10">
          <SectionLabel className="mb-3 inline-block">Selected work</SectionLabel>
          <h2 className="font-normal text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E]">
            Recent <strong className="font-bold">engagements.</strong>
          </h2>
        </div>
        <WorkPeek entries={peek} totalCount={work.length} />
      </section>

      <ClosingCTA
        label="Get in touch"
        questionLead="Got an org that's working"
        questionBold="against your team?"
        body="A 30-minute call is free. I'll tell you whether I can help, and if I can't, I'll usually know who can. No pitch, no proposal, no follow-up email 3 days later."
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
