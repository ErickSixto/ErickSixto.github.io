import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { getAllProducts } from "@/content/products";

export const metadata = {
  title: "Products — Erick Sixto",
  description: "Salesforce-native tools that explain your org and ship the fix.",
};

export default function ProductsIndexPage() {
  const products = getAllProducts().filter((p) => p.status === "live" || p.status === "coming-soon");

  return (
    <main className="pt-20">
      <section className="py-32 bg-[#F1F1EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">— Products</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2E] mb-6 tracking-tight">
            Tools I&apos;ve shipped
          </h1>
          <p className="text-lg text-[#4B5563] max-w-2xl leading-relaxed">
            Salesforce-native products that solve a specific problem I got tired of fixing by hand.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <p className="text-[#4B5563]">No products yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="block h-full">
                  <Card className="rounded-2xl border-[#E5E7EB] hover:shadow-lg hover:border-[#CB9135]/30 overflow-hidden h-full flex flex-col group cursor-pointer">
                    <div className="h-1 bg-[#CB9135] group-hover:h-1.5 transition-all duration-500" />
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge
                          variant={product.status === "live" ? "secondary" : "outline"}
                          className="text-xs bg-[#F1F1EF] text-[#4B5563] hover:bg-[#F1F1EF]"
                        >
                          {product.status === "live" ? "Available now" : "Coming soon"}
                        </Badge>
                      </div>
                      <h2 className="text-2xl font-semibold text-[#2F2E2E] mb-2 tracking-tight group-hover:text-[#CB9135] transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-[#4B5563] leading-relaxed mb-6 flex-grow">{product.tagline}</p>
                      <div className="flex items-end justify-between pt-5 border-t border-[#E5E7EB]">
                        <div>
                          <p className="text-xs uppercase tracking-[0.15em] text-[#4B5563] mb-1">Price</p>
                          <p className="text-2xl font-bold text-[#2F2E2E] tabular-nums tracking-tight">
                            ${product.price}{" "}
                            <span className="text-xs font-medium text-[#4B5563]">{product.currency}</span>
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm text-[#2F2E2E] group-hover:text-[#CB9135] font-medium transition-all duration-300 group-hover:gap-3">
                          Learn more <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
