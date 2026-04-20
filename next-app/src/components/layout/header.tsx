"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { siteConfig, meetingLinks } from "@/data/mock";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#F1F1EF]/95 backdrop-blur-md border-b border-[#E5E7EB]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.monogramLight}
              alt="Erick Sixto ES monogram"
              className="h-9 w-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-[#2F2E2E] font-bold text-base tracking-tight leading-none">
                Erick Sixto
              </span>
              <span className="text-[10px] text-[#4B5563] uppercase tracking-[0.15em] leading-none mt-1">
                {siteConfig.descriptor}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                aria-current={pathname === link.path ? "page" : undefined}
                className={`text-[13px] tracking-wide transition-colors duration-300 ${
                  pathname === link.path
                    ? "text-[#2F2E2E] font-medium"
                    : "text-[#4B5563] hover:text-[#2F2E2E]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={meetingLinks.discovery.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button className="bg-[#2F2E2E] hover:bg-[#1a1919] text-white text-[13px] px-5 h-9 transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <Calendar className="mr-1.5 h-3.5 w-3.5" />
                Let&apos;s talk
              </Button>
            </a>

            {/* Mobile drawer */}
            <button
              className="md:hidden p-2 text-[#2F2E2E]"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#F1F1EF] border-t border-[#E5E7EB]">
          <div className="flex flex-col gap-1 p-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-4 rounded-lg text-base transition-colors ${
                pathname === "/"
                  ? "text-[#2F2E2E] font-medium bg-white"
                  : "text-[#4B5563] hover:text-[#2F2E2E] hover:bg-white"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 rounded-lg text-base transition-colors ${
                  pathname === link.path
                    ? "text-[#2F2E2E] font-medium bg-white"
                    : "text-[#4B5563] hover:text-[#2F2E2E] hover:bg-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <a
                href={meetingLinks.discovery.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                <Button className="bg-[#2F2E2E] text-white w-full h-10 hover:bg-[#1a1919]">
                  <Calendar className="mr-2 h-4 w-4" />
                  Let&apos;s talk
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
