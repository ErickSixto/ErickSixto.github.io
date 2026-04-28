// Primitive for hairline-divided lists. Rows are children; the component
// adds top/bottom 1px rules at #2F2E2E1F. Used by stances, work peek,
// /work index, and the about timeline.

import React from "react";

export function EditorialList({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-t border-[#2F2E2E1F] ${className}`}
    >
      {React.Children.map(children, (child) => (
        <div className="border-b border-[#2F2E2E1F]">{child}</div>
      ))}
    </div>
  );
}
