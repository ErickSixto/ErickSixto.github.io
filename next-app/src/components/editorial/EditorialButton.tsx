// Outlined CTA button. 1px charcoal border. Fills charcoal on hover with oat
// text. 2px radius. The single button style across the entire site.
//
// Renders as <a> when `href` is provided, otherwise as <button>.

import React from "react";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  onClick?: () => void;
};

export function EditorialButton(props: AnchorProps | ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 border border-[#2F2E2E] text-[#2F2E2E] " +
    "px-7 py-3 text-[0.78rem] tracking-[0.04em] rounded-[2px] " +
    "transition-colors duration-200 hover:bg-[#2F2E2E] hover:text-[#F1F1EF]";

  const className = `${baseClasses} ${props.className ?? ""}`;

  if ("href" in props && props.href !== undefined) {
    const externalProps = props.external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a href={props.href} className={className} {...externalProps}>
        {props.children}
      </a>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className={className}>
      {props.children}
    </button>
  );
}
