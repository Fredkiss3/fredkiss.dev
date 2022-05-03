import * as React from "react";

export interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <small className="bg-secondary px-2 py-1 text-white rounded-md">
      {children}
    </small>
  );
}
