// Full work entry on /work. Three labeled sub-sections in a [label | content]
// two-column layout. The "call I made" section uses primary text; "found" uses
// muted; "outcome" highlights the optional metric in a larger mono number.

import React from "react";
import { Reveal } from "../animations";
import type { WorkEntry as WorkEntryType } from "@/data/work";

export function WorkEntry({ entry }: { entry: WorkEntryType }) {
  return (
    <article id={entry.id} className="scroll-mt-28 py-14 sm:py-20 border-t border-ink/[0.133] first:border-t-0 first:pt-8">
      <Reveal>
        <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-muted mb-3 flex flex-wrap gap-4">
          <span className="text-gold font-medium">{entry.number}</span>
          <span>{entry.industry}</span>
          <span>{entry.scale}</span>
          <span>{entry.year}</span>
        </div>

        <div className="text-[0.95rem] font-semibold text-ink mb-5 tracking-[-0.005em]">
          {entry.client}
        </div>

        <h2 className="font-light text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] tracking-[-0.02em] text-ink mb-8 max-w-[24ch]">
          {entry.title}
        </h2>

        <Section label="Org as I found it" muted>
          {entry.found}
        </Section>
        <Section label="The call I made">{entry.call}</Section>
        <Section label="Outcome">
          {entry.outcomeMetric ? (
            <span className="font-mono text-[1.05rem] text-ink font-medium mr-2">
              {entry.outcomeMetric}
            </span>
          ) : null}
          {entry.outcome}
        </Section>
      </Reveal>
    </article>
  );
}

function Section({
  label,
  children,
  muted = false,
}: {
  label: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 sm:gap-8 py-4 sm:py-5 border-t border-ink/[0.067] sm:items-baseline">
      <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-muted sm:pt-1">
        {label}
      </span>
      <p
        className={`text-[0.95rem] leading-[1.7] ${
          muted ? "text-muted" : "text-ink"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
