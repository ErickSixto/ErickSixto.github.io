"use client";

import React from "react";
import { Linkedin, Cloud, Github } from "lucide-react";
import { platformLinks } from "@/data/mock";

type Link = (typeof platformLinks)[number];

function PlatformIcon({ link, size = "sm" }: { link: Link; size?: "sm" | "md" }) {
  const sizeClasses = size === "sm" ? "w-6 h-6 text-[10px]" : "w-8 h-8 text-xs";
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  const innerIcon =
    link.name === "LinkedIn" ? (
      <Linkedin className={iconSize} />
    ) : link.name === "Trailblazer" ? (
      <Cloud className={iconSize} />
    ) : link.name === "GitHub" ? (
      <Github className={iconSize} />
    ) : (
      link.letter
    );

  return (
    <div
      className={`${sizeClasses} rounded-md flex items-center justify-center text-white font-bold`}
      style={{ backgroundColor: link.color }}
    >
      {innerIcon}
    </div>
  );
}

export function PlatformLinksRow({
  size = "sm",
  showLabels = true,
  className = "",
}: {
  size?: "sm" | "md";
  showLabels?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {platformLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Erick Sixto on ${link.name}`}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-2 text-[#4B5563] hover:text-[#2F2E2E] rounded-md hover:bg-[#2F2E2E]/5 transition-colors duration-200 group"
          title={link.name}
        >
          <PlatformIcon link={link} size={size} />
          {showLabels && <span className="text-sm hidden sm:inline">{link.name}</span>}
        </a>
      ))}
    </div>
  );
}

export function PlatformLinksCompact({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {platformLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Erick Sixto on ${link.name}`}
          title={link.name}
          className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] group rounded-md hover:bg-white/5 transition-colors"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold opacity-60 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110"
            style={{ backgroundColor: link.color }}
          >
            {link.name === "LinkedIn" ? (
              <Linkedin className="h-4 w-4" />
            ) : link.name === "Trailblazer" ? (
              <Cloud className="h-4 w-4" />
            ) : link.name === "GitHub" ? (
              <Github className="h-4 w-4" />
            ) : (
              link.letter
            )}
          </div>
        </a>
      ))}
    </div>
  );
}

export default PlatformLinksRow;
