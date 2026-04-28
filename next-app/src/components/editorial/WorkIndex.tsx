// Table-of-contents at the top of /work. Each row links to an in-page anchor.

import React from "react";
import { EditorialList } from "./EditorialList";
import type { WorkEntry } from "@/data/work";

export function WorkIndex({ entries }: { entries: WorkEntry[] }) {
  return (
    <EditorialList>
      {entries.map((entry) => (
        <a
          key={entry.id}
          href={`#${entry.id}`}
          className="grid grid-cols-[60px_1fr_auto] gap-8 py-5 text-[0.85rem] items-baseline"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.16em] text-[#6B7280]">
            {entry.number}
          </span>
          <span className="text-[#2F2E2E] font-medium tracking-[-0.005em]">
            {entry.title}
          </span>
          <span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[#6B7280]">
            {entry.industry} · {entry.year}
          </span>
        </a>
      ))}
    </EditorialList>
  );
}
