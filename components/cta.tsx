// components
import {
  EnvelopeIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// utils
import { clsx } from "~/lib/functions";

// types
import type { Locale } from "~/lib/i18n-config";

export type CtaProps = {
  className?: string;
  children: React.ReactNode;
};

type MailCta = CtaProps & {
  type: "mail";
};

type ResumeCta = CtaProps & {
  type: "cv";
  locale: Locale;
};

export function Cta(props: MailCta | ResumeCta) {
  return (
    <a
      rel="noreferrer"
      href={
        props.type === "cv"
          ? `${props.locale}/resume.pdf`
          : "mailto:fredkiss3@gmail.com"
      }
      target={props.type === "mail" ? "_blank" : "_self"}
      className={clsx(
        props.className,
        "rounded-md px-4 py-3 font-bold",
        "flex items-center gap-2",
        {
          "bg-dark text-light": props.type === "mail",
          "bg-primary text-light": props.type === "cv",
        }
      )}>
      {props.type === "mail" ? (
        <EnvelopeIcon className="h-6 w-6" />
      ) : (
        <DocumentMagnifyingGlassIcon className="h-6 w-6" />
      )}
      <span>{props.children}</span>
    </a>
  );
}
