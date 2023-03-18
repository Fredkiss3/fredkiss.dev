import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then(module => module.default),
  fr: () => import("../dictionaries/fr.json").then(module => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type TranslationDictionary = Awaited<ReturnType<typeof getDictionary>>;
export type Lang = keyof typeof dictionaries;
