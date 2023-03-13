import Link from "next/link";
import * as React from "react";

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function CustomLink({ onClick, children, href }: LinkProps) {
  return (
    // FIXME: I should use the next <Link /> component, but it does not support scrolling to hash yet
    // Waiting for this to be merged : https://github.com/vercel/next.js/pull/46995
    <a
      onClick={onClick}
      href={href}
      className={`group
        relative 
        ml-4
        p-2  
        uppercase
        hover:font-bold
        hover:text-secondary  
        focus:text-secondary
        active:font-bold
        active:text-secondary
      `}>
      <span
        className="
          absolute
          top-0
          bottom-0
          -left-4
          hidden
          w-5
          rounded-tl-full
          rounded-bl-full
          border-2
          border-r-0 
          border-secondary
          group-hover:block
          group-focus:block
          group-active:block
        "
      />
      <span>{children}</span>

      <span
        className="
          absolute
          top-0
          bottom-0
          -right-4
          hidden
          w-5
          rounded-tr-full
          rounded-br-full
          border-2
          border-l-0 
          border-secondary
          group-hover:block
          group-focus:block
          group-active:block
        "
      />
    </a>
  );
}
