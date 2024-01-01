import type { Locale } from "~/lib/i18n-utils";

const dictionaries = {
  en: () => import("~/dictionaries/en.json").then((module) => module.default),
  fr: () => import("~/dictionaries/fr.json").then((module) => module.default)
} satisfies Record<Locale, unknown>;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type TranslationDictionary = Awaited<ReturnType<typeof getDictionary>>;
