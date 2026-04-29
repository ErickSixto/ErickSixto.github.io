import React from "react";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { EditorialList } from "@/components/editorial/EditorialList";
import { ClosingCTA } from "@/components/editorial/ClosingCTA";
import { siteConfig, aboutData, experience, meetingLinks } from "@/data/mock";

export const metadata = {
  title: "About — Erick Sixto",
  description: "An engineer who ended up in Salesforce. 7 years fixing orgs.",
};

export default function AboutPage() {
  return (
    <main>
      <Hero
        eyebrowLeft="About"
        headlineLead="An engineer who ended up"
        headlineBold="in Salesforce."
        lead={aboutData.intro}
      />

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

      <section className="max-w-[600px] mx-auto px-6 py-16 border-t border-[#2F2E2E11]">
        <SectionLabel className="mb-5 inline-block">Story</SectionLabel>
        {aboutData.story.map((paragraph, i) => (
          <p
            key={i}
            className="text-[1rem] leading-[1.8] text-[#2F2E2E] mb-6 last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </section>

      <section className="max-w-[880px] mx-auto px-6 py-16 border-t border-[#2F2E2E11]">
        <div className="mb-10">
          <SectionLabel className="mb-3 inline-block">Career</SectionLabel>
          <h2 className="font-normal text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E]">
            Where I&apos;ve <strong className="font-bold">worked.</strong>
          </h2>
        </div>
        <EditorialList>
          {experience.map((role, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-6 items-baseline"
            >
              <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[#6B7280]">
                {role.period}
              </div>
              <div>
                <div className="text-[1rem] font-semibold text-[#2F2E2E] tracking-[-0.005em]">
                  {role.role}
                </div>
                <div className="text-[0.85rem] text-[#4B5563] mb-2">{role.company}</div>
                <p className="text-[0.9rem] leading-[1.6] text-[#4B5563]">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </EditorialList>
      </section>

      <ClosingCTA
        label="Get in touch"
        questionLead="Want to talk about"
        questionBold="working together?"
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
