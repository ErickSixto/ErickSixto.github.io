// Primitive for hairline-divided lists. Rows are children; the component
// adds top/bottom 1px rules at #2F2E2E1F. Used by stances, work peek,
// /work index, and the about timeline.
//
// By default the rows cascade in (one after another) as the list scrolls into
// view. Pass `animate={false}` for a static list. Reduced-motion is honored
// inside the Stagger primitives.

import React from "react";
import { Stagger, StaggerItem } from "../animations";

export function EditorialList({
  children,
  className = "",
  animate = true,
}: {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}) {
  const rows = React.Children.toArray(children);

  if (!animate) {
    return (
      <div className={`border-t border-[#2F2E2E1F] ${className}`}>
        {rows.map((child, i) => (
          <div key={i} className="border-b border-[#2F2E2E1F]">
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <Stagger className={`border-t border-[#2F2E2E1F] ${className}`}>
      {rows.map((child, i) => (
        <StaggerItem key={i} className="border-b border-[#2F2E2E1F]">
          {child}
        </StaggerItem>
      ))}
    </Stagger>
  );
}
