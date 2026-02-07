import { createContext, useContext } from "react";

export type TranslatorOptions = {
  fallback?: string;
  replacements?: Record<string, number | string>;
};

export type TranslatorContextProps = {
  addTranslations: (translations: Record<string, string>) => void;
  setTranslations: (translations: Record<string, string>) => void;
  trans: (key: string, options?: TranslatorOptions) => string;
};

export const TranslatorContext = createContext<TranslatorContextProps>({
  addTranslations: () => {},
  setTranslations: () => {},
  trans: () => "",
});

function useTranslator() {
  const context = useContext(TranslatorContext);

  if (!context) {
    throw new Error("useTranslator must be used within a TranslatorProvider");
  }

  return context;
}

export default useTranslator;
