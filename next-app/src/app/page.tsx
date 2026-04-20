"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Settings,
  Globe,
  RefreshCw,
  Zap,
  Database,
  BarChart3,
  Calendar,
  ExternalLink,
  Phone,
  Star,
  RefreshCcw,
} from "lucide-react";
import {
  AnimatedText,
  Marquee,
  CountUp,
  MotionSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { PlatformLinksRow } from "@/components/platform-links";
import {
  siteConfig,
  credibilityItems,
  services,
  projects,
  processSteps,
  socialProof,
  marqueeItems,
  meetingLinks,
  testimonials,
} from "@/data/mock";

const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

const iconMap: Record<string, any> = {
  Settings,
  Globe,
  RefreshCw,
  Zap,
  Database,
  BarChart3,
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 2);
  const [heroProject, ...secondaryProjects] = featuredProjects;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, -10]);

  return (
    <main>
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative min-h-[94vh] flex items-center pt-32 bg-[#F1F1EF] overflow-hidden"
      >
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE_PREMIUM }}
                className="lg:hidden text-[#CB9135] text-[13px] font-medium uppercase tracking-[0.2em] mb-6"
              >
                {siteConfig.descriptor}
              </motion.p>

              <AnimatedText
                text={siteConfig.headline}
                className="font-bold text-[#2F2E2E] leading-[1.06] mb-7 tracking-tight"
                delay={0.2}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: EASE_PREMIUM }}
                className="text-[17px] text-[#4B5563] leading-relaxed mb-10"
              >
                {siteConfig.subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: EASE_PREMIUM }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <a href={meetingLinks.discovery.url} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#2F2E2E] hover:bg-[#1a1919] text-white px-7 h-14 text-sm transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <Phone className="mr-2 h-4 w-4" />
                    Let&apos;s talk about your org
                  </Button>
                </a>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    className="border-[#2F2E2E]/20 text-[#2F2E2E] hover:bg-[#CB9135] hover:text-white hover:border-[#CB9135] px-7 h-14 text-sm transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]"
                  >
                    See my work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6, ease: EASE_PREMIUM }}
              >
                <PlatformLinksRow size="sm" showLabels={false} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: EASE_PREMIUM }}
              style={{ y: portraitY }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-[#E5E7EB]/50 rounded-2xl"
                  animate={{ rotate: [2, 3, 2] }}
                  transition={{ repeat: Infinity, duration: 6, ease: EASE_PREMIUM }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={siteConfig.portrait}
                  alt="Portrait of Erick Sixto, Salesforce Specialist"
                  className="relative rounded-2xl w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Hero heading sizing is controlled by clamp — applied to the <h1> inline via a style tag */}
          <style jsx global>{`
            main section h1 {
              font-size: clamp(2rem, 6vw, 4.5rem);
            }
          `}</style>

          {/* Credibility Bar */}
          <MotionSection delay={0.6} className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#E5E7EB] pt-10">
              {credibilityItems.map((item, i) => {
                const numMatch = String(item.value).match(/^(\d+)(\+?)$/);
                return (
                  <div key={i} className="text-center md:text-left">
                    <p className="text-4xl md:text-5xl font-bold text-[#2F2E2E] tabular-nums tracking-tight">
                      {numMatch ? <CountUp target={numMatch[1]} suffix={numMatch[2]} /> : item.value}
                    </p>
                    <p className="text-sm text-[#4B5563] mt-2">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ── Skills Marquee ── */}
      <section className="py-8 bg-white border-y border-[#E5E7EB] overflow-hidden">
        <Marquee items={marqueeItems} speed={40} />
      </section>

      {/* ── Value Proposition ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="max-w-3xl">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">
                — Why Erick
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] mb-6 tracking-tight">
                Two things the work has to do
              </h2>
              <p className="text-lg text-[#4B5563] leading-relaxed">
                Most Salesforce orgs have too many features and not enough adoption. I focus on the
                opposite — less configuration, more usability. If your team won&apos;t use it, I won&apos;t
                build it.
              </p>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-4xl">
            {[
              {
                title: "Architecture your next dev can read",
                desc: "Object models that scale without turning brittle. Clean code, clear boundaries, no clever abstractions that only make sense at 2 a.m.",
              },
              {
                title: "A system your team runs without me",
                desc: "When the work ships, your admins can extend it. Your team can onboard new hires to it. Nobody needs my phone number to change a field.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-5 w-5 text-[#2F2E2E] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#2F2E2E] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-32 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">
                  — Services
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] tracking-tight">
                  What I deliver
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden md:flex items-center gap-2 text-sm text-[#2F2E2E] hover:text-[#CB9135] font-medium transition-all duration-300 hover:gap-3"
              >
                See all 6 services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service) => {
              const IconComp = iconMap[service.icon] || Settings;
              return (
                <StaggerItem key={service.id}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: EASE_PREMIUM }}>
                    <Link href="/services" className="block h-full">
                      <Card className="p-10 bg-white border-[#E5E7EB] hover:shadow-lg hover:border-[#CB9135]/30 h-full cursor-pointer group">
                        <div className="inline-flex p-3 bg-[#F1F1EF] rounded-lg mb-6 transition-colors duration-300 group-hover:bg-[#CB9135]/10">
                          <IconComp className="h-6 w-6 text-[#2F2E2E]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#2F2E2E] mb-3 group-hover:text-[#CB9135] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-[#4B5563] leading-relaxed mb-6">{service.shortDesc}</p>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#CB9135] font-medium">
                          Outcome
                        </p>
                        <p className="text-sm text-[#2F2E2E] mt-2 leading-relaxed">{service.outcome}</p>
                      </Card>
                    </Link>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-[#2F2E2E] hover:text-[#CB9135] font-medium transition-colors"
            >
              See all 6 services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">
                  — Selected work
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] tracking-tight">
                  Selected work
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden md:flex items-center gap-2 text-sm text-[#2F2E2E] hover:text-[#CB9135] font-medium transition-all duration-300 hover:gap-3"
              >
                All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </MotionSection>
          <MotionSection>
            <Link href="/projects">
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: EASE_PREMIUM }}>
                <Card className="border-[#E5E7EB] hover:shadow-xl hover:border-[#CB9135]/30 cursor-pointer overflow-hidden group">
                  <div className="h-1 bg-[#CB9135] group-hover:h-1.5 transition-all duration-500" />
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 p-10">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge
                          variant="secondary"
                          className="text-xs bg-[#F1F1EF] text-[#4B5563] hover:bg-[#F1F1EF]"
                        >
                          {heroProject.category}
                        </Badge>
                        <span className="text-xs uppercase tracking-[0.15em] text-[#CB9135] font-medium">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#2F2E2E] mb-2 group-hover:text-[#CB9135] transition-colors tracking-tight">
                        {heroProject.title}
                      </h3>
                      <p className="text-sm text-[#CB9135] font-medium mb-5">{heroProject.client}</p>
                      <p className="text-[#4B5563] leading-relaxed max-w-2xl">{heroProject.goal}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 md:pl-10 md:border-l md:border-[#E5E7EB] md:min-w-[180px]">
                      {heroProject.impact.map((imp, j) => (
                        <div key={j}>
                          <p className="text-3xl font-bold text-[#2F2E2E] tabular-nums tracking-tight">
                            {imp.metric}
                          </p>
                          <p className="text-sm text-[#4B5563] mt-1">{imp.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Link>
          </MotionSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {secondaryProjects.map((project) => (
              <StaggerItem key={project.id}>
                <Link href="/projects">
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: EASE_PREMIUM }}>
                    <Card className="border-[#E5E7EB] hover:shadow-lg hover:border-[#CB9135]/30 h-full flex flex-col cursor-pointer overflow-hidden group">
                      <div className="h-1 bg-[#CB9135] group-hover:h-1.5 transition-all duration-500" />
                      <div className="p-6">
                        <Badge
                          variant="secondary"
                          className="w-fit mb-3 text-xs bg-[#F1F1EF] text-[#4B5563] hover:bg-[#F1F1EF]"
                        >
                          {project.category}
                        </Badge>
                        <h3 className="font-semibold text-[#2F2E2E] mb-1">{project.title}</h3>
                        <p className="text-sm text-[#CB9135] font-medium mb-3">{project.client}</p>
                        <p className="text-sm text-[#4B5563] leading-relaxed mb-5 line-clamp-2">
                          {project.goal}
                        </p>
                        <div className="flex gap-6">
                          {project.impact.map((imp, j) => (
                            <div key={j}>
                              <p className="text-lg font-bold text-[#2F2E2E] tabular-nums tracking-tight">
                                {imp.metric}
                              </p>
                              <p className="text-xs text-[#4B5563]">{imp.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-[#2F2E2E] hover:text-[#CB9135] font-medium transition-colors"
            >
              All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-32 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="mb-12">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">
                — Client Reviews
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] tracking-tight">
                What clients say
              </h2>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => {
              const fullStars = Math.floor(t.rating);
              const hasHalf = t.rating % 1 >= 0.5;
              return (
                <StaggerItem key={t.id}>
                  <Card className="p-7 bg-white border-[#E5E7EB] h-full flex flex-col">
                    <div className="flex items-center gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < fullStars
                              ? "fill-[#CB9135] text-[#CB9135]"
                              : i === fullStars && hasHalf
                                ? "fill-[#CB9135]/50 text-[#CB9135]"
                                : "fill-[#E5E7EB] text-[#E5E7EB]"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-[#4B5563] ml-1.5 tabular-nums">{t.rating}</span>
                      {(t as any).isRepeatClient && (
                        <span className="ml-auto flex items-center gap-1 text-[10px] text-[#CB9135] font-medium uppercase tracking-wide">
                          <RefreshCcw className="h-3 w-3" />
                          Repeat Client
                        </span>
                      )}
                    </div>
                    <p className="text-[#2F2E2E] text-sm leading-relaxed flex-grow mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                      <div>
                        <p className="text-sm font-semibold text-[#2F2E2E]">{t.author}</p>
                        <p className="text-xs text-[#4B5563]">{t.country}</p>
                      </div>
                      <span className="text-[10px] text-[#4B5563] bg-[#F1F1EF] px-2 py-1 rounded-full">
                        {t.service}
                      </span>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <div className="mt-8 text-center">
            <a
              href="https://www.fiverr.com/ericksixto#Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#4B5563] hover:text-[#2F2E2E] transition-colors"
            >
              120+ verified reviews on Fiverr
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="max-w-3xl mb-14">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">— Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] tracking-tight">
                How I work
              </h2>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <StaggerItem key={i}>
                <div>
                  <span className="text-4xl md:text-5xl font-bold text-[#CB9135]/30 leading-none tabular-nums tracking-tight">
                    {step.step}
                  </span>
                  <h3 className="font-semibold text-[#2F2E2E] mt-3 mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Social Proof (Real Metrics) ── */}
      <section className="py-32 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="mb-12">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">
                — Verified Results
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] tracking-tight">
                Numbers you can verify
              </h2>
              <p className="text-[#4B5563] mt-3 max-w-lg">
                Every metric links to a public profile. Click through and verify.
              </p>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {socialProof.map((proof) => (
              <StaggerItem key={proof.platform}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: EASE_PREMIUM }}>
                  <a href={proof.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="p-7 border-[#E5E7EB] h-full hover:shadow-lg hover:border-[#CB9135]/30 group cursor-pointer">
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                            style={{ backgroundColor: proof.color }}
                          >
                            {proof.letter}
                          </div>
                          <span className="font-semibold text-[#2F2E2E]">{proof.platform}</span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#E5E7EB] group-hover:text-[#4B5563] transition-colors" />
                      </div>
                      <p className="text-sm text-[#4B5563] leading-relaxed mb-5">{proof.description}</p>
                      <div className="flex gap-6 mb-4">
                        {proof.metrics.map((m, i) => (
                          <div key={i}>
                            <p className="text-xl font-bold text-[#2F2E2E] tabular-nums tracking-tight">
                              {m.value}
                            </p>
                            <p className="text-xs text-[#4B5563]">{m.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {proof.badges.map((b, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs border-[#E5E7EB] text-[#4B5563] hover:bg-transparent"
                          >
                            {b}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </a>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-32 bg-[#2F2E2E] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 gradient-sweep-bg pointer-events-none"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 14, ease: EASE_PREMIUM, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MotionSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
              Got an org that&apos;s fighting your team?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Messy data model, broken integration, portal that users avoid — start with a 30-minute
              call. No pitch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={meetingLinks.discovery.url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#2F2E2E] hover:bg-gray-100 px-8 h-14 text-sm font-medium transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]">
                  <Calendar className="mr-2 h-4 w-4" />
                  {meetingLinks.discovery.shortLabel}
                </Button>
              </a>
              <a href={meetingLinks.consultation.url} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white/40 px-8 h-14 text-sm transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                >
                  {meetingLinks.consultation.shortLabel}
                </Button>
              </a>
            </div>
          </MotionSection>
        </div>
      </section>
    </main>
  );
}
