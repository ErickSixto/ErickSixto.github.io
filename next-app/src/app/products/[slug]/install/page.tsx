import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CopyButton } from "@/components/copy-button";
import { CheckCircle2, ExternalLink, PartyPopper, BookOpen } from "lucide-react";
import { getAllProducts, getProductBySlug } from "@/content/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Install" };
  return {
    title: `Install ${product.name} — Erick Sixto`,
    description: `Install URLs and setup steps for ${product.name}.`,
  };
}

export default async function InstallPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const steps = [
    {
      n: "01",
      title: "Open the install URL",
      description: "Copy the URL for your target org (Production or Sandbox), paste it into a browser where you're already logged in to Salesforce.",
    },
    {
      n: "02",
      title: "Sign in as a System Administrator",
      description: "Salesforce asks you to log in to the target org. Use an account with permission to install unlocked packages.",
    },
    {
      n: "03",
      title: "Click Install",
      description: "Choose Install for All Users (recommended) or Install for Specific Profiles if you want tighter control. Click Install. Takes about 2 minutes.",
    },
    {
      n: "04",
      title: "Assign the Access Analyzer Admin perm set",
      description: "Go to Setup → Permission Sets → Access Analyzer Admin → Manage Assignments → Add the admins who should use the tool.",
    },
  ];

  return (
    <main className="pt-20 bg-[#F1F1EF]">
      <section className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/products", label: "Products" },
              { href: `/products/${product.slug}`, label: product.name },
              { label: "Install" },
            ]}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm mb-6">
            <PartyPopper className="h-4 w-4 text-[#CB9135]" />
            <span className="text-xs uppercase tracking-[0.15em] text-[#2F2E2E] font-medium">Thanks for your purchase</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2E] mb-5 tracking-tight">
            Install {product.name}
          </h1>
          <p className="text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Your install links are ready. Pick Production or Sandbox, paste into your Salesforce org, and you&apos;re
            running in under two minutes.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {product.installUrlProd && (
            <Card className="p-8 rounded-2xl border-[#E5E7EB] bg-white">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-[#2F2E2E] text-white hover:bg-[#2F2E2E]">Production</Badge>
                <h2 className="text-xl font-semibold text-[#2F2E2E] tracking-tight">Install in Production</h2>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-5">
                Use this URL for Production orgs. Salesforce will ask you to sign in before showing the installer.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={product.installUrlProd} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-[#2F2E2E] hover:bg-[#1a1919] text-white h-11 text-sm">
                    Open installer <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <CopyButton value={product.installUrlProd} label="Copy URL" />
              </div>
              <p className="mt-4 text-xs text-[#4B5563] break-all font-mono tabular-nums">{product.installUrlProd}</p>
            </Card>
          )}

          {product.installUrlSandbox && (
            <Card className="p-8 rounded-2xl border-[#E5E7EB] bg-white">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="outline" className="border-[#CB9135]/30 text-[#CB9135]">
                  Sandbox / Dev / Scratch
                </Badge>
                <h2 className="text-xl font-semibold text-[#2F2E2E] tracking-tight">Install in Sandbox</h2>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-5">
                Use this URL for Sandbox, Developer Edition, or Scratch orgs. Test it here before rolling to Production.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={product.installUrlSandbox} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-[#2F2E2E]/20 text-[#2F2E2E] hover:bg-[#CB9135] hover:text-white hover:border-[#CB9135] h-11 text-sm"
                  >
                    Open installer <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <CopyButton value={product.installUrlSandbox} label="Copy URL" />
              </div>
              <p className="mt-4 text-xs text-[#4B5563] break-all font-mono tabular-nums">
                {product.installUrlSandbox}
              </p>
            </Card>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#CB9135] mb-4">— Setup</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2E2E] tracking-tight">How to install</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.n}>
                <span className="text-4xl md:text-5xl font-bold text-[#CB9135]/30 leading-none tabular-nums tracking-tight">
                  {step.n}
                </span>
                <h3 className="font-semibold text-[#2F2E2E] mt-3 mb-2 text-lg tracking-tight">{step.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-[#F1F1EF] flex items-start gap-4">
            <div className="p-2.5 bg-white rounded-lg flex-shrink-0">
              <BookOpen className="h-5 w-5 text-[#CB9135]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#2F2E2E] mb-1.5">Need help?</h4>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                Stuck on the install? Reply to your Stripe receipt or reach out via the contact page.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-[#2F2E2E] hover:text-[#CB9135] font-medium transition-colors">
                Contact support <CheckCircle2 className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
