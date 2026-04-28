"use client";

import React from "react";
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

  return (
    <header className="border-b border-[#2F2E2E11] bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="text-[0.95rem] font-semibold tracking-[-0.01em] text-[#2F2E2E]">
          Erick Sixto
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
                  isActive ? "text-[#2F2E2E] font-medium" : "text-[#4B5563] hover:text-[#2F2E2E]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={meetingLinks.discovery.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.72rem] border border-[#2F2E2E33] text-[#2F2E2E] px-4 py-2 rounded-[2px] hover:bg-[#2F2E2E] hover:text-[#F1F1EF] transition-colors duration-200"
        >
          Book a call
        </a>
      </div>

      {/* Mobile nav: keep simple — links inline below the bar on small screens */}
      <nav className="md:hidden border-t border-[#2F2E2E11] flex justify-center gap-6 px-6 py-3 text-[0.78rem]">
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
              className={isActive ? "text-[#2F2E2E] font-medium" : "text-[#4B5563]"}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
