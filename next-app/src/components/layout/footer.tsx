import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/mock";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2F2E2E11] mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-between sm:items-center sm:gap-4 text-[0.74rem] text-[#4B5563]">
        <div className="flex items-center gap-3 sm:flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.monogramLight}
            alt=""
            aria-hidden="true"
            className="h-7 w-auto shrink-0"
          />
          <div>
            <strong className="text-[#2F2E2E] font-semibold">Erick Sixto</strong>
            <span className="hidden sm:inline ml-3 font-mono text-[0.62rem] tracking-[0.16em] uppercase">
              — Salesforce Specialist
            </span>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className="text-[#4B5563] hover:text-[#2F2E2E] transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="sm:flex-1 sm:flex sm:justify-end">
          <span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase">
            © {year} · ericksixto.com
          </span>
        </div>
      </div>
    </footer>
  );
}
