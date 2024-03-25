"use client";
import * as React from "react";
import type { TranslationDictionary } from "~/lib/get-dictionnaries";

const TranslationContext = React.createContext<TranslationDictionary | null>(
  null
);

export function TranslationProvider({
  dictionnary,
  children,
}: {
  dictionnary: TranslationDictionary;
  children: React.ReactNode;
}) {
  return (
    <TranslationContext.Provider value={dictionnary}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const t = React.useContext(TranslationContext);

  if (!t) {
    throw new Error("Translation dictionnary must be provided");
  }

  return t;
}
