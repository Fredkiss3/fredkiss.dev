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
import localFont from "next/font/local";
import { Square_Peg } from "next/font/google";
import { getDictionary } from "~/lib/get-dictionnaries";

// types
import type { Metadata } from "next";
import type { Lang } from "~/lib/get-dictionnaries";

export const dynamic = "force-static",
  dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: {
    locale: Lang;
  };
}): Metadata {
  return {
    title: {
      template: "%s | Adrien KISSIE",
      default: "Adrien KISSIE",
    },
    // @ts-ignore the variable is defined
    metadataBase: new URL(process.env.SITE_URL ?? "https://fredkiss.dev"),
    description: "Développeur web fullstack et streamer sur twitch.",
    openGraph: {
      type: "website",
      title: {
        template: "%s | Adrien KISSIE",
        default: "Adrien KISSIE",
      },
      url: "https://fredkiss.dev/",
      siteName: "Adrien KISSIE",
      description: "Développeur web fullstack et streamer sur twitch.",
      locale: params.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: {
        template: "%s | Adrien KISSIE",
        default: "Adrien KISSIE",
      },
      description: "Développeur web fullstack et streamer sur twitch.",
    },
  };
}

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const squarePeg = Square_Peg({
  subsets: ["latin"],
  variable: "--font-custom",
  weight: ["400"],
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
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
      label: t.links.expertise,
    },
    {
      href: `/${params.locale}#experience`,
      label: t.links.experience,
    },
    {
      href: `/${params.locale}#projects`,
      label: t.links.projects,
    },
  ];
  return (
    <html
      lang={params.locale}
      suppressHydrationWarning
      className={clsx(satoshi.variable, squarePeg.variable)}
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
