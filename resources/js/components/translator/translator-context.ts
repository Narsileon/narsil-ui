import { createContext, useContext } from "react";

export type TransOptions = {
  fallback?: string;
  replacements?: Record<string, number | string>;
};

export type TranslatorContextProps = {
  locale: string;
  addTranslations: (translations: Record<string, string>) => void;
  setLocale: (locale: string) => void;
  setTranslations: (translations: Record<string, string>) => void;
  trans: (key: string, options?: TransOptions) => string;
};

export const TranslatorContext = createContext<TranslatorContextProps | null>(null);

function useTranslator() {
  const context = useContext(TranslatorContext);

  if (!context) {
    throw new Error("useTranslator must be used within a TranslatorProvider");
  }

  return context;
}

export default useTranslator;
