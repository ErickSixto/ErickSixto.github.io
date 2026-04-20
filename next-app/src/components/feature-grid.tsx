import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  if (!features.length) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((f, i) => (
        <Card
          key={i}
          className="p-7 rounded-2xl border-[#E5E7EB] hover:shadow-lg hover:border-[#CB9135]/30 transition-all"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#F1F1EF] rounded-lg flex-shrink-0">
              <CheckCircle2 className="h-5 w-5 text-[#2F2E2E]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#2F2E2E] mb-1.5 tracking-tight">{f.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{f.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
