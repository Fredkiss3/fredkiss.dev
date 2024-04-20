// components
import Link from "next/link";
import { CustomLink } from "./custom-link";
import Icon from "./icon";

// utils
import { clsx } from "../lib/functions";
import { MobileMenu } from "./mobile-menu";

// types
import type { NavLink } from "~/lib/types";

export type HeaderProps = {
  links: Array<NavLink>;
};

export function Header({ links }: HeaderProps) {
  return (
    <>
      <header
        className={clsx(
          `fixed top-0 left-0 right-0 z-30 bg-light px-4 pt-4 `,
          `items-center bg-opacity-80`,
          `md:px-8`,
          `lg:flex lg:py-2`,
          `before:absolute before:inset-0 before:backdrop-blur-md`,
          `before:pointer-events-none before:z-10`
        )}
      >
        <div className="relative z-20 flex items-center justify-between">
          <Link href={`/`} className="font-custom text-4xl font-semibold">
            Adrien
          </Link>

          <MobileMenu links={links} />
        </div>

        <nav className="relative z-20 hidden flex-grow justify-center lg:flex">
          <ul className="flex gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <CustomLink href={link.href}>{link.label}</CustomLink>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="relative z-20 hidden gap-4 lg:flex">
          <li>
            <a
              href="https://www.linkedin.com/in/adrien-kissie-3b6b32162/"
              target={"_blank"}
              rel="noreferrer"
              className={clsx(
                "flex items-center justify-center rounded-full p-3",
                "bg-white shadow-sm transition-shadow duration-100 hover:shadow-lg"
              )}
            >
              <span className="sr-only">Linkedin</span>
              <Icon icon="linkedin" className="h-6 text-secondary" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Fredkiss3"
              target={"_blank"}
              rel="noreferrer"
              className={clsx(
                "flex items-center justify-center rounded-full p-3",
                "bg-white shadow-sm transition-shadow duration-100 hover:shadow-lg"
              )}
            >
              <span className="sr-only">Github</span>
              <Icon icon="github" className="h-6 text-secondary" />
            </a>
          </li>
          <li>
            <a
              href="https://twitch.tv/Fredkisss"
              target={"_blank"}
              rel="noreferrer"
              className={clsx(
                "flex items-center justify-center rounded-full p-3",
                "bg-white shadow-sm transition-shadow duration-100 hover:shadow-lg"
              )}
            >
              <span className="sr-only">Twitch</span>
              <Icon icon="twitch" className="h-6 text-secondary" />
            </a>
          </li>
        </ul>

        <hr className="mt-3 border-gray-200 lg:hidden" />
      </header>
    </>
  );
}
