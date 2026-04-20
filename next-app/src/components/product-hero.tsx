import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart } from "lucide-react";

export interface ProductHeroProps {
  name: string;
  tagline: string;
  heroImage: string;
  buyHref: string;
  price: number;
  currency: string;
  status: "live" | "coming-soon" | "archived";
}

export function ProductHero({ name, tagline, heroImage, buyHref, price, currency, status }: ProductHeroProps) {
  return (
    <section className="py-32 bg-[#F1F1EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">
              — {status === "live" ? "Live Product" : status === "coming-soon" ? "Coming Soon" : "Product"}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2F2E2E] tracking-tight mb-6 leading-[1.05]">
              {name}
            </h1>
            <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-xl mb-8">{tagline}</p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href={buyHref}>
                <Button className="bg-[#2F2E2E] hover:bg-[#1a1919] text-white px-7 h-14 text-sm transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy for <span className="tabular-nums ml-1">${price}</span>
                  <span className="ml-1 opacity-70">{currency}</span>
                </Button>
              </Link>
              <a href="#features" className="inline-flex items-center gap-2 text-sm text-[#2F2E2E] hover:text-[#CB9135] font-medium transition-all duration-300">
                See what&apos;s inside <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs border-[#E5E7EB] text-[#4B5563]">
                Salesforce Unlocked Package
              </Badge>
              <Badge variant="outline" className="text-xs border-[#E5E7EB] text-[#4B5563]">
                Instant install URL
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#CB9135]/10 to-transparent rounded-2xl" />
            <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 border-2 border-[#CB9135]/20 rounded-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage}
              alt={`${name} screenshot`}
              className="relative rounded-2xl w-full object-cover shadow-2xl shadow-black/10 border border-[#E5E7EB]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
