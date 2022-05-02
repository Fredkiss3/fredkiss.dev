import * as React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
}

export function Link(props: LinkProps) {
  return (
    <NextLink {...props}>
      <a
        className={`uppercase
        relative 
        group
        active:text-secondary  
        hover:text-secondary
        focus:text-secondary
        active:font-bold  
        hover:font-bold
        p-2
        ml-4
      `}
      >
        <span
          className="
          hidden
          group-hover:block
          group-active:block
          group-focus:block
          absolute
          top-0
          bottom-0
          -left-4
          border-2
          border-secondary 
          w-5
          border-r-0
          rounded-tl-full
          rounded-bl-full
        "
        />
        <span>{props.children}</span>

        <span
          className="
          hidden
          group-hover:block
          group-active:block
          group-focus:block
          absolute
          top-0
          bottom-0
          -right-4
          border-2
          border-secondary 
          w-5
          border-l-0
          rounded-tr-full
          rounded-br-full
        "
        />
      </a>
    </NextLink>
  );
}
