// components
import {
  EnvelopeIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// utils
import { clsx } from "~/lib/functions";

// types
export type CtaProps = {
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  type?: "mail" | "cv";
};

export function Cta({
  className,
  children,
  external = false,
  type = "mail",
}: CtaProps) {
  return (
    <a
      rel="noreferrer"
      href={type === 'cv' ? "/resume.pdf" : "mailto:fredkiss3@gmail.com"}
      target={external ? "_blank" : "_self"}
      className={clsx(
        className,
        "rounded-md px-4 py-3 font-bold",
        "flex items-center gap-2",
        {
          "bg-dark text-light": type === "mail",
          "bg-primary text-light": type === "cv",
        }
      )}>
      {type === "mail" ? (
        <EnvelopeIcon className="h-6 w-6" />
      ) : (
        <DocumentMagnifyingGlassIcon className="h-6 w-6" />
      )}
      <span>{children}</span>
    </a>
  );
}
