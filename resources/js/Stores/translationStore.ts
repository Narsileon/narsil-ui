import { create } from "zustand";
import { upperFirst } from "lodash";

const initialState: TranslationStoreState = {
	locale: "",
	translations: {},
};

export const useTranslationsStore = create<TranslationStoreType>((set, get) => ({
	...initialState,
	trans: (key, options) => {
		let text = get().translations[key]?.value ?? key.split(".").pop();

		if (options?.replacements) {
			Object.entries(options?.replacements).map(([replacementKey, replacementValue]) => {
				if (text.includes(replacementKey)) {
					text = text.replace(`:${replacementKey}`, `${replacementValue}`);
				} else if (text.includes(upperFirst(replacementKey))) {
					text = text.replace(`:${upperFirst(replacementKey)}`, upperFirst(`${replacementValue}`));
				}
			});
		}

		return options?.upperfirst === false ? text : upperFirst(text);
	},
	setLocale: (locale) =>
		set((state) => ({
			...state,
			locale: locale,
		})),
	setTranslations: (translations) =>
		set((state) => ({
			...state,
			translations: translations,
		})),
}));
