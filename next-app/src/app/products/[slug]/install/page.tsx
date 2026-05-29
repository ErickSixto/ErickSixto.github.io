import { notFound } from "next/navigation";
import { Hero } from "@/components/editorial/Hero";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { EditorialList } from "@/components/editorial/EditorialList";
import { EditorialButton } from "@/components/editorial/EditorialButton";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CopyButton } from "@/components/copy-button";
import { Reveal } from "@/components/animations";
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

  const adminPermSet = product.adminPermissionSetName ?? `${product.name} Admin`;
  const steps = [
    {
      title: "Open the install URL",
      description:
        "Copy the URL for your target org (Production or Sandbox) and paste it into a browser where you're already logged in to Salesforce.",
    },
    {
      title: "Sign in as a System Administrator",
      description:
        "Salesforce asks you to log in to the target org. Use an account with permission to install unlocked packages.",
    },
    {
      title: "Click Install",
      description:
        "Choose Install for All Users (recommended) or Install for Specific Profiles for tighter control, then click Install. Takes about 2 minutes.",
    },
    {
      title: `Assign the ${adminPermSet} permission set`,
      description: `Go to Setup, Permission Sets, ${adminPermSet}, Manage Assignments, then add the admins who should use the tool.`,
    },
  ];

  const installBlocks = [
    {
      url: product.installUrlProd,
      badge: "Production",
      solid: true,
      heading: "Install in Production",
      copy: "Use this URL for Production orgs. Salesforce will ask you to sign in before showing the installer.",
    },
    {
      url: product.installUrlSandbox,
      badge: "Sandbox / Dev / Scratch",
      solid: false,
      heading: "Install in Sandbox",
      copy: "Use this URL for Sandbox, Developer Edition, or Scratch orgs. Test it here before rolling to Production.",
    },
  ].filter((b) => b.url);

  return (
    <main>
      <section className="max-w-[880px] mx-auto px-6 pt-10">
        <Breadcrumbs
          items={[
            { href: "/products", label: "Products" },
            { href: `/products/${product.slug}`, label: product.name },
            { label: "Install" },
          ]}
        />
      </section>

      <Hero
        eyebrowLeft="Install"
        eyebrowRight="Thanks for your purchase"
        headlineLead="Install"
        headlineBold={`${product.name}.`}
        lead="Your install links are ready. Pick Production or Sandbox, paste into your Salesforce org, and you're running in under two minutes."
      />

      {/* Install URLs */}
      <section className="max-w-[720px] mx-auto px-6 py-12 border-t border-[#2F2E2E11] space-y-6">
        {installBlocks.map((block) => (
          <Reveal key={block.badge}>
            <div className="border border-[#2F2E2E1F] bg-white rounded-[2px] p-7">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span
                  className={`font-mono text-[0.55rem] tracking-[0.16em] uppercase px-2 py-1 rounded-[2px] ${
                    block.solid
                      ? "bg-[#2F2E2E] text-[#F1F1EF]"
                      : "border border-[#7E5618]/40 text-[#7E5618]"
                  }`}
                >
                  {block.badge}
                </span>
                <h2 className="text-[1.1rem] font-semibold text-[#2F2E2E] tracking-[-0.005em]">
                  {block.heading}
                </h2>
              </div>
              <p className="text-[0.9rem] leading-[1.6] text-[#4B5563] mb-5">{block.copy}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <EditorialButton href={block.url!} external>
                  Open installer →
                </EditorialButton>
                <CopyButton value={block.url!} label="Copy URL" />
              </div>
              <p className="mt-4 font-mono text-[0.72rem] text-[#4B5563] break-all">{block.url}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* How to install */}
      <section className="max-w-[720px] mx-auto px-6 py-16 border-t border-[#2F2E2E11]">
        <Reveal className="mb-10">
          <SectionLabel className="mb-3 inline-block">Setup</SectionLabel>
          <h2 className="font-extralight text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[#2F2E2E]">
            How to <strong className="font-bold">install.</strong>
          </h2>
        </Reveal>
        <EditorialList>
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-[52px_1fr] sm:grid-cols-[64px_1fr] gap-5 sm:gap-8 py-6 items-baseline"
            >
              <span className="font-mono text-[0.7rem] tracking-[0.16em] text-[#7E5618] font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="text-[1rem] font-semibold text-[#2F2E2E] tracking-[-0.005em] mb-2">
                  {step.title}
                </div>
                <p className="text-[0.9rem] leading-[1.65] text-[#4B5563] max-w-[58ch]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </EditorialList>
      </section>

      {/* Need help */}
      <section className="max-w-[720px] mx-auto px-6 py-16 border-t border-[#2F2E2E11]">
        <Reveal>
          <div className="border border-[#2F2E2E1F] bg-[#EAE7E0] rounded-[2px] p-7">
            <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#7E5618] font-medium mb-3">
              Need help?
            </div>
            <p className="text-[0.92rem] leading-[1.7] text-[#4B5563] mb-4 max-w-[58ch]">
              Stuck on the install? Reply to your Stripe receipt, or reach out directly and I&apos;ll
              walk you through it.
            </p>
            <a
              href="mailto:sixto@ericksixto.com"
              className="font-mono text-[0.72rem] text-[#2F2E2E] border-b border-[#2F2E2E33] pb-px"
            >
              sixto@ericksixto.com →
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
