import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, Zap } from "lucide-react";

export interface PricingCardProps {
  productName: string;
  price: number;
  currency: string;
  buyLink: string;
  features: { title: string }[];
}

export function PricingCard({ productName, price, currency, buyLink, features }: PricingCardProps) {
  return (
    <Card className="p-10 rounded-2xl border-[#E5E7EB] bg-white shadow-lg max-w-xl w-full">
      <div className="mb-2 text-[13px] uppercase tracking-[0.2em] text-[#CB9135]">— One-time purchase</div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#2F2E2E] tracking-tight mb-3">{productName}</h2>
      <div className="flex items-baseline gap-2 mb-8">
        <span className="text-5xl md:text-6xl font-bold text-[#2F2E2E] tabular-nums tracking-tight">${price}</span>
        <span className="text-sm text-[#4B5563]">{currency}</span>
      </div>

      <a href={buyLink} target="_blank" rel="noopener noreferrer" className="block">
        <Button className="w-full bg-[#2F2E2E] hover:bg-[#1a1919] text-white h-14 text-sm transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]">
          Checkout with Stripe
        </Button>
      </a>

      <div className="mt-6 grid grid-cols-2 gap-3 text-[11px] uppercase tracking-[0.12em] text-[#4B5563]">
        <div className="flex flex-col items-center gap-1.5 text-center">
          <Lock className="h-4 w-4 text-[#CB9135]" />
          Secure Stripe
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <Zap className="h-4 w-4 text-[#CB9135]" />
          Instant install URL
        </div>
      </div>

      {features.length > 0 && (
        <div className="mt-8 pt-8 border-t border-[#E5E7EB]">
          <p className="text-xs uppercase tracking-[0.18em] text-[#CB9135] font-medium mb-4">What&apos;s included</p>
          <ul className="space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#2F2E2E] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#4B5563] leading-relaxed">{f.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
