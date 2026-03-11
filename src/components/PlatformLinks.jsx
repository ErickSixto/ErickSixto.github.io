import React from "react";
import { Linkedin, Cloud, Github } from "lucide-react";
import { platformLinks } from "../data/mock";

function PlatformIcon({ link, size = "sm" }) {
  const sizeClasses = size === "sm" ? "w-6 h-6 text-[10px]" : "w-8 h-8 text-xs";
  if (link.name === "LinkedIn") {
    return (
      <div
        className={`${sizeClasses} rounded-md flex items-center justify-center text-white font-bold`}
        style={{ backgroundColor: link.color }}
      >
        <Linkedin className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </div>
    );
  }
  if (link.name === "Trailblazer") {
    return (
      <div
        className={`${sizeClasses} rounded-md flex items-center justify-center text-white font-bold`}
        style={{ backgroundColor: link.color }}
      >
        <Cloud className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </div>
    );
  }
  if (link.name === "GitHub") {
    return (
      <div
        className={`${sizeClasses} rounded-md flex items-center justify-center text-white font-bold`}
        style={{ backgroundColor: link.color }}
      >
        <Github className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </div>
    );
  }
  return (
    <div
      className={`${sizeClasses} rounded-md flex items-center justify-center text-white font-bold`}
      style={{ backgroundColor: link.color }}
    >
      {link.letter}
    </div>
  );
}

export function PlatformLinksRow({ size = "sm", showLabels = true, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {platformLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#4B5563] hover:text-[#2F2E2E] transition-colors duration-200 group"
          title={link.name}
        >
          <PlatformIcon link={link} size={size} />
          {showLabels && (
            <span className="text-sm hidden sm:inline">{link.name}</span>
          )}
        </a>
      ))}
    </div>
  );
}

export function PlatformLinksCompact({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {platformLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
          className="group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold opacity-60 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110"
            style={{ backgroundColor: link.color }}
          >
            {link.name === "LinkedIn" ? (
              <Linkedin className="h-4 w-4" />
            ) : link.name === "Trailblazer" ? (
              <Cloud className="h-4 w-4" />
            ) : link.name === "GitHub" ? (
              <Github className="h-4 w-4" />
            ) : (
              link.letter
            )}
          </div>
        </a>
      ))}
    </div>
  );
}

export default PlatformLinksRow;
