import React from "react";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { EditorialList } from "@/components/editorial/EditorialList";
import { ClosingCTA } from "@/components/editorial/ClosingCTA";
import {
  siteConfig,
  experience,
  socialProof,
  meetingLinks,
} from "@/data/mock";

export const metadata = {
  title: "About — Erick Sixto",
  description:
    "Mechatronics engineer turned Salesforce specialist. 7 years untangling orgs other consultants ducked.",
};

const problemPatterns = [
  {
    title: "The Visualforce page nobody wants to touch.",
    description:
      "Multi-thousand-line files where every change is a guess. Decompose section by section, ship a component library, retire the relic without a full rebuild.",
  },
  {
    title: "The portal users won't open.",
    description:
      "Click counts that don't match how people actually work. Cut clicks, consolidate flows, ship a reusable LWC library your team can extend.",
  },
  {
    title: "The pipeline that doesn't match how you sell.",
    description:
      "Standard Opportunity objects forced into deal cycles they were never designed for. Object architecture that fits the actual sale.",
  },
  {
    title: "The integration that fails silently.",
    description:
      "Brittle automation chains losing records on a schedule nobody monitors. Replace with services your admins can read and your team can trust.",
  },
];

const rightFit = [
  "Companies whose Salesforce can't keep up with how they've grown",
  "Support teams whose customer portal is making things worse, not better",
  "Teams whose admin is solid but stuck on a hard problem",
  "Buyers who want a senior expert, not another planning meeting",
];

const notAFit = [
  "Lowest-bid, shortest-timeline work",
  "Looking to hire a full-time Salesforce admin (different gig — happy to refer one)",
  "Enterprise procurement with 6-month vendor onboarding",
  "Template-shopping for a cookie-cutter setup",
];

