import { EditorialButton } from "@/components/editorial/EditorialButton";
import { SectionLabel } from "@/components/editorial/SectionLabel";

export const metadata = {
  title: "Page not found — Erick Sixto",
};

export default function NotFound() {
  return (
    <main className="min-h-[62vh] flex items-center">
      <section className="text-center px-6 py-28 max-w-[620px] mx-auto">
        <SectionLabel className="mb-5 inline-block">Error 404</SectionLabel>
        <h1 className="font-extralight text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.03em] text-ink mb-6 text-balance">
          This page <strong className="font-bold">doesn&apos;t exist.</strong>
        </h1>
        <p className="text-[1rem] leading-[1.7] text-muted max-w-[44ch] mx-auto mb-10">
          The link may be broken, or the page may have moved. Everything worth seeing is one click away.
        </p>
        <EditorialButton href="/">
          Back to home <span aria-hidden>→</span>
        </EditorialButton>
      </section>
    </main>
  );
}
