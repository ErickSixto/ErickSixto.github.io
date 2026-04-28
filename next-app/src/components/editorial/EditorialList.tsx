import React from "react";

interface EditorialListProps {
  children: React.ReactNode;
}

export function EditorialList({ children }: EditorialListProps) {
  const items = React.Children.toArray(children);

  return (
    <div className="border-t border-[#2F2E2E1F]">
      {items.map((child, index) => (
        <div key={index} className="border-b border-[#2F2E2E1F]">
          {child}
        </div>
      ))}
    </div>
  );
}