export default function AboutPage() {
  return (
    <main>
      <Hero
        eyebrowLeft="About"
        headlineLead="An engineer who"
        headlineBold="ended up in Salesforce."
        lead={[
          "I trained as a mechatronics engineer — the discipline where a motor failing on the factory floor teaches you more than any textbook. Operators don't care how elegant your circuit is; they need it to work.",
          "I moved into Salesforce with that same standard. 7 years in. Multiple clouds, dozens of orgs, mostly clean-up work — the brittle trigger nobody's touched in 2 years, the portal users can't figure out, the integration that silently drops records on Tuesdays.",
        ]}
      />

      {/* Portrait */}
      <section className="max-w-[720px] mx-auto px-6 pb-16 border-t border-[#2F2E2E11] pt-12">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.portrait}
            alt="Portrait of Erick Sixto, Salesforce Specialist"
            loading="lazy"
            className="w-full max-w-[480px] mx-auto block"
          />
          <figcaption className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#6B7280] text-center mt-4">
            Mérida · 2025
          </figcaption>
        </figure>
      </section>

      {/* Verified by — TRUST */}
      <section className="max-w-[880px] mx-auto px-6 py-20 border-t border-[#2F2E2E11]">
        <div className="mb-10">
          <SectionLabel className="mb-3 inline-block">Verified by</SectionLabel>
          <h2 className="font-extralight text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E]">
            Third-party <strong className="font-bold">attestations.</strong>
          </h2>
        </div>
        <EditorialList>
          {socialProof.map((p) => {
            const metric = p.metrics[0];
            const moreMetrics = p.metrics.slice(1);
            return (
              <a
                key={p.platform}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-1 sm:grid-cols-[180px_1fr_auto] gap-3 sm:gap-8 py-6 items-baseline group"
              >
                <div className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-[#2F2E2E] font-medium">
                  {p.platform}
                </div>
                <div>
                  <div className="text-[1rem] text-[#2F2E2E] tracking-[-0.005em] mb-1">
                    {metric.value}{" "}
                    <span className="text-[#4B5563] font-normal">
                      {metric.label.toLowerCase()}
                    </span>
                    {moreMetrics.map((m) => (
                      <span key={m.label} className="text-[#4B5563] font-normal">
                        {" · "}
                        {m.value} {m.label.toLowerCase()}
                      </span>
                    ))}
                  </div>
                  <p className="text-[0.85rem] leading-[1.55] text-[#4B5563] max-w-[60ch]">
                    {p.description}
                  </p>
                </div>
                <span className="font-mono text-[0.7rem] text-[#2F2E2E] border-b border-[#2F2E2E55] pb-px self-center sm:self-baseline whitespace-nowrap">
                  view profile →
                </span>
              </a>
            );
          })}
        </EditorialList>
      </section>

      {/* What I solve — PROBLEMS */}
      <section className="max-w-[880px] mx-auto px-6 py-20 border-t border-[#2F2E2E11]">
        <div className="mb-10 max-w-[56ch]">
          <SectionLabel className="mb-3 inline-block">What I solve</SectionLabel>
          <h2 className="font-extralight text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E] mb-4">
            The work most consultants{" "}
            <strong className="font-bold">don&apos;t want to take.</strong>
          </h2>
          <p className="text-[0.95rem] leading-[1.7] text-[#4B5563]">
            A handful of patterns I see often enough that I keep a playbook for each one.
          </p>
        </div>
        <EditorialList>
          {problemPatterns.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-[60px_1fr] gap-3 sm:gap-8 py-6 items-baseline"
            >
              <span className="font-mono text-[0.7rem] tracking-[0.16em] text-[#6B7280]">
                №{String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="text-[1rem] font-semibold text-[#2F2E2E] tracking-[-0.005em] mb-2">
                  {p.title}
                </div>
                <p className="text-[0.9rem] leading-[1.65] text-[#4B5563] max-w-[58ch]">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </EditorialList>
        <div className="text-right mt-8">
          <a
            href="/work"
            className="font-mono text-[0.7rem] text-[#2F2E2E] border-b border-[#CB9135] pb-px"
          >
            see the case studies →
          </a>
        </div>
      </section>

      {/* Is this a fit? — RIGHT FIT */}
      <section className="max-w-[880px] mx-auto px-6 py-20 border-t border-[#2F2E2E11]">
        <div className="mb-10 max-w-[56ch]">
          <SectionLabel className="mb-3 inline-block">Is this a fit?</SectionLabel>
          <h2 className="font-extralight text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E] mb-4">
            Who I work with —{" "}
            <strong className="font-bold">and who I don&apos;t.</strong>
          </h2>
          <p className="text-[0.95rem] leading-[1.7] text-[#4B5563]">
            Save us both a discovery call. If you&apos;re in the left column, let&apos;s talk. If you&apos;re in the right, I&apos;ll usually know who can help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div>
            <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#2F2E2E] font-medium mb-5">
              Right fit
            </div>
            <ul className="space-y-4">
              {rightFit.map((item, i) => (
                <li
                  key={i}
                  className="text-[0.92rem] leading-[1.6] text-[#2F2E2E] pl-5 relative before:content-['+'] before:absolute before:left-0 before:text-[#CB9135] before:font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#6B7280] mb-5">
              Not a fit
            </div>
            <ul className="space-y-4">
              {notAFit.map((item, i) => (
                <li
                  key={i}
                  className="text-[0.92rem] leading-[1.6] text-[#4B5563] pl-5 relative before:content-['−'] before:absolute before:left-0 before:text-[#6B7280]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Career timeline */}
      <section className="max-w-[880px] mx-auto px-6 py-20 border-t border-[#2F2E2E11]">
        <div className="mb-10">
          <SectionLabel className="mb-3 inline-block">Career</SectionLabel>
          <h2 className="font-extralight text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E]">
            Where I&apos;ve <strong className="font-bold">worked.</strong>
          </h2>
        </div>
        <EditorialList>
          {experience.map((role, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-5 items-baseline"
            >
              <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[#6B7280]">
                {role.period}
              </div>
              <div>
                <div className="text-[0.95rem] font-semibold text-[#2F2E2E] tracking-[-0.005em]">
                  {role.role}
                </div>
                <div className="text-[0.85rem] text-[#4B5563]">{role.company}</div>
              </div>
            </div>
          ))}
        </EditorialList>
      </section>

      <ClosingCTA
        label="Get in touch"
        questionLead="Got an org that needs"
        questionBold="untangling?"
        body="A 30-minute call is free. I'll tell you whether I can help, and if I can't, I'll usually know who can."
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
