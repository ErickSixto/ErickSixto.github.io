"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <Button
      type="button"
      variant="outline"
      onClick={handleCopy}
      className="h-11 gap-2 border-[#E5E7EB] text-[#2F2E2E] hover:border-[#CB9135] hover:bg-[#CB9135]/5"
    >
      {copied ? <Check className="h-4 w-4 text-[#CB9135]" /> : <Copy className="h-4 w-4" />}
      <span className="tabular-nums">{copied ? "Copied" : label}</span>
    </Button>
  );
}
