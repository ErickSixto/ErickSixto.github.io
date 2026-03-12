import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
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
} from "lucide-react";
import { MotionSection, StaggerContainer, StaggerItem } from "../components/animations";
import { services } from "../data/mock";

const iconMap = { Settings, Globe, RefreshCw, Zap, Database, BarChart3 };

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MotionSection>
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E2E] mb-6">
              What I deliver
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl leading-relaxed">
              From implementation to integration, I deliver Salesforce work that
              reduces operational friction and creates systems teams can actually
              maintain.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.06}>
            {services.map((service) => {
              const IconComp = iconMap[service.icon] || Settings;
              return (
                <StaggerItem key={service.id}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <Card className="p-8 border-[#E5E7EB] hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-[#F1F1EF] rounded-lg flex-shrink-0">
                        <IconComp className="h-5 w-5 text-[#2F2E2E]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#2F2E2E]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#4B5563] leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="bg-[#F1F1EF] rounded-lg p-4 mb-5">
                      <p className="text-xs uppercase tracking-wider text-[#9CA3AF] mb-1">
                        Outcome
                      </p>
                      <p className="text-sm font-medium text-[#2F2E2E]">
                        {service.outcome}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#9CA3AF] mb-3">
                        Typical Deliverables
                      </p>
                      <div className="flex flex-col gap-2">
                        {service.deliverables.map((d, j) => (
                          <div key={j} className="flex items-center gap-2.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#2F2E2E] flex-shrink-0" />
                            <span className="text-sm text-[#4B5563]">
                              {d}
                            </span>
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

      {/* CTA */}
      <section className="py-24 bg-[#2F2E2E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <MotionSection>
            <h2 className="text-3xl font-bold text-white mb-5">
              Need Salesforce help?
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Tell me about your project and I'll let you know how I can help.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-[#2F2E2E] hover:bg-gray-100 px-8 h-11 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </MotionSection>
        </div>
      </section>
    </main>
  );
}
