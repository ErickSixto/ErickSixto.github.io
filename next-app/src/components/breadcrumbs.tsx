import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  href?: string;
  label: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[#4B5563]">
      <ol className="flex items-center flex-wrap gap-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-[#7E5618] transition-colors duration-200">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-[#2F2E2E]" : ""}>{item.label}</span>
              )}
              {!isLast && <ChevronRight className="h-3 w-3 text-[#2F2E2E33]" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
