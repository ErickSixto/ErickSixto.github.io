import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { ArrowRight, ExternalLink, CheckCircle2, Calendar, Target, Lightbulb, Layers } from "lucide-react";
import { MotionSection, StaggerContainer, StaggerItem } from "../components/animations";
import { siteConfig, projects, meetingLinks } from "../data/mock";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 bg-[#F1F1EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionSection>
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">Projects</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2E] mb-6">Selected work</h1>
              <p className="text-lg text-[#4B5563] max-w-lg leading-relaxed">
                Real-world Salesforce projects that solved real business problems. Click any project to see the full story.
              </p>
            </MotionSection>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#CB9135]/10 to-transparent rounded-2xl" />
              <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 border-2 border-[#CB9135]/20 rounded-2xl" />
              <img
                src={siteConfig.workspace}
                alt="Development workspace"
                loading="lazy"
                className="relative rounded-2xl w-full object-cover shadow-2xl shadow-black/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" stagger={0.06}>
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <Card
                    className="border-[#E5E7EB] hover:shadow-lg hover:border-[#CB9135]/30 transition-all duration-200 cursor-pointer group h-full flex flex-col overflow-hidden"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="h-1 bg-[#CB9135] group-hover:h-1.5 transition-all duration-200" />
                    <div className="p-7 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs bg-[#F1F1EF] text-[#4B5563] hover:bg-[#F1F1EF]">{project.category}</Badge>
                          {project.industry && (
                            <Badge variant="outline" className="text-xs border-[#CB9135]/30 text-[#CB9135] hover:bg-transparent">{project.industry}</Badge>
                          )}
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#E5E7EB] group-hover:text-[#4B5563] transition-colors duration-200" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#2F2E2E] mb-1">{project.title}</h3>
                      <p className="text-sm text-[#CB9135] font-medium mb-4">{project.client}</p>
                      <p className="text-sm text-[#4B5563] leading-relaxed mb-5 flex-grow">{project.goal}</p>
                      <div className="flex gap-6 mb-5">
                        {project.impact.map((imp, j) => (
                          <div key={j}>
                            <p className="text-xl font-bold text-[#2F2E2E]">{imp.metric}</p>
                            <p className="text-xs text-[#4B5563]">{imp.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, j) => (
                          <Badge key={j} variant="outline" className="text-xs border-[#E5E7EB] text-[#4B5563] hover:bg-transparent">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white pt-10">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="w-fit text-xs bg-[#F1F1EF] text-[#4B5563] hover:bg-[#F1F1EF]">{selectedProject.category}</Badge>
                  {selectedProject.industry && (
                    <Badge variant="outline" className="w-fit text-xs border-[#CB9135]/30 text-[#CB9135] hover:bg-transparent">{selectedProject.industry}</Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl font-bold text-[#2F2E2E]">{selectedProject.title}</DialogTitle>
                <p className="text-sm text-[#CB9135] font-medium">{selectedProject.client}</p>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-[#CB9135] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2F2E2E] mb-1">What it does</h4>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{selectedProject.goal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-[#CB9135] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2F2E2E] mb-1">Business impact</h4>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{selectedProject.businessImpact}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.impact.map((imp, idx) => (
                    <div key={idx} className="bg-[#F1F1EF] rounded-lg p-5 text-center">
                      <p className="text-2xl font-bold text-[#2F2E2E]">{imp.metric}</p>
                      <p className="text-xs text-[#4B5563] mt-1">{imp.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#CB9135] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2F2E2E] mb-2">Key capabilities</h4>
                    <ul className="space-y-1.5">
                      {selectedProject.keyCapabilities.map((cap, i) => (
                        <li key={i} className="text-sm text-[#4B5563] flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#CB9135] flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="h-5 w-5 text-[#CB9135] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2F2E2E] mb-2">Technologies used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-[#E5E7EB] text-[#4B5563] hover:bg-transparent">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-24 bg-[#2F2E2E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MotionSection>
            <h2 className="text-3xl font-bold text-white mb-5">Have a similar challenge?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">Let's discuss what's not working and map out an approach — free, no commitment.</p>
            <a href={meetingLinks.discovery.url} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-[#2F2E2E] hover:bg-gray-100 px-8 h-12 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                <Calendar className="mr-2 h-4 w-4" />
                {meetingLinks.discovery.shortLabel}
              </Button>
            </a>
          </MotionSection>
        </div>
      </section>
    </main>
  );
}
