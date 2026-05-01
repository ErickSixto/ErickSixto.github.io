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
      className={`font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[#4B5563] ${className}`}
    >
      {left}
      {right ? (
        <>
          <span className="text-[#7E5618] mx-2">·</span>
          {right}
        </>
      ) : null}
    </div>
  );
}
