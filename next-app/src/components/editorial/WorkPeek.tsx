// Homepage peek: three lean rows. Each row links to /work#<id>.
// Includes a "see all N" link below the list.

import React from "react";
import Link from "next/link";
import { EditorialList } from "./EditorialList";
import type { WorkEntry } from "@/data/work";

export function WorkPeek({
  entries,
  totalCount,
}: {
  entries: WorkEntry[];
  totalCount: number;
}) {
  return (
    <>
      <EditorialList>
        {entries.map((entry) => (
          <Link
            key={entry.id}
            href={`/work#${entry.id}`}
            className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-8 py-7 items-baseline group"
          >
            <div>
              <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[#4B5563] mb-2">
                <span className="text-[#2F2E2E] font-medium">{entry.client}</span>
                <span className="mx-2 text-[#2F2E2E33]">·</span>
                {entry.industry}
                <span className="mx-2 text-[#2F2E2E33]">·</span>
                {entry.year}
              </div>
              <div className="text-[1.1rem] font-medium text-[#2F2E2E] mb-1 tracking-[-0.005em] group-hover:text-[#2F2E2E]">
                {entry.title}
              </div>
              <div className="text-[0.9rem] text-[#4B5563]">{entry.outcome}</div>
            </div>
            <span className="font-mono text-[0.7rem] text-[#2F2E2E] border-b border-[#2F2E2E55] pb-px self-center">
              read →
            </span>
          </Link>
        ))}
      </EditorialList>
      <div className="text-right mt-10">
        <Link
          href="/work"
          className="font-mono text-[0.7rem] text-[#2F2E2E] border-b border-[#CB9135] pb-px"
        >
          see all {totalCount} engagements →
        </Link>
      </div>
    </>
  );
}
