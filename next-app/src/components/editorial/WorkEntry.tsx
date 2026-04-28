// Full work entry on /work. Three labeled sub-sections in a [label | content]
// two-column layout. The "call I made" section uses primary text; "found" uses
// muted; "outcome" highlights the optional metric in a larger mono number.

import React from "react";
import type { WorkEntry as WorkEntryType } from "@/data/work";

export function WorkEntry({ entry }: { entry: WorkEntryType }) {
  return (
    <article id={entry.id} className="py-20 border-t border-[#2F2E2E22] first:border-t-0 first:pt-8">
      <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#6B7280] mb-6 flex flex-wrap gap-4">
        <span className="text-[#CB9135] font-medium">{entry.number}</span>
        <span>{entry.industry}</span>
        <span>{entry.scale}</span>
        <span>{entry.year}</span>
      </div>

      <h2 className="font-light text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] tracking-[-0.02em] text-[#2F2E2E] mb-8 max-w-[24ch]">
        {entry.title}
      </h2>

      <Section label="Org as I found it" muted>
        {entry.found}
      </Section>
      <Section label="The call I made">{entry.call}</Section>
      <Section label="Outcome">
        {entry.outcomeMetric ? (
          <span className="font-mono text-[1.05rem] text-[#2F2E2E] font-medium mr-2">
            {entry.outcomeMetric}
          </span>
        ) : null}
        {entry.outcome}
      </Section>
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
    <div className="grid grid-cols-[100px_1fr] gap-8 py-5 border-t border-[#2F2E2E11] items-baseline">
      <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-[#6B7280] pt-1">
        {label}
      </span>
      <p
        className={`text-[0.95rem] leading-[1.7] ${
          muted ? "text-[#4B5563]" : "text-[#2F2E2E]"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
