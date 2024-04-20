// components
import Icon from "./icon";
import { CustomLink } from "./custom-link";
import { LangSwitcher } from "./lang-switcher";

// utils
import { clsx } from "../lib/functions";

// types
import type { NavLink } from "~/lib/types";
import type { TranslationDictionary } from "~/lib/get-dictionnaries";
import type { Locale } from "~/lib/i18n-config";

export type FooterProps = {
  links: Array<NavLink>;
  t: TranslationDictionary;
  locale: Locale;
};

export function Footer({ links, t, locale }: FooterProps) {
  return (
    <footer className="mt-8 grid gap-8 bg-light px-5 pt-5 md:px-8">
      <div
        className={clsx(
          "mx-auto grid w-full max-w-[1280px] grid-cols-1 items-stretch gap-8",
          "md:grid-cols-12"
        )}
      >
        <div
          className={clsx(
            " flex   flex-col gap-4 text-2xl font-semibold",
            "md:col-span-7",
            "lg:col-span-8"
          )}
        >
          <h2>{t.footer.socials}</h2>
          <ul className="flex gap-2">
            <li>
              <a
                href="https://www.linkedin.com/in/adrien-kissie-3b6b32162/"
                target={"_blank"}
                aria-label="linkedin"
                rel="noreferrer"
              >
                <Icon icon="linkedin" className="h-8 text-secondary" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Fredkiss3"
                target={"_blank"}
                aria-label="github"
                rel="noreferrer"
              >
                <Icon icon="github" className="h-8 text-secondary" />
              </a>
            </li>

            <li>
              <a
                href="https://twitch.tv/Fredkisss"
                target={"_blank"}
                aria-label="twitch"
                rel="noreferrer"
              >
                <Icon icon="twitch" className="h-8 text-secondary" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/@fredkisss"
                target={"_blank"}
                aria-label="twitter"
                rel="noreferrer"
              >
                <Icon icon="twitter" className="h-8 text-secondary" />
              </a>
            </li>
          </ul>

          <p>
            {t.footer.contact}&nbsp;
            <br />
            <a
              rel="noreferrer"
              href="mailto:hello@fredkiss.dev"
              target="_blank"
              className="text-primary underline"
            >
              hello@fredkiss.dev
            </a>
            <span role="img">👋</span>
          </p>
        </div>

        <div
          className={clsx(
            "flex flex-col gap-4",
            "md:col-span-5 md:gap-8",
            "lg:col-span-4"
          )}
        >
          <h2 className="text-2xl font-semibold">Information</h2>

          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <CustomLink href={link.href}>{link.label}</CustomLink>
              </li>
            ))}

            <li>
              <CustomLink href={`${locale}/resume.pdf`}>
                {t.links.cv}
              </CustomLink>
            </li>
          </ul>

          <div>
            <LangSwitcher />
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-200 py-4 text-center">
        Copyright &copy; {new Date().getFullYear()} Adrien KISSIE
      </div>
    </footer>
  );
}
