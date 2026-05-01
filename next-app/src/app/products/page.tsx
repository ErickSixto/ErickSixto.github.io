import Link from "next/link";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { EditorialList } from "@/components/editorial/EditorialList";
import { ClosingCTA } from "@/components/editorial/ClosingCTA";
import { meetingLinks } from "@/data/mock";
import { getAllProducts } from "@/content/products";

export const metadata = {
  title: "Products — Erick Sixto",
  description: "Salesforce-native tools that explain your org and ship the fix.",
};

export default function ProductsIndexPage() {
  const products = getAllProducts().filter(
    (p) => p.status === "live" || p.status === "coming-soon"
  );

  return (
    <main>
      <Hero
        eyebrowLeft="Products"
        headlineLead="Tools I've"
        headlineBold="shipped."
        lead="Salesforce-native products that solve a specific problem I got tired of fixing by hand. Each one runs in your org, not on my server."
      />

      <section className="max-w-[880px] mx-auto px-6 py-12 border-t border-[#2F2E2E11]">
        <SectionLabel className="mb-6 inline-block">Available</SectionLabel>
        {products.length === 0 ? (
          <p className="text-[#4B5563]">No products available right now.</p>
        ) : (
          <EditorialList>
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 sm:gap-12 py-8 items-baseline group"
              >
                <div>
                  <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#4B5563] mb-2">
                    {product.status === "live" ? "Available now" : "Coming soon"}
                  </div>
                  <h2 className="text-[1.4rem] font-semibold text-[#2F2E2E] mb-2 tracking-[-0.01em]">
                    {product.name}
                  </h2>
                  <p className="text-[0.95rem] leading-[1.6] text-[#4B5563] max-w-[60ch]">
                    {product.tagline}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-3">
                  <div>
                    <span className="text-[1.4rem] font-semibold text-[#2F2E2E] tabular-nums tracking-[-0.005em]">
                      ${product.price}
                    </span>
                    <span className="text-[0.72rem] text-[#4B5563] ml-1.5 font-mono uppercase tracking-[0.16em]">
                      {product.currency}
                    </span>
                  </div>
                  <span className="font-mono text-[0.7rem] text-[#2F2E2E] border-b border-[#2F2E2E55] pb-px">
                    learn more →
                  </span>
                </div>
              </Link>
            ))}
          </EditorialList>
        )}
      </section>

      <ClosingCTA
        label="Custom build?"
        questionLead="Need something"
        questionBold="that doesn't exist yet?"
        body="If a packaged tool would solve your problem but no one's built it, we can scope a custom one in our discovery call."
        primary={{
          label: "Book a 30-minute call",
          href: meetingLinks.discovery.url,
          external: true,
        }}
      />
    </main>
  );
}
