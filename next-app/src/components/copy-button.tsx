"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // noop
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 border border-[#2F2E2E33] text-[#2F2E2E] px-5 h-11 text-[0.78rem] tracking-[0.04em] rounded-[2px] transition-colors duration-200 hover:bg-[#2F2E2E] hover:text-[#F1F1EF]"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      <span className="tabular-nums">{copied ? "Copied" : label}</span>
    </button>
  );
}
