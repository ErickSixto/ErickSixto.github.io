// Hero eyebrow — JetBrains Mono caps, two parts joined by a gold dot separator.
// Used at the top of every page hero (e.g. "ERICK SIXTO · SALESFORCE SPECIALIST").

import React from "react";

export function Eyebrow({
  left,
  right,
  className = "",
}: {
  left: string;
  right?: string;
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[#6B7280] ${className}`}
    >
      {left}
      {right ? (
        <>
          <span className="text-[#CB9135] mx-2">·</span>
          {right}
        </>
      ) : null}
    </div>
  );
}
