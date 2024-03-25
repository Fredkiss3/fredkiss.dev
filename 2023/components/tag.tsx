import * as React from "react";
import { clsx } from "../lib/functions";

export interface TagProps {
  children: React.ReactNode;
  color?: `primary` | `secondary` | `tertiary` | `light`;
}

export function Tag({ children, color = `secondary` }: TagProps) {
  return (
    <small
      className={clsx("rounded-md px-2 py-1 text-white", {
        "bg-primary text-light": color === `primary`,
        "bg-secondary": color === `secondary`,
        "bg-tertiary": color === `tertiary`,
        "bg-light text-dark": color === `light`,
      })}>
      {children}
    </small>
  );
}
