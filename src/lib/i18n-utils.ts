// @ts-expect-error
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fr"]
} as const;

export type Locale = (typeof i18n)["locales"][number];

export function getLocale(request: Request) {
  const negotiatorHeaders: Record<string, string> = {};
  for (const [key, value] of request.headers.entries()) {
    negotiatorHeaders[key] = value;
  }

  if (!("accept-language" in negotiatorHeaders)) {
    return i18n.defaultLocale;
  }

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale) as Locale;
}
