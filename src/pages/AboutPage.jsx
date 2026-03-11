import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight } from "lucide-react";
import { MotionSection, StaggerContainer, StaggerItem } from "../components/animations";
import { PlatformLinksRow } from "../components/PlatformLinks";
import {
  siteConfig,
  aboutData,
  processSteps,
  experience,
} from "../data/mock";

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <MotionSection>
                <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">
                  About
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E2E] leading-tight mb-6">
                  {aboutData.intro}
                </h1>
              </MotionSection>
              <MotionSection delay={0.1}>
                <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
                  {aboutData.approach}
                </p>
                <PlatformLinksRow size="sm" showLabels={true} />
              </MotionSection>
            </div>
            <MotionSection delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <motion.div
                    className="absolute -inset-3 bg-[#E5E7EB]/50 rounded-2xl"
                    animate={{ rotate: [-2, -1, -2] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  />
                  <img
                    src={siteConfig.portrait}
                    alt="Erick Sixto"
                    className="relative rounded-2xl max-w-sm w-full object-cover"
                  />
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <MotionSection>
            <h2 className="text-3xl font-bold text-[#2F2E2E] mb-10">My path</h2>
          </MotionSection>
          {aboutData.story.map((paragraph, i) => (
            <MotionSection key={i} delay={i * 0.1}>
              <p className="text-[#4B5563] leading-relaxed mb-6 text-[16px]">
                {paragraph}
              </p>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MotionSection>
            <div className="mb-14">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">
                Approach
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E2E]">
                How I work
              </h2>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <StaggerItem key={i}>
                <div>
                  <span className="text-4xl font-bold text-[#E5E7EB] leading-none">
                    {step.step}
                  </span>
                  <h3 className="font-semibold text-[#2F2E2E] mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <MotionSection>
            <div className="mb-14">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">
                Career
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E2E]">Experience</h2>
            </div>
          </MotionSection>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-0 w-px bg-[#E5E7EB]" />
            {experience.map((role, i) => (
              <MotionSection key={i} delay={i * 0.1}>
                <div className="relative pl-10 pb-14 last:pb-0">
                  <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-[3px] border-[#2F2E2E] bg-white" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-[#4B5563]">
                      {role.period}
                    </span>
                    <h3 className="text-lg font-semibold text-[#2F2E2E]">
                      {role.role}
                    </h3>
                    <p className="text-[#CB9135] text-sm font-medium">
                      {role.company}
                    </p>
                    <p className="text-sm text-[#4B5563] leading-relaxed mt-2">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {role.highlights.map((h, j) => (
                        <Badge
                          key={j}
                          variant="secondary"
                          className="text-xs bg-[#F1F1EF] text-[#4B5563] hover:bg-[#F1F1EF]"
                        >
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#2F2E2E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <MotionSection>
            <h2 className="text-3xl font-bold text-white mb-5">
              Let's work together
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Available for consulting, freelance, and senior contract work.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-[#2F2E2E] hover:bg-gray-100 px-8 h-11 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </MotionSection>
        </div>
      </section>
    </main>
  );
}
