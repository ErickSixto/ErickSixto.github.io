// Editorial hero block. Centered, max-width 760px. Used as the top section
// of every page. The headline is split into a leading phrase + bolded ending
// to enforce the Inter 200 → Inter 700 contrast. `lead` accepts a single
// string or an array of strings — array entries render as separate paragraphs.

import React from "react";
import { Eyebrow } from "./Eyebrow";
import { EditorialButton } from "./EditorialButton";

export function Hero({
  eyebrowLeft,
  eyebrowRight,
  headlineLead,
  headlineBold,
  lead,
  cta,
  credibility,
}: {
  eyebrowLeft: string;
  eyebrowRight?: string;
  headlineLead: string;
  headlineBold: string;
  lead?: string | string[];
  cta?: { label: string; href: string; external?: boolean };
  credibility?: string[];
}) {
  const leadParagraphs = lead
    ? Array.isArray(lead)
      ? lead
      : [lead]
    : [];

  return (
    <section className="text-center px-6 pt-20 sm:pt-28 pb-20 sm:pb-24 max-w-[760px] mx-auto">
      <Eyebrow left={eyebrowLeft} right={eyebrowRight} className="mb-10 sm:mb-12 inline-block" />

      <h1 className="font-extralight text-[clamp(1.6rem,6.5vw,4.2rem)] leading-[1.08] sm:leading-[1.04] tracking-[-0.025em] sm:tracking-[-0.03em] text-[#2F2E2E] mb-8 sm:mb-10 max-w-[16ch] sm:max-w-[18ch] mx-auto text-balance">
        {headlineLead}{" "}
        <strong className="font-bold">{headlineBold}</strong>
      </h1>

      <div className="w-8 h-px bg-[#2F2E2E55] mx-auto mb-8 sm:mb-10" />

      {leadParagraphs.length > 0 ? (
        <div className="max-w-[56ch] mx-auto mb-10 sm:mb-11">
          {leadParagraphs.map((para, i) => (
            <p
              key={i}
              className="text-[0.98rem] sm:text-[1.05rem] leading-[1.65] sm:leading-[1.7] text-[#4B5563] mb-4 sm:mb-5 last:mb-0"
            >
              {para}
            </p>
          ))}
        </div>
      ) : null}

      {cta ? (
        <div className="mb-10 sm:mb-11">
          <EditorialButton href={cta.href} external={cta.external}>
            {cta.label} <span aria-hidden>→</span>
          </EditorialButton>
        </div>
      ) : null}

      {credibility && credibility.length > 0 ? (
        <div className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[#6B7280] flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5">
          {credibility.map((item, i) => (
            <span key={item} className="whitespace-nowrap inline-flex items-center gap-3">
              <span>{item}</span>
              {i < credibility.length - 1 ? (
                <span className="text-[#2F2E2E33]" aria-hidden>·</span>
              ) : null}
            </span>
          ))}
        </div>
      ) : null}
    </section>
  );
}
