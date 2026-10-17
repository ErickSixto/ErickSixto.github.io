"use client";

// Editorial motion primitives. Entrance-only, plays once, no parallax or loops.
// Values are deliberately quiet (small rise, short duration) to match the
// restrained, document-like feel of the site.
//
// The governing rule here is that CONTENT IS VISIBLE WITHOUT JAVASCRIPT.
// This is a static export on GitHub Pages: there is no streaming fallback, so
// anything hidden in the server-rendered HTML stays hidden if a script fails,
// is blocked, or is slow on a bad connection. Previously every block shipped
// with an inline `opacity:0` and the whole page depended on hydration to
// become readable.
//
// So the hidden state is never rendered on the server:
//
//   Hero (above the fold) uses pure CSS. `.rise` animates from hidden to
//   visible with `animation-fill-mode: both` and a per-item delay. CSS
//   animations need no JS, so the entrance plays whether or not scripts run,
//   and the markup itself carries no hidden state at all.
//
//   Reveal / Stagger (below the fold) are progressive enhancement. The server
//   renders them plain and visible. Only once JS is confirmed running does the
//   effect mark them hidden and hand them to an IntersectionObserver. Without
//   JS they simply stay visible. The mark happens in useLayoutEffect, before
//   paint, and everything using it sits below the fold, so there is no flash.
//
// Reduced motion is handled by the `prefers-reduced-motion` block in
// globals.css, which neutralizes animation duration globally. Nothing here
// branches on a client-only value, which is what caused the hydration mismatch
// this file used to carry.

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect warns during SSR; on the server we never run it anyway.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ─── useScrollReveal ───
   Marks the node hidden only after JS is confirmed, then reveals it once it
   scrolls into view. Returns the ref plus the data attribute the CSS keys on. */
function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [armed, setArmed] = useState(false);

  useIsomorphicLayoutEffect(() => {
    // Reaching this point means scripts run, so it is safe to hide and animate.
    setArmed(true);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || !armed) return;

    // No IntersectionObserver (old browser): leave the content visible.
    if (typeof IntersectionObserver === "undefined") {
      node.dataset.reveal = "in";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.dataset.reveal = "in";
            observer.disconnect();
          }
        }
      },
      { rootMargin: "-60px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [armed]);

  return { ref, armed };
}

/* ─── Reveal ───
   Single block that rises a few px and fades in once, when it scrolls into
   view. Used for section headings, the portrait, work entries, closing CTAs. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, armed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={armed ? "out" : undefined}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

/* ─── Stagger ───
   Scroll-triggered container that cascades its <StaggerItem> children one
   after another. Used by the hairline lists (stances, work peek, attestations). */
export function Stagger({
  children,
  className = "",
  stagger = 0.07,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const { ref, armed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={armed ? "out" : undefined}
      data-stagger=""
      style={{ "--stagger": `${stagger}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/* ─── LoadStagger ───
   Like Stagger, but plays on mount instead of on scroll. Used once, for the
   hero, so the page opens with a composed entrance above the fold.

   Pure CSS: no hidden server state, no JS, no hydration dependency. */
export function LoadStagger({
  children,
  className = "",
  stagger = 0.06,
  delayChildren = 0.04,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  return (
    <div
      className={className}
      data-load-stagger=""
      style={
        {
          "--stagger": `${stagger}s`,
          "--stagger-delay": `${delayChildren}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

/* ─── StaggerItem ───
   One row inside a Stagger / LoadStagger. Carries no state of its own: the
   parent's data attribute and the CSS nth-child delay drive it. */
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className} data-stagger-item="">
      {children}
    </div>
  );
}
