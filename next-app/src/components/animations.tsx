"use client";

// Editorial motion primitives. Entrance-only, plays once, no parallax or loops.
// Values are deliberately quiet (small rise, short duration) to match the
// restrained, document-like feel of the site. Every primitive honors
// prefers-reduced-motion: when the user opts out, content renders at rest with
// no transform and no fade (Framer animates via JS, so the global CSS
// reduced-motion rule does not catch it — we guard here instead).

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ─── Reveal ───
   Single block that rises a few px and fades in once, when it scrolls into
   view. Used for section headings, the portrait, work entries, closing CTAs. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 16,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── LoadStagger ───
   Like Stagger, but plays on mount instead of on scroll. Used once, for the
   hero, so the page opens with a composed entrance above the fold. */
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
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerItem ───
   One row inside a Stagger / LoadStagger. */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
