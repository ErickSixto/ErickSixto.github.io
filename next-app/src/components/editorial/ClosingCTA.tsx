// Closing block on every page. Centered. Section label, large editorial
// question, brief paragraph, primary CTA + secondary text link.

import React from "react";
import { SectionLabel } from "./SectionLabel";
import { EditorialButton } from "./EditorialButton";

export function ClosingCTA({
  label,
  questionLead,
  questionBold,
  body,
  primary,
  secondary,
}: {
  label: string;
  questionLead: string;
  questionBold: string;
  body: string;
  primary: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="text-center max-w-[720px] mx-auto px-6 py-28 border-t border-[#2F2E2E11]">
      <SectionLabel className="mb-4 inline-block">{label}</SectionLabel>
      <h2 className="font-normal text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-[#2F2E2E] mb-6 mt-2">
        {questionLead}{" "}
        <strong className="font-bold">{questionBold}</strong>
      </h2>
      <p className="text-[1rem] leading-[1.7] text-[#4B5563] max-w-[50ch] mx-auto mb-10">
        {body}
      </p>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        <EditorialButton href={primary.href} external={primary.external}>
          {primary.label} <span aria-hidden>→</span>
        </EditorialButton>
        {secondary ? (
          <a
            href={secondary.href}
            className="font-mono text-[0.72rem] text-[#2F2E2E] border-b border-[#2F2E2E33] pb-px"
          >
            {secondary.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}
