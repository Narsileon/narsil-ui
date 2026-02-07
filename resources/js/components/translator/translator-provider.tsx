import { get } from "lodash-es";
import { type ReactNode, useEffect, useState } from "react";
import { TranslatorContext } from "./translator-context";

type TranslatorProviderProps = {
  children: ReactNode;
  translations: Record<string, string>;
};

function TranslatorProvider({
  children,
  translations: initialTranslations,
}: TranslatorProviderProps) {
  const [translations, setTranslations] = useState<Record<string, string>>(initialTranslations);

  useEffect(() => {
    setTranslations((prev) => ({
      ...prev,
      ...initialTranslations,
    }));
  }, [initialTranslations]);

  return (
    <TranslatorContext.Provider
      value={{
        addTranslations: (translations) => {
          setTranslations((prev) => ({
            ...prev,
            ...translations,
          }));
        },
        setTranslations: setTranslations,
        trans: (key, options) => {
          let trans = get(translations, key) ?? get(options, "fallback", "No translation found");

          if (options?.replacements) {
            Object.entries(options?.replacements).forEach(([placeholder, value]) => {
              const regex = new RegExp(`:${placeholder}`, "g");

              trans = trans.replace(regex, String(value));
            });
          }

          return trans;
        },
      }}
    >
      {children}
    </TranslatorContext.Provider>
  );
}

export default TranslatorProvider;
