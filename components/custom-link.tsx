"use client";
import * as React from "react";
// components
import Link from "next/link";

// utils
import { usePathname } from "next/navigation";
// types
import type { Route } from "next";
export type LinkProps = {
  children: React.ReactNode;
  href: Route;
  onClick?: (e: React.MouseEvent) => void;
};

export function CustomLink({ onClick, children, href }: LinkProps) {
  const path = usePathname();
  const hrefPath = href.split(`#`)[0];

  const Tag = path !== hrefPath ? Link : "a";
  return (
    <Tag
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
    </Tag>
  );
}
