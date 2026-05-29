"use client";

import { MotionConfig } from "framer-motion";

// Hands framer-motion the user's prefers-reduced-motion preference at runtime.
// `reducedMotion="user"` disables transform/layout animations for users who opt
// out (keeping gentle opacity fades, which are not a motion-sensitivity concern).
//
// This is applied client-side after hydration, so the motion primitives can
// render an identical tree on the server and the client without branching on a
// client-only value — which is what previously caused a hydration mismatch.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
