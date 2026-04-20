"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Send, CheckCircle2, Calendar, ExternalLink } from "lucide-react";
import { MotionSection } from "@/components/animations";
import { PlatformLinksRow } from "@/components/platform-links";
import { siteConfig, meetingLinks } from "@/data/mock";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry from ${formData.name}${formData.company ? ` — ${formData.company}` : ""}`,
    );
    const body = encodeURIComponent(
      `Hi Erick,\n\n${formData.message}\n\n---\nName: ${formData.name}\nEmail: ${formData.email}${
        formData.company ? `\nCompany: ${formData.company}` : ""
      }`,
    );
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleChange =
    (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <main className="pt-20">
      <section className="py-32 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">— Contact</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2E] mb-6 tracking-tight">
              Let&apos;s talk
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl leading-relaxed">
              A 30-minute call is the fastest way to figure out if we should work together. Or drop a message below
              — I reply inside a day.
            </p>
          </MotionSection>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <a href={meetingLinks.discovery.url} target="_blank" rel="noopener noreferrer">
                <Card className="p-6 rounded-2xl border-[#E5E7EB] hover:shadow-lg hover:border-[#CB9135]/30 group cursor-pointer h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-[#F1F1EF] rounded-lg group-hover:bg-[#CB9135]/10 transition-colors">
                      <Calendar className="h-5 w-5 text-[#2F2E2E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2F2E2E]">Intro call</h3>
                      <p className="text-xs text-[#CB9135] font-medium">Free · 30 minutes</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-[#E5E7EB] group-hover:text-[#4B5563] transition-colors ml-auto" />
                  </div>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    Tell me what&apos;s broken. I&apos;ll tell you if I can help — and if I can&apos;t, who probably can.
                  </p>
                </Card>
              </a>
              <a href={meetingLinks.consultation.url} target="_blank" rel="noopener noreferrer">
                <Card className="p-6 rounded-2xl border-[#E5E7EB] hover:shadow-lg hover:border-[#CB9135]/30 group cursor-pointer h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-[#F1F1EF] rounded-lg group-hover:bg-[#CB9135]/10 transition-colors">
                      <Calendar className="h-5 w-5 text-[#2F2E2E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2F2E2E]">Paid consultation</h3>
                      <p className="text-xs text-[#4B5563] font-medium">Paid · deep technical session</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-[#E5E7EB] group-hover:text-[#4B5563] transition-colors ml-auto" />
                  </div>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    For teams that already know what they need — architecture review, integration design, or a
                    sanity check before they build.
                  </p>
                </Card>
              </a>
            </div>
          </MotionSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <MotionSection>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2F2E2E] mb-6 tracking-tight">Or send a message</h2>
              {submitted ? (
                <Card className="p-10 rounded-2xl border-[#E5E7EB] text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                    <CheckCircle2 className="h-12 w-12 text-[#2F2E2E] mx-auto mb-5" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#2F2E2E] mb-2">Check your email client</h3>
                  <p className="text-[#4B5563] mb-6">
                    Your mail client should have opened — if not, email{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[#2F2E2E] underline hover:text-[#CB9135]"
                    >
                      {siteConfig.email}
                    </a>{" "}
                    directly.
                  </p>
                  <Button
                    className="bg-[#2F2E2E] hover:bg-[#1a1919] text-white px-6 h-11 transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", company: "", message: "" });
                    }}
                  >
                    Send Another
                  </Button>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm text-[#2F2E2E]">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange("name")}
                        required
                        className="border-[#E5E7EB] h-11 focus:border-[#2F2E2E]"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm text-[#2F2E2E]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange("email")}
                        required
                        className="border-[#E5E7EB] h-11 focus:border-[#2F2E2E]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm text-[#2F2E2E]">
                      Company <span className="text-[#9CA3AF]">(optional)</span>
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={handleChange("company")}
                      className="border-[#E5E7EB] h-11 focus:border-[#2F2E2E]"
                      placeholder="Company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm text-[#2F2E2E]">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange("message")}
                      required
                      className="border-[#E5E7EB] min-h-[140px] focus:border-[#2F2E2E] resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-[#2F2E2E] hover:bg-[#1a1919] text-white px-8 h-14 text-sm transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </MotionSection>

            <MotionSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#2F2E2E] mb-5 tracking-tight">Preferred contact</h3>
                  <div className="space-y-4">
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 text-[#4B5563] hover:text-[#2F2E2E] transition-colors group"
                    >
                      <div className="p-2.5 bg-[#F1F1EF] rounded-lg group-hover:bg-[#E5E7EB] transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <span className="text-sm">LinkedIn — best for intros</span>
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3.5 text-[#4B5563] hover:text-[#2F2E2E] transition-colors group"
                    >
                      <div className="p-2.5 bg-[#F1F1EF] rounded-lg group-hover:bg-[#E5E7EB] transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span className="text-sm">{siteConfig.email}</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2F2E2E] mb-4 tracking-tight">Find me on</h3>
                  <PlatformLinksRow size="md" showLabels={true} className="flex-wrap gap-4" />
                </div>

                <Card className="p-6 rounded-2xl border-[#E5E7EB] bg-[#F1F1EF]">
                  <h4 className="font-semibold text-[#2F2E2E] mb-2">Availability</h4>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                    Currently available for freelance, consulting, and senior contract work. Typical response time:
                    within 24 hours.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-[#D1D5DB] text-[#4B5563] hover:bg-transparent">
                      Fiverr Pro
                    </Badge>
                    <Badge variant="outline" className="text-xs border-[#D1D5DB] text-[#4B5563] hover:bg-transparent">
                      Toptal
                    </Badge>
                    <Badge variant="outline" className="text-xs border-[#D1D5DB] text-[#4B5563] hover:bg-transparent">
                      Direct Hire
                    </Badge>
                  </div>
                </Card>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>
    </main>
  );
}
