import { Locale, i18n } from "~/lib/i18n-config";

export const dynamic = "force-static";

type Paths = Array<{
  path: string;
  locales: Array<Locale>;
}>;

export async function GET() {
  const paths = [
    {
      path: "/",
      locales: ["en", "fr"],
    },
    {
      path: "/resume.pdf",
      locales: ["en", "fr"],
    },
  ] satisfies Paths;
  let sitemapContent = ``;

  for (const path of paths) {
    sitemapContent += `<url><loc>https://fredkiss.dev/${path.locales[0]}${path.path}</loc>`;
    for (const locale of path.locales) {
      sitemapContent += `
        <xhtml:link
            rel="alternate"
            hreflang="${locale}"
            href="https://fredkiss.dev/${locale}${path.path}"
        />`;
    }

    sitemapContent += `<lastmod>${new Date().toISOString()}</lastmod></url>`;
  }
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns:xhtml="http://www.w3.org/1999/xhtml">${sitemapContent}</urlset>`,
    {
      headers: {
        "content-type": "application/xml",
      },
    },
  );
}
