import * as React from "react";
import { clsx } from "../lib/webutils";

export interface CompetenceCardProps {
  title: string;
  icon: ({ className }: { className: string }) => JSX.Element;
  onClick: () => void;
  iconColor?: `primary` | `secondary` | `tertiary`;
  selected?: boolean;
}

export function CompetenceCard({
  title,
  iconColor = `primary`,
  icon: Icon,
  onClick,
  selected = false,
}: CompetenceCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `border p-4 rounded-md flex gap-4 items-center w-full`,
        `transition duration-200 ease-in-out`,
        `focus:shadow-md focus:shadow-gray-200/50`,
        {
          "border-2 border-secondary": selected,
        }
      )}
    >
      <div
        className={clsx(`rounded-full p-4 text-white flex items-center`, {
          "bg-primary": iconColor === `primary`,
          "bg-secondary": iconColor === `secondary`,
          "bg-tertiary": iconColor === `tertiary`,
        })}
      >
        <Icon className={`w-6 h-6`} />
      </div>
      <h3 className={`font-bold text-xl`}>{title}</h3>
    </button>
  );
}
