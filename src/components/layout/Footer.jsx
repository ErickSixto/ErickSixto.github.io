import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Calendar } from "lucide-react";
import { Separator } from "../ui/separator";
import { PlatformLinksCompact } from "../PlatformLinks";
import { siteConfig, meetingLinks } from "../../data/mock";

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2F2E2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={siteConfig.monogramDark} alt="ES" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-base tracking-tight leading-none">Erick Sixto</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.15em] leading-none mt-1">{siteConfig.descriptor}</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mt-4">
              Senior Salesforce Specialist. Available for consulting, freelance, and senior contract work.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-600 mb-5">Navigation</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-600 mb-5">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2.5">
                <Linkedin className="h-4 w-4 flex-shrink-0" /> LinkedIn
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0" /> {siteConfig.email}
              </a>
            </div>
            <div className="mt-5">
              <PlatformLinksCompact />
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-600 mb-5">Schedule</h4>
            <div className="flex flex-col gap-3">
              <a href={meetingLinks.discovery.url} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2.5">
                <Calendar className="h-4 w-4 flex-shrink-0" /> Intro call · free
              </a>
              <a href={meetingLinks.consultation.url} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2.5">
                <Calendar className="h-4 w-4 flex-shrink-0" /> Paid consultation
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Erick Sixto. All rights reserved.</p>
          <p className="text-xs text-gray-600">Salesforce Specialist &middot; Available for hire</p>
        </div>
      </div>
    </footer>
  );
}
