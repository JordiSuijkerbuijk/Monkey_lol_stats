import { Link } from "remix";

import Icon from "../icon/icon";

import type { CTA as CTAType } from "../../types/cta";

export default function CTA({ text, link, openInNewTab }: CTAType) {
  if (!text || !link) return null;

  if (openInNewTab) {
    return (
      <a
        href={link}
        rel="noopener norefferer"
        target="_blank"
        className="relative inline-flex align-items-center gap-4 text-tertiary text-lg text-medium overflow-hidden group 
        before:absolute before:h-2/4 before:w-0.5 before:-bottom-1/4 before:right-0 before:bg-tertiary before:transition-transform before:translate-y-0
        after:absolute after:h-2/4 after:w-0.5 after:-top-1/4 after:left-0 after:bg-tertiary after:transition-transform after:translate-y-0
        hover:before:-translate-y-1/4 hover:after:translate-y-1/4"
      >
        <span
          className="inline-block relative p-2 
          after:absolute after:w-9/12 after:h-0.5 after:top-0 after:left-0 after:bg-tertiary after:transition-transform after:translate-x-0
          before:absolute before:w-9/12 before:h-0.5 before:bottom-0 before:right-0 before:bg-tertiary before:transition-transform bg:translate-x-0
          hover:after:-translate-x-1/4 hover:before:translate-x-1/4
          "
        >
          {text}
        </span>
      </a>
    );
  }

  return (
    <Link
      to={link}
      className="relative inline-flex align-items-center gap-4 text-tertiary text-lg text-medium overflow-hidden group 
      before:absolute before:h-2/4 before:w-0.5 before:-bottom-1/4 before:right-0 before:bg-tertiary before:transition-transform before:translate-y-0
      after:absolute after:h-2/4 after:w-0.5 after:-top-1/4 after:left-0 after:bg-tertiary after:transition-transform after:translate-y-0
      hover:before:-translate-y-1/4 hover:after:translate-y-1/4"
    >
      <span
        className="inline-block relative p-2 
          after:absolute after:w-9/12 after:h-0.5 after:top-0 after:left-0 after:bg-tertiary after:transition-transform after:translate-x-0
          before:absolute before:w-9/12 before:h-0.5 before:bottom-0 before:right-0 before:bg-tertiary before:transition-transform bg:translate-x-0
          hover:after:-translate-x-1/4 hover:before:translate-x-1/4
          "
      >
        {text}
      </span>
    </Link>
  );
}
