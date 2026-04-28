import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PricingCard } from "@/components/pricing-card";
import { getAllProducts, getProductBySlug } from "@/content/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `Buy ${product.name} — Erick Sixto`,
    description: `Purchase ${product.name} — ${product.tagline}`,
  };
}

export default async function BuyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-[#F1F1EF]">
      <section className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/products", label: "Products" },
              { href: `/products/${product.slug}`, label: product.name },
              { label: "Buy" },
            ]}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
            <div className="max-w-xl">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">— Checkout</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2E] mb-6 tracking-tight">
                Install {product.name} in your Salesforce org
              </h1>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-8">{product.tagline}.</p>

              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#4B5563] font-medium mb-2">What happens next</p>
                  <ol className="space-y-2.5 text-sm text-[#4B5563] list-decimal pl-5 marker:text-[#4B5563]">
                    <li>Complete Stripe checkout on the next screen.</li>
                    <li>You&apos;ll be redirected to a page with your install URLs.</li>
                    <li>Open the URL in any Salesforce org — install takes ~2 minutes.</li>
                    <li>Assign the permission set and open the app.</li>
                  </ol>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#4B5563] font-medium mb-2">Guarantees</p>
                  <ul className="space-y-2 text-sm text-[#4B5563]">
                    <li>Secure Stripe checkout — we never see your card.</li>
                    <li>Instant install URL — no waiting, no Security Review queue.</li>
                  </ul>
                </div>
              </div>
            </div>

            <PricingCard
              productName={product.name}
              price={product.price}
              currency={product.currency}
              buyLink={product.buyLink}
              features={product.features}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
