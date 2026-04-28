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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-wrap justify-between items-center gap-4 text-[0.74rem] text-[#6B7280]">
        <div className="flex items-center gap-3 flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.monogramLight}
            alt=""
            aria-hidden="true"
            className="h-7 w-auto"
          />
          <div>
            <strong className="text-[#2F2E2E] font-semibold">Erick Sixto</strong>
            <span className="ml-3 font-mono text-[0.62rem] tracking-[0.16em] uppercase">
              — Salesforce Specialist
            </span>
          </div>
        </div>

        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className="text-[#4B5563] hover:text-[#2F2E2E] transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex justify-end">
          <span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase">
            © {year} · ericksixto.com
          </span>
        </div>
      </div>
    </footer>
  );
}
