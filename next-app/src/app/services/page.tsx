"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Settings, Globe, RefreshCw, Zap, Database, BarChart3, type LucideIcon } from "lucide-react";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/animations";
import { services } from "@/data/mock";

const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];
const iconMap: Record<string, LucideIcon> = { Settings, Globe, RefreshCw, Zap, Database, BarChart3 };

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-32 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">— Services</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2E] mb-6 tracking-tight">
              What I deliver
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl leading-relaxed">
              Six services I keep coming back to. All of them start with the same question — can your team maintain
              this after I&apos;m gone?
            </p>
          </MotionSection>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8" stagger={0.06}>
            {services.map((service) => {
              const IconComp = iconMap[service.icon] || Settings;
              return (
                <StaggerItem key={service.id}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: EASE_PREMIUM }}>
                    <Card className="p-8 rounded-2xl border-[#E5E7EB] hover:shadow-lg hover:border-[#CB9135]/30 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-[#F1F1EF] rounded-lg flex-shrink-0">
                          <IconComp className="h-5 w-5 text-[#2F2E2E]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#2F2E2E] tracking-tight">{service.title}</h3>
                      </div>
                      <p className="text-sm text-[#4B5563] leading-relaxed mb-5">{service.description}</p>
                      <div className="bg-[#F1F1EF] rounded-lg p-4 mb-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#CB9135] font-medium mb-1">Outcome</p>
                        <p className="text-sm font-medium text-[#2F2E2E]">{service.outcome}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#CB9135] font-medium mb-3">
                          Typical Deliverables
                        </p>
                        <div className="flex flex-col gap-2">
                          {service.deliverables.map((d, j) => (
                            <div key={j} className="flex items-center gap-2.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#2F2E2E] flex-shrink-0" />
                              <span className="text-sm text-[#4B5563]">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32 bg-[#2F2E2E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MotionSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">Need Salesforce help?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Tell me about your project and I&apos;ll let you know how I can help.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-[#2F2E2E] hover:bg-gray-100 px-8 h-14 text-sm font-medium transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </MotionSection>
        </div>
      </section>
    </main>
  );
}
