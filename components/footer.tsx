// components
import Icon from "./icon";
import { CustomLink } from "./custom-link";

// utils
import { clsx } from "../lib/webutils";

// types
import type { NavLink } from "~/lib/types";

export type FooterProps = {
  links: Array<NavLink>;
};

export function Footer({ links }: FooterProps) {
  return (
    <footer className="mt-8 grid gap-8 bg-light px-5 pt-5 md:px-8">
      <div className={clsx("grid grid-cols-1 gap-8", "md:grid-cols-12")}>
        <div
          className={clsx(
            "mx-auto flex max-w-[1280px] flex-col gap-4 text-2xl font-bold",
            "md:col-span-7",
            "lg:col-span-8"
          )}>
          <h2>
            Contactez-moi pour construire quelque chose d&rsquo;incroyable
            ensemble.
          </h2>
          <ul className="flex gap-2">
            <li>
              <a
                href="https://www.linkedin.com/in/adrien-kissie-3b6b32162/"
                target={"_blank"}
                rel="noreferrer">
                <Icon icon="linkedin" className="h-8 text-secondary" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Fredkiss3"
                target={"_blank"}
                rel="noreferrer">
                <Icon icon="github" className="h-8 text-secondary" />
              </a>
            </li>

            <li>
              <a
                href="https://twitch.tv/Fredkisss"
                target={"_blank"}
                rel="noreferrer">
                <Icon icon="twitch" className="h-8 text-secondary" />
              </a>
            </li>
          </ul>

          <p>
            Commencez par dire bonjour à l&rsquo;adresse{" "}
            <a
              rel="noreferrer"
              href="mailto:fredkiss3@gmail.com"
              target="_blank"
              className="text-primary underline">
              fredkiss3@gmail.com
            </a>
            <span role="img">👋</span>
          </p>
        </div>

        <div
          className={clsx(
            "flex flex-col gap-4",
            "md:col-span-5 md:gap-8",
            "lg:col-span-4"
          )}>
          <h2 className="text-2xl font-bold">Information</h2>

          <ul className="flex flex-col gap-4">
            {links.map(link => (
              <li key={link.href}>
                <CustomLink href={link.href}>{link.label}</CustomLink>
              </li>
            ))}

            <li>
              <CustomLink href="/resume.pdf">Télécharger CV</CustomLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-gray-200 py-4 text-center">
        Copyright &copy; {new Date().getFullYear()} Adrien KISSIE
      </div>
    </footer>
  );
}
