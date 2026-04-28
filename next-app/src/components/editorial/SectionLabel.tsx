// Section label — gold mono caps with a leading em-dash. Used for every
// section header on every page (e.g. "— Operating principles", "— Selected work").

import React from "react";

export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[#CB9135] font-medium ${className}`}
    >
      — {children}
    </span>
  );
}
