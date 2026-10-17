// Primary CTA button. Solid charcoal with oat text, inverting to outline on
// hover. 2px radius. This is the booking action, the one thing the site exists
// for, so it carries weight rather than whispering: it is the only solid block
// on an otherwise hairline page, which is the same 200-vs-700 contrast the
// headlines use. The quieter outlined "Book a call" in the header is the
// persistent counterpart, deliberately subordinate to this one.
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
    "inline-flex items-center gap-2.5 border border-ink bg-ink text-canvas " +
    "px-8 py-4 text-[0.92rem] font-medium tracking-[0.01em] rounded-[2px] " +
    "transition-colors duration-200 hover:bg-transparent hover:text-ink";

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
