import "./globals.css";

// components
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { NavLink } from "~/lib/types";
import { TailwindIndicator } from "~/components/tailwind-indicator";

// utils
import { clsx } from "~/lib/webutils";
import localFont from "next/font/local";
import { Square_Peg } from "next/font/google";

// types
import type { Metadata } from "next";

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
      path: "../public/fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-VariableItalic.ttf",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links: Array<NavLink> = [
    {
      href: "/#skills",
      label: "expertise",
    },
    {
      href: "/#experience",
      label: "expérience",
    },
    {
      href: "/#projects",
      label: "Projets",
    },
    {
      href: "/blog",
      label: "blog",
    },
  ];
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={clsx(satoshi.variable, squarePeg.variable)}>
      <body suppressHydrationWarning>
        <Header links={links} />
        {children}
        <Footer links={links} />

        <TailwindIndicator />
      </body>
    </html>
  );
}
