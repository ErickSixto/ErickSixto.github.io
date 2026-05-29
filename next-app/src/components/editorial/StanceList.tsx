// Renders the operating principles list. Each row is a two-column grid
// [P.01 number] [bold headline + rationale].

import React from "react";
import { EditorialList } from "./EditorialList";
import type { Stance } from "@/data/stances";

export function StanceList({ stances }: { stances: Stance[] }) {
  return (
    <EditorialList>
      {stances.map((s) => (
        <div
          key={s.id}
          className="grid grid-cols-[52px_1fr] sm:grid-cols-[80px_1fr] gap-5 sm:gap-8 py-6 sm:py-7 items-baseline"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.16em] text-gold font-medium">
            {s.number}
          </span>
          <div>
            <strong className="block text-[1.05rem] font-semibold text-ink tracking-[-0.005em]">
              {s.headline}
            </strong>
            {s.rationale ? (
              <p className="text-[0.92rem] text-muted leading-[1.6] max-w-[60ch] mt-2">
                {s.rationale}
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </EditorialList>
  );
}
