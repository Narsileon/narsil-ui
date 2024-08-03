type Translation = {
	id: number;
	key: string | null;
	value: string;
};

type TransOptions = {
	replacements?: Record<string, string | number>;
	upperfirst?: boolean;
};

type TranslationStoreState = {
	locale: string;
	translations: { [key: string]: Translation };
};

type TranslationStoreAction = {
	trans: (key: string, options?: TransOptions) => string;
	setLocale: (locale: string) => void;
	setTranslations: (translations: { [key: string]: Translation }) => void;
};

type TranslationStoreType = TranslationStoreState & TranslationStoreAction;
