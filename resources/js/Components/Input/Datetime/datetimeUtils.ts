import { de, enUS, fr } from "date-fns/locale";
import * as React from "react";

type Locale = "de" | "en" | "fr";

function getLocale(locale: Locale) {
	const locales = {
		de: de,
		en: enUS,
		fr: fr,
	};

	return locales[locale] || enUS;
}

export const useDatetimeLocale = (locale: string) => {
	return React.useMemo(() => getLocale(locale as Locale), [locale]);
};
