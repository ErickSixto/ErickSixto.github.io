import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { EditorialList } from "@/components/editorial/EditorialList";
import { EditorialButton } from "@/components/editorial/EditorialButton";
import { ClosingCTA } from "@/components/editorial/ClosingCTA";
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

const ACCESS_ANALYZER_SHOTS = [
  {
    src: "/products/access-analyzer/crud-results.png",
    caption: "CRUD results — every source evaluated, decisive winner highlighted.",
  },
  {
    src: "/products/access-analyzer/fls-results.png",
    caption: "Field-level detail — read, edit, and hidden states per field.",
  },
  {
    src: "/products/access-analyzer/record-widget.png",
    caption: "Record-page widget — auto-detects the object and user in context.",
  },
  {
    src: "/products/access-analyzer/app-overview.png",
    caption: "Standalone app — for deep audits on any user and permission.",
  },
];

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const statusLabel = product.status === "live" ? "Available now" : "Coming soon";

  return (
    <main>
      <Hero
        eyebrowLeft="Products"
        eyebrowRight={statusLabel}
        headlineLead=""
        headlineBold={product.name}
        lead={product.tagline}
      />

      {/* Price + CTA */}
      <section className="max-w-[880px] mx-auto px-6 py-10 border-t border-[#2F2E2E11] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <SectionLabel className="mb-2 inline-block">{statusLabel}</SectionLabel>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-[2rem] font-semibold text-[#2F2E2E] tabular-nums tracking-[-0.02em]">
              ${product.price}
            </span>
            <span className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[#6B7280]">
              {product.currency}
            </span>
          </div>
        </div>
        <EditorialButton href={`/products/${product.slug}/buy`}>
          Get Access →
        </EditorialButton>
      </section>

      {/* Compatibility */}
      {product.requiredEditions && (
        <section className="max-w-[880px] mx-auto px-6 py-5 border-t border-[#2F2E2E11]">
          <p className="text-[0.85rem] leading-[1.6] text-[#4B5563]">
            <span className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-[#6B7280] mr-3">
              Requires
            </span>
            {product.requiredEditions}.
            {product.notSupportedEditions && (
              <> Not supported on {product.notSupportedEditions} editions.</>
            )}
          </p>
        </section>
      )}

      {/* Features */}
      {product.features.length > 0 && (
        <section className="max-w-[880px] mx-auto px-6 py-16 border-t border-[#2F2E2E11]">
          <div className="mb-10">
            <SectionLabel className="mb-3 inline-block">Features</SectionLabel>
            <h2 className="font-normal text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E]">
              What&apos;s <strong className="font-bold">inside.</strong>
            </h2>
          </div>
          <EditorialList>
            {product.features.map((f, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-3 sm:gap-8 py-5 items-baseline"
              >
                <div className="text-[0.9rem] font-semibold text-[#2F2E2E]">{f.title}</div>
                <p className="text-[0.9rem] leading-[1.6] text-[#4B5563]">{f.description}</p>
              </div>
            ))}
          </EditorialList>
        </section>
      )}

      {/* Screenshots — Access Analyzer only */}
      {product.slug === "access-analyzer" && (
        <section className="max-w-[880px] mx-auto px-6 py-16 border-t border-[#2F2E2E11]">
          <SectionLabel className="mb-8 inline-block">In action</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ACCESS_ANALYZER_SHOTS.map((shot) => (
              <figure key={shot.src}>
                <div className="border border-[#2F2E2E11] bg-[#F7F7F5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-[#6B7280] mt-3">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Long-form body */}
      {product.body.trim() && (
        <section className="max-w-[640px] mx-auto px-6 py-16 border-t border-[#2F2E2E11]">
          <SectionLabel className="mb-6 inline-block">Overview</SectionLabel>
          <article>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h3 className="font-semibold text-[1.1rem] text-[#2F2E2E] mt-10 mb-3 tracking-[-0.005em] first:mt-0">
                    {children}
                  </h3>
                ),
                h3: ({ children }) => (
                  <h4 className="font-semibold text-[0.95rem] text-[#2F2E2E] mt-8 mb-2 tracking-[-0.005em]">
                    {children}
                  </h4>
                ),
                p: ({ children }) => (
                  <p className="text-[0.95rem] leading-[1.8] text-[#4B5563] mb-5">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 mb-6 pl-4 list-disc marker:text-[#6B7280]">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="text-[0.9rem] leading-[1.6] text-[#4B5563]">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-[#2F2E2E] font-semibold">{children}</strong>
                ),
              }}
            >
              {product.body}
            </ReactMarkdown>
          </article>
        </section>
      )}

      {/* FAQ */}
      {product.faq.length > 0 && (
        <section className="max-w-[640px] mx-auto px-6 py-16 border-t border-[#2F2E2E11]">
          <SectionLabel className="mb-8 inline-block">Questions</SectionLabel>
          <EditorialList>
            {product.faq.map((item, i) => (
              <div key={i} className="py-6">
                <p className="text-[0.95rem] font-semibold text-[#2F2E2E] mb-3">{item.q}</p>
                <p className="text-[0.9rem] leading-[1.7] text-[#4B5563]">{item.a}</p>
              </div>
            ))}
          </EditorialList>
        </section>
      )}

      <ClosingCTA
        label="Get access"
        questionLead="Ready to"
        questionBold="install?"
        body="One URL. Two minutes. Works in every Salesforce edition that supports installed Apex code."
        primary={{
          label: `Buy now — $${product.price}`,
          href: `/products/${product.slug}/buy`,
        }}
      />
    </main>
  );
}
