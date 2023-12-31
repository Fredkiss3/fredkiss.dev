import { defineMiddleware } from "astro:middleware";
import { i18n } from "./lib/i18n-config";

export const onRequest = defineMiddleware(
  (
    {
      preferredLocale,
      preferredLocaleList,
      currentLocale,
      params,
      request,
      redirect
    },
    next
  ) => {
    const pathname = new URL(request.url).pathname;
    if (pathname !== "/") {
      return next();
    }

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (!pathnameIsMissingLocale) return next();

    const locale = preferredLocale ?? "en";
    // intercept data from a request
    // optionally, modify the properties in `locals`
    console.log({
      chosenLocale: locale,
      redirectTo: `/${locale}/${pathname === "/" ? "" : pathname}`
    });

    // return a Response or the result of calling `next()`
    return redirect(`/${locale}/${pathname === "/" ? "" : pathname}`, 302);
    // return new Response(JSON.stringify({ locale }));
  }
);
