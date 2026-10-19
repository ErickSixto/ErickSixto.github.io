"use client";

// Editorial hero block. Left-aligned on the same 880px column as every
// content section below it, so the page reads as one document with one left
// edge rather than centered blocks bracketing left-aligned ones. Used as the
// top section of every page. The headline is split into a leading phrase + bolded ending
// to enforce the 200 extralight → 700 bold contrast. `lead` accepts a single
// string or an array of strings. Array entries render as separate paragraphs.
//
// On mount the blocks rise and fade in sequence (eyebrow → headline → rule →
// lead → CTA → credibility) via LoadStagger. Honors prefers-reduced-motion.

import React from "react";
import { Eyebrow } from "./Eyebrow";
import { EditorialButton } from "./EditorialButton";
import { LoadStagger, StaggerItem } from "../animations";

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
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="bg-noise pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:linear-gradient(to_bottom,#000_0%,#000_30%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_30%,transparent_90%)]"
      />
      <div className="px-6 pt-20 sm:pt-28 pb-20 sm:pb-24 max-w-[880px] mx-auto">
      <LoadStagger>
        <StaggerItem>
          <Eyebrow left={eyebrowLeft} right={eyebrowRight} className="mb-10 sm:mb-12 inline-block" />
        </StaggerItem>

        <StaggerItem>
          <h1 className="font-extralight text-[clamp(1.6rem,6.5vw,4.2rem)] leading-[1.08] sm:leading-[1.04] tracking-[-0.025em] sm:tracking-[-0.03em] text-ink mb-8 sm:mb-10 max-w-[16ch] sm:max-w-[18ch] text-balance">
            {headlineLead}{" "}
            <strong className="font-bold">{headlineBold}</strong>
          </h1>
        </StaggerItem>

        <StaggerItem>
          <div className="w-8 h-px bg-ink/[0.333] mb-8 sm:mb-10" />
        </StaggerItem>

        {leadParagraphs.length > 0 ? (
          <StaggerItem>
            <div className="max-w-[56ch] mb-10 sm:mb-11">
              {leadParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-[0.98rem] sm:text-[1.05rem] leading-[1.65] sm:leading-[1.7] text-muted mb-4 sm:mb-5 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          </StaggerItem>
        ) : null}

        {cta ? (
          <StaggerItem>
            <div className="mb-10 sm:mb-11">
              <EditorialButton href={cta.href} external={cta.external}>
                {cta.label} <span aria-hidden>→</span>
              </EditorialButton>
            </div>
          </StaggerItem>
        ) : null}

        {credibility && credibility.length > 0 ? (
          <StaggerItem>
            {/* Third-party evidence. Principle 3 is "evidence over assertion",
                so this reads at ink weight rather than sitting at the bottom of
                the type ramp in muted gray. It is the proof, not a footnote. */}
            <div className="font-mono text-[0.82rem] tracking-[0.12em] uppercase text-ink font-medium flex flex-wrap items-center gap-x-4 gap-y-2">
              {credibility.map((item, i) => (
                <span key={item} className="whitespace-nowrap inline-flex items-center gap-4">
                  <span>{item}</span>
                  {i < credibility.length - 1 ? (
                    <span className="text-ink/[0.2]" aria-hidden>·</span>
                  ) : null}
                </span>
              ))}
            </div>
          </StaggerItem>
        ) : null}
      </LoadStagger>
      </div>
    </section>
  );
}
