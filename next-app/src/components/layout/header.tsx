"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { meetingLinks } from "@/data/mock";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-canvas transition-[border-color,box-shadow] duration-300 ease-out ${
        scrolled
          ? "border-b border-ink/[0.067] shadow-[0_6px_24px_-18px_rgba(47,46,46,0.4)]"
          : "border-b border-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-6">
        <Link href="/" className="flex flex-col leading-none flex-1 min-w-0 group">
          <span className="text-[0.95rem] sm:text-[1rem] font-semibold tracking-[-0.01em] text-ink truncate">
            Erick Sixto
          </span>
          <span className="hidden sm:inline-block font-mono text-[0.55rem] tracking-[0.22em] uppercase text-muted mt-1">
            Salesforce Specialist
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`text-[0.78rem] transition-colors duration-200 ${
                  isActive ? "text-ink font-medium" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex justify-end shrink-0 md:flex-1">
          <a
            href={meetingLinks.discovery.url}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[0.7rem] sm:text-[0.72rem] border border-ink/[0.2] text-ink px-3 sm:px-4 py-1.5 sm:py-2 rounded-[2px] hover:bg-ink hover:text-canvas transition-colors duration-200"
          >
            Book a call
          </a>
        </div>
      </div>

      {/* Mobile nav: links distributed evenly below the bar on small screens */}
      <nav className="md:hidden border-t border-ink/[0.067] flex justify-around px-3 py-2.5 text-[0.78rem]">
        {navLinks.map((link) => {
          const isActive =
            link.path === "/"
              ? pathname === "/"
              : pathname.startsWith(link.path);
          return (
            <Link
              key={link.path}
              href={link.path}
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "text-ink font-medium" : "text-muted"}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
