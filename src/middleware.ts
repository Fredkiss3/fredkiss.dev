import { defineMiddleware } from "astro:middleware";
import { i18n } from "./lib/i18n-config";
// @ts-expect-error
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

function getLocale(request: Request): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  for (const [key, value] of request.headers.entries()) {
    negotiatorHeaders[key] = value;
  }

  if (!("accept-language" in negotiatorHeaders)) {
    return i18n.defaultLocale;
  }

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export const onRequest = defineMiddleware(({ request, redirect }, next) => {
  const pathname = new URL(request.url).pathname;
  const isIgnoredPath = IGNORED_PATHS.some((path) => pathname.startsWith(path));

  if (isIgnoredPath) {
    return next();
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  if (!pathnameIsMissingLocale) return next();

  const locale = getLocale(request);
  return redirect(`/${locale}/${pathname === "/" ? "" : pathname}`, 302);
});

const IGNORED_PATHS = ["/keystatic", "/api", "/sitemap.xml"];
