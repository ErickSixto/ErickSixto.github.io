import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
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
} from "../components/animations";
import { PlatformLinksRow } from "../components/PlatformLinks";
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
} from "../data/mock";

const iconMap = { Settings, Globe, RefreshCw, Zap, Database, BarChart3 };

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="min-h-[92vh] flex items-center pt-20 bg-[#F1F1EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#CB9135] text-[13px] font-medium uppercase tracking-[0.2em] mb-6"
              >
                {siteConfig.descriptor}
              </motion.p>

              <AnimatedText
                text={siteConfig.headline}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#2F2E2E] leading-[1.08] mb-7"
                delay={0.2}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-[17px] text-[#4B5563] leading-relaxed mb-10"
              >
                {siteConfig.subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <a href={meetingLinks.discovery.url} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#2F2E2E] hover:bg-[#1a1919] text-white px-7 h-12 text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                    <Phone className="mr-2 h-4 w-4" />
                    Let's talk about your org
                  </Button>
                </a>
                <Link to="/projects">
                  <Button
                    variant="outline"
                    className="border-[#2F2E2E]/20 text-[#2F2E2E] hover:bg-[#CB9135] hover:text-white hover:border-[#CB9135] px-7 h-12 text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    See my work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <PlatformLinksRow size="sm" showLabels={false} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-[#E5E7EB]/50 rounded-2xl"
                  animate={{ rotate: [2, 3, 2] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                <img
                  src={siteConfig.portrait}
                  alt="Erick Sixto"
                  className="relative rounded-2xl w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Credibility Bar */}
          <MotionSection delay={0.6} className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#E5E7EB] pt-10">
              {credibilityItems.map((item, i) => {
                const numMatch = String(item.value).match(/^(\d+)(\+?)$/);
                return (
                  <div key={i} className="text-center md:text-left">
                    <p className="text-2xl font-bold text-[#2F2E2E]">
                      {numMatch ? <CountUp target={numMatch[1]} suffix={numMatch[2]} /> : item.value}
                    </p>
                    <p className="text-sm text-[#4B5563] mt-1">{item.label}</p>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="max-w-3xl">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">Why Erick</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] mb-6">
                Salesforce that works for your team, not against it
              </h2>
              <p className="text-lg text-[#4B5563] leading-relaxed">
                Most Salesforce orgs have too many features and not enough adoption. I focus on the opposite — less configuration, more usability. If your team won't use it, I won't build it.
              </p>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">
            {[
              { title: "Clean architecture", desc: "Object models that scale without turning brittle. Code your next dev can read." },
              { title: "Maintainable by default", desc: "Your team extends the system after handoff. I'm not on speed-dial for every change." },
              { title: "Built for the outcome", desc: "Every decision ties back to a business result. No complexity for the sake of looking clever." },
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
      <section className="py-24 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">Services</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E]">What I deliver</h2>
              </div>
              <Link to="/services" className="hidden md:flex items-center gap-2 text-sm text-[#2F2E2E] hover:text-[#CB9135] font-medium transition-all duration-200 hover:gap-3">
                All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const IconComp = iconMap[service.icon] || Settings;
              return (
                <StaggerItem key={service.id}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                    <Card className="p-7 bg-white border-[#E5E7EB] hover:shadow-lg hover:border-[#CB9135]/30 transition-all duration-200 h-full cursor-pointer">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-[#F1F1EF] rounded-lg flex-shrink-0 transition-colors duration-200 group-hover:bg-[#CB9135]/10">
                          <IconComp className="h-5 w-5 text-[#2F2E2E]" />
                        </div>
                        <h3 className="font-semibold text-[#2F2E2E]">{service.title}</h3>
                      </div>
                      <p className="text-sm text-[#4B5563] leading-relaxed">{service.shortDesc}</p>
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-[#2F2E2E] hover:text-[#CB9135] font-medium transition-colors">
              All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">Projects</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E]">Selected work</h2>
              </div>
              <Link to="/projects" className="hidden md:flex items-center gap-2 text-sm text-[#2F2E2E] hover:text-[#CB9135] font-medium transition-all duration-200 hover:gap-3">
                All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <Link to="/projects">
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                    <Card className="border-[#E5E7EB] hover:shadow-lg hover:border-[#CB9135]/30 transition-all duration-200 h-full flex flex-col cursor-pointer overflow-hidden group">
                      <div className="h-1 bg-[#CB9135] group-hover:h-1.5 transition-all duration-200" />
                      <div className="p-6">
                        <Badge variant="secondary" className="w-fit mb-3 text-xs bg-[#F1F1EF] text-[#4B5563] hover:bg-[#F1F1EF]">{project.category}</Badge>
                        <h3 className="font-semibold text-[#2F2E2E] mb-1">{project.title}</h3>
                        <p className="text-sm text-[#CB9135] font-medium mb-3">{project.client}</p>
                        <p className="text-sm text-[#4B5563] leading-relaxed mb-5 line-clamp-2">{project.goal}</p>
                        <div className="flex gap-6">
                          {project.impact.map((imp, j) => (
                            <div key={j}>
                              <p className="text-lg font-bold text-[#2F2E2E]">{imp.metric}</p>
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
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-[#2F2E2E] hover:text-[#CB9135] font-medium transition-colors">
              All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="mb-12">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">Client Reviews</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E]">What clients say</h2>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => {
              const fullStars = Math.floor(t.rating);
              const hasHalf = t.rating % 1 >= 0.5;
              return (
                <StaggerItem key={t.id}>
                  <Card className="p-7 bg-white border-[#E5E7EB] h-full flex flex-col">
                    {/* Stars */}
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
                      <span className="text-xs text-[#4B5563] ml-1.5">{t.rating}</span>
                      {t.isRepeatClient && (
                        <span className="ml-auto flex items-center gap-1 text-[10px] text-[#CB9135] font-medium uppercase tracking-wide">
                          <RefreshCcw className="h-3 w-3" />
                          Repeat Client
                        </span>
                      )}
                    </div>
                    {/* Quote */}
                    <p className="text-[#2F2E2E] text-sm leading-relaxed flex-grow mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    {/* Author */}
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="max-w-3xl mb-14">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E]">How I work</h2>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <StaggerItem key={i}>
                <div>
                  <span className="text-4xl font-bold text-[#CB9135]/30 leading-none">{step.step}</span>
                  <h3 className="font-semibold text-[#2F2E2E] mt-3 mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Social Proof (Real Metrics) ── */}
      <section className="py-24 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <div className="mb-12">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">Verified Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E]">Numbers you can verify</h2>
              <p className="text-[#4B5563] mt-3 max-w-lg">Every metric links to a public profile. No placeholders — real, trackable proof.</p>
            </div>
          </MotionSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {socialProof.map((proof) => (
              <StaggerItem key={proof.platform}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <a href={proof.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="p-7 border-[#E5E7EB] h-full hover:shadow-lg hover:border-[#CB9135]/30 transition-all duration-200 group cursor-pointer">
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: proof.color }}>
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
                            <p className="text-xl font-bold text-[#2F2E2E]">{m.value}</p>
                            <p className="text-xs text-[#4B5563]">{m.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {proof.badges.map((b, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-[#E5E7EB] text-[#4B5563] hover:bg-transparent">{b}</Badge>
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
      <section className="py-24 bg-[#2F2E2E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MotionSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to fix your Salesforce?</h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether it's a messy data model, a broken integration, or a portal that needs rebuilding — let's start with a free conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={meetingLinks.discovery.url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#2F2E2E] hover:bg-gray-100 px-8 h-12 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                  <Calendar className="mr-2 h-4 w-4" />
                  {meetingLinks.discovery.shortLabel}
                </Button>
              </a>
              <a href={meetingLinks.consultation.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
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
