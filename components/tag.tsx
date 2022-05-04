import * as React from "react";
import { clsx } from "../lib/webutils";

export interface TagProps {
  children: React.ReactNode;
  color?: `primary` | `secondary` | `tertiary` | `light`;
}

export function Tag({ children, color = `secondary` }: TagProps) {
  return (
    <small
      className={clsx("px-2 py-1 text-white rounded-md", {
        "bg-primary": color === `primary`,
        "bg-secondary": color === `secondary`,
        "bg-tertiary": color === `tertiary`,
        "bg-light text-dark": color === `light`,
      })}
    >
      {children}
    </small>
  );
}
