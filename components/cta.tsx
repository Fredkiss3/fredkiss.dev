// components
import { EnvelopeIcon } from "@heroicons/react/24/outline";

// utils
import { clsx } from "~/lib/functions";

// types
export type CtaProps = {
  className?: string;
  children: React.ReactNode;
};

export function Cta({ className, children }: CtaProps) {
  return (
    <a
      rel="noreferrer"
      href="mailto:fredkiss3@gmail.com"
      target="_blank"
      className={clsx(
        className,
        "rounded-md bg-dark px-4 py-3 font-bold text-light",
        "flex items-center gap-2"
      )}>
      <EnvelopeIcon className="h-6 w-6" />
      <span>{children}</span>
    </a>
  );
}
