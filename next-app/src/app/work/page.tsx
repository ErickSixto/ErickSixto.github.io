import React from "react";
import { Hero } from "@/components/editorial/Hero";
import { WorkIndex } from "@/components/editorial/WorkIndex";
import { WorkEntry } from "@/components/editorial/WorkEntry";
import { ClosingCTA } from "@/components/editorial/ClosingCTA";
import { work } from "@/data/work";
import { meetingLinks } from "@/data/mock";

export const metadata = {
  title: "Selected work · Erick Sixto",
  description: "5 Salesforce engagements with the call I made and the outcome.",
};

export default function WorkPage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero
        eyebrowLeft="Selected work"
        headlineLead={`${work.length} engagements,`}
        headlineBold="chosen carefully."
        lead="Most of my Salesforce work doesn't show up here: Fiverr clients, NDA work, projects that ended cleanly. These are the ones I'd send a prospective client to read first. Roughly 150 words each."
      />

      <section className="max-w-[880px] mx-auto px-6 py-12 border-t border-ink/[0.067]">
        <WorkIndex entries={work} />
      </section>

      {/* Same 880px column and left edge as the rest of the page; the inner
          720px cap keeps the long-form reading measure. */}
      <section className="max-w-[880px] mx-auto px-6 pt-12 pb-24">
        <div className="max-w-[720px]">
          {work.map((entry) => (
            <WorkEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      <ClosingCTA
        questionLead="Bring me the engagement"
        questionBold="other consultants ducked."
        body="The work I keep is the work that wouldn't fit a packaged Salesforce template. If your project is one of those, let's talk."
        primary={{
          label: "Book a 30-minute call",
          href: meetingLinks.discovery.url,
          external: true,
        }}
      />
    </main>
  );
}
