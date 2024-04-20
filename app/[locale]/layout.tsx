import "./globals.css";

// components
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { NavLink } from "~/lib/types";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import { TranslationProvider } from "~/components/translation-context";
import { Analytics } from "@vercel/analytics/react";

// utils
import { clsx } from "~/lib/functions";
import { i18n } from "~/lib/i18n-config";
import { Square_Peg } from "next/font/google";
import { getDictionary } from "~/lib/get-dictionnaries";
import { GeistSans } from "geist/font/sans";

// types
import type { Metadata } from "next";
import type { Lang } from "~/lib/get-dictionnaries";

export const dynamic = "force-static",
  dynamicParams = false;

export async function generateMetadata({
  params
}: {
  params: {
    locale: Lang;
  };
}): Promise<Metadata> {
  const t = await getDictionary(params.locale);
  return {
    title: {
      template: "%s | Adrien KISSIE",
      default: "Adrien KISSIE"
    },
    // @ts-ignore the variable is defined
    metadataBase: new URL(process.env.SITE_URL ?? "https://fredkiss.dev"),
    description: t.meta.description,
    openGraph: {
      type: "website",
      title: {
        template: "%s | Adrien KISSIE",
        default: "Adrien KISSIE"
      },
      url: "https://fredkiss.dev/",
      siteName: "Adrien KISSIE",
      description: t.meta.description,
      locale: params.locale
    },
    twitter: {
      card: "summary_large_image",
      title: {
        template: "%s | Adrien KISSIE",
        default: "Adrien KISSIE"
      },
      description: t.meta.description
    }
  };
}

const squarePeg = Square_Peg({
  subsets: ["latin"],
  variable: "--font-custom",
  weight: ["400"],
  display: "swap"
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {
    locale: Lang;
  };
}) {
  const t = await getDictionary(params.locale);
  const links: Array<NavLink> = [
    {
      href: `/${params.locale}#skills`,
      label: t.links.expertise
    },
    {
      href: `/${params.locale}#experience`,
      label: t.links.experience
    },
    {
      href: `/${params.locale}#projects`,
      label: t.links.projects
    }
  ];
  return (
    <html
      lang={params.locale}
      suppressHydrationWarning
      className={clsx(GeistSans.className, squarePeg.variable)}
    >
      <body suppressHydrationWarning>
        <TranslationProvider dictionnary={t}>
          <Header links={links} />
          {children}
          <Footer links={links} t={t} locale={params.locale} />

          <TailwindIndicator />
          <Analytics />
        </TranslationProvider>
      </body>
    </html>
  );
}
