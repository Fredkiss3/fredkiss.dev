import "./globals.css";

// components
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { NavLink } from "~/lib/types";
import { TailwindIndicator } from "~/components/tailwind-indicator";

// utils
import { clsx } from "~/lib/functions";
import { i18n } from "~/lib/i18n-config";
import localFont from "next/font/local";
import { Square_Peg } from "next/font/google";
import { getDictionary } from "~/lib/get-dictionnaries";

// types
import type { Metadata } from "next";
import type { Lang } from "~/lib/get-dictionnaries";
import { TranslationProvider } from "~/components/translation-context";

export const metadata: Metadata = {
  title: {
    template: "%s | Adrien KISSIE",
    default: "Adrien KISSIE",
  },
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
    images: [
      {
        url: "https://fredkiss.dev/adrien-avatar.png",
        width: 764,
        height: 685,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s | Adrien KISSIE",
      default: "Adrien KISSIE",
    },
    description: "Développeur web fullstack et streamer sur twitch.",
    images: [
      {
        url: "https://fredkiss.dev/adrien-avatar.png",
        width: 764,
        height: 685,
      },
    ],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

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
  return i18n.locales.map(locale => ({ lang: locale }));
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
    // {
    //   href: "/blog",
    //   label: "blog",
    // },
  ];
  return (
    <html
      lang={params.locale}
      suppressHydrationWarning
      className={clsx(satoshi.variable, squarePeg.variable)}>
      <body suppressHydrationWarning>
        <TranslationProvider dictionnary={t}>
          <Header links={links} />
          {children}
          <Footer links={links} t={t} />

          <TailwindIndicator />
        </TranslationProvider>
      </body>
    </html>
  );
}
