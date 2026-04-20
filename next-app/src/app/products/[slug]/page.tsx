import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProductHero } from "@/components/product-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { FaqAccordion } from "@/components/faq-accordion";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getAllProducts, getProductBySlug } from "@/content/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} — Erick Sixto`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main>
      <ProductHero
        name={product.name}
        tagline={product.tagline}
        heroImage={product.heroImage}
        buyHref={`/products/${product.slug}/buy`}
        price={product.price}
        currency={product.currency}
        status={product.status}
      />

      <section className="py-10 bg-[#F1F1EF] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/products", label: "Products" },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">— Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] tracking-tight">What&apos;s inside</h2>
          </div>
          <FeatureGrid features={product.features} />
        </div>
      </section>

      <section className="py-32 bg-[#F1F1EF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">— Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] tracking-tight">
              The long version
            </h2>
          </div>
          <article className="prose-custom text-[#2F2E2E]">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2F2E2E] mt-12 mb-4 tracking-tight first:mt-0">
                    {children}
                  </h3>
                ),
                h3: ({ children }) => (
                  <h4 className="text-xl font-semibold text-[#2F2E2E] mt-8 mb-3 tracking-tight">{children}</h4>
                ),
                p: ({ children }) => (
                  <p className="text-[#4B5563] leading-relaxed mb-5 text-[16px]">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2.5 mb-6 pl-5 list-disc marker:text-[#CB9135]">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="text-[#4B5563] leading-relaxed pl-1">{children}</li>
                ),
                strong: ({ children }) => <strong className="text-[#2F2E2E] font-semibold">{children}</strong>,
              }}
            >
              {product.body}
            </ReactMarkdown>
          </article>
        </div>
      </section>

      {product.faq.length > 0 && (
        <section className="py-32 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">— Questions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] tracking-tight">FAQ</h2>
            </div>
            <FaqAccordion items={product.faq} />
          </div>
        </section>
      )}

      <section className="py-32 bg-[#2F2E2E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">Ready to install?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            One URL. Two minutes. Works in every Salesforce edition.
          </p>
          <Link href={`/products/${product.slug}/buy`}>
            <Button className="bg-white text-[#2F2E2E] hover:bg-gray-100 px-8 h-14 text-sm font-medium transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]">
              Buy now — <span className="tabular-nums">${product.price}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
