import { Stance } from "@/data/stances";
import { EditorialList } from "./EditorialList";

interface StanceListProps {
  stances: Stance[];
}

export function StanceList({ stances }: StanceListProps) {
  return (
    <EditorialList>
      {stances.map((stance) => (
        <div
          key={stance.id}
          className="grid grid-cols-[80px_1fr] gap-8 py-7 items-baseline"
        >
          <span className="text-[#CB9135] font-mono text-sm">
            {stance.number}
          </span>
          <div>
            <p className="font-semibold text-[#2F2E2E]">{stance.headline}</p>
            <p className="text-[#4B5563] mt-1">{stance.rationale}</p>
          </div>
        </div>
      ))}
    </EditorialList>
  );
}
