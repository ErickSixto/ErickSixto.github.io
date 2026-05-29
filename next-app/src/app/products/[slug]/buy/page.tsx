import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { EditorialList } from "@/components/editorial/EditorialList";
import { EditorialButton } from "@/components/editorial/EditorialButton";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/animations";
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

const STEPS = [
  "Complete Stripe checkout on the next screen.",
  "Get redirected to a page with your install URLs.",
  "Open the URL in any Salesforce org. Install takes about 2 minutes.",
  "Assign the permission set and open the app.",
];

const GUARANTEES = [
  "Secure Stripe checkout. We never see your card.",
  "Instant install URL. No waiting, no Security Review queue.",
];

export default async function BuyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main>
      <section className="max-w-[880px] mx-auto px-6 pt-10">
        <Breadcrumbs
          items={[
            { href: "/products", label: "Products" },
            { href: `/products/${product.slug}`, label: product.name },
            { label: "Buy" },
          ]}
        />
      </section>

      <Hero
        eyebrowLeft="Checkout"
        eyebrowRight={`$${product.price} ${product.currency}`}
        headlineLead="Install"
        headlineBold={`${product.name}.`}
        lead={`${product.tagline}.`}
      />

      {/* Price + checkout */}
      <section className="max-w-[880px] mx-auto px-6 py-10 border-t border-ink/[0.067]">
        <Reveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <SectionLabel className="mb-2 inline-block">One-time purchase</SectionLabel>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-[2.5rem] font-semibold text-ink tabular-nums tracking-[-0.02em]">
                ${product.price}
              </span>
              <span className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-muted">
                {product.currency}
              </span>
            </div>
          </div>
          <EditorialButton href={product.buyLink} external>
            Checkout with Stripe →
          </EditorialButton>
        </Reveal>
        <Reveal>
          <ul className="mt-8 space-y-3">
            {GUARANTEES.map((g) => (
              <li
                key={g}
                className="text-[0.9rem] leading-[1.6] text-muted pl-5 relative before:content-['+'] before:absolute before:left-0 before:text-gold before:font-medium"
              >
                {g}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* What happens next */}
      <section className="max-w-[880px] mx-auto px-6 py-16 border-t border-ink/[0.067]">
        <Reveal className="mb-10 max-w-[56ch]">
          <SectionLabel className="mb-3 inline-block">What happens next</SectionLabel>
          <h2 className="font-extralight text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-ink">
            Four steps, <strong className="font-bold">two minutes.</strong>
          </h2>
        </Reveal>
        <EditorialList>
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-[52px_1fr] sm:grid-cols-[64px_1fr] gap-5 sm:gap-8 py-6 items-baseline"
            >
              <span className="font-mono text-[0.7rem] tracking-[0.16em] text-gold font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[0.95rem] leading-[1.6] text-ink">{step}</p>
            </div>
          ))}
        </EditorialList>
        <Reveal>
          <p className="mt-10 text-[0.9rem] leading-[1.7] text-muted">
            Not ready yet?{" "}
            <Link
              href={`/products/${product.slug}`}
              className="text-ink border-b border-gold pb-px"
            >
              Read the full overview
            </Link>{" "}
            or email{" "}
            <a
              href="mailto:sixto@ericksixto.com"
              className="text-ink border-b border-ink/[0.2] pb-px"
            >
              sixto@ericksixto.com
            </a>
            .
          </p>
        </Reveal>
      </section>
    </main>
  );
}
