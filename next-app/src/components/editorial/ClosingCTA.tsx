// Closing block on every page. Centered. Large editorial question, brief
// paragraph, primary CTA + secondary text link.
//
// No kicker label above the question: the question carries its own weight,
// and a tracked uppercase label restating it never earned its place.

import React from "react";
import { EditorialButton } from "./EditorialButton";
import { Reveal } from "../animations";

export function ClosingCTA({
  questionLead,
  questionBold,
  body,
  primary,
  secondary,
}: {
  questionLead: string;
  questionBold: string;
  body: string;
  primary: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="border-t border-ink/[0.067] bg-panel">
      <div className="text-center max-w-[720px] mx-auto px-6 py-32">
      <Reveal>
        <h2 className="font-extralight text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-ink mb-6">
          {questionLead}{" "}
          <strong className="font-bold">{questionBold}</strong>
        </h2>
        <p className="text-[1rem] leading-[1.7] text-muted max-w-[50ch] mx-auto mb-10">
          {body}
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <EditorialButton href={primary.href} external={primary.external}>
            {primary.label} <span aria-hidden>→</span>
          </EditorialButton>
          {secondary ? (
            <a
              href={secondary.href}
              className="font-mono text-[0.82rem] text-ink inline-flex items-center min-h-11"
            >
              <span className="border-b border-ink/[0.2] pb-px">{secondary.label}</span>
            </a>
          ) : null}
        </div>
      </Reveal>
      </div>
    </section>
  );
}
