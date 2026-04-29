// Editorial hero block. Centered, max-width 760px. Used as the top section
// of every page. The headline is split into a leading phrase + bolded ending
// to enforce the Inter 400 → Inter 700 contrast.

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
  lead?: string;
  cta?: { label: string; href: string; external?: boolean };
  credibility?: string[];
}) {
  return (
    <section className="text-center px-6 pt-28 pb-24 max-w-[760px] mx-auto">
      <Eyebrow left={eyebrowLeft} right={eyebrowRight} className="mb-12 inline-block" />

      <h1 className="font-normal text-[clamp(2.2rem,4.4vw,4.2rem)] leading-[1.04] tracking-[-0.03em] text-[#2F2E2E] mb-10 max-w-[18ch] mx-auto">
        {headlineLead}{" "}
        <strong className="font-bold">{headlineBold}</strong>
      </h1>

      <div className="w-8 h-px bg-[#2F2E2E55] mx-auto mb-10" />

      {lead ? (
        <p className="text-[1.05rem] leading-[1.7] text-[#4B5563] max-w-[56ch] mx-auto mb-11">
          {lead}
        </p>
      ) : null}

      {cta ? (
        <div className="mb-11">
          <EditorialButton href={cta.href} external={cta.external}>
            {cta.label} <span aria-hidden>→</span>
          </EditorialButton>
        </div>
      ) : null}

      {credibility && credibility.length > 0 ? (
        <div className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[#6B7280]">
          {credibility.map((item, i) => (
            <React.Fragment key={item}>
              {item}
              {i < credibility.length - 1 ? (
                <span className="text-[#2F2E2E33] mx-3">·</span>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </section>
  );
}
