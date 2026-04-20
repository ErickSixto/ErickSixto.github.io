"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// Premium easing curve used across the site
const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ─── Animated Hero Text ─── */
export function AnimatedText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
  };
  const child: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: EASE_PREMIUM },
    },
  };
  return (
    <motion.h1 className={className} variants={container} initial="hidden" animate="visible">
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block"
          style={{ marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

/* ─── Infinite Marquee ─── */
export function Marquee({
  items,
  speed = 35,
  className = "",
}: {
  items: string[];
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex whitespace-nowrap" style={{ animation: `marquee ${speed}s linear infinite` }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E5E7EB] select-none px-3 sm:px-4 tracking-tight">
              {item}
            </span>
            <span className="text-[#CB9135] text-xl px-4 select-none">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Counter Animation ─── */
export function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  target: string | number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const numericTarget = parseInt(String(target).replace(/[^0-9]/g, ""), 10);
  const isNumeric = !isNaN(numericTarget) && numericTarget > 0;

  useEffect(() => {
    const node = ref.current;
    if (!node || !isNumeric) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = (now - start) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericTarget));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [numericTarget, duration, hasAnimated, isNumeric]);

  if (!isNumeric) {
    return (
      <span className="tabular-nums">
        {prefix}
        {target}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {hasAnimated ? count : 0}
      {suffix}
    </span>
  );
}

/* ─── Motion Section ─── */
export function MotionSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: EASE_PREMIUM }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger container ─── */
export function StaggerContainer({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE_PREMIUM },
        },
      } satisfies Variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
