import { create } from "zustand";
import { upperFirst } from "lodash";
import { z, ZodErrorMap, ZodIssueCode } from "zod";

const initialState: TranslationStoreState = {
	locale: "",
	translations: {},
};

const errorMap = (trans: TranslationStoreAction["trans"]): ZodErrorMap => {
	return (issue, ctx) => {
		let message;

		switch (issue.code) {
			case ZodIssueCode.custom:
				message = ctx.defaultError;
				break;
			case ZodIssueCode.invalid_date:
				message = trans("validation.date");
				break;
			case ZodIssueCode.invalid_enum_value:
				message = trans("validation.enum");
				break;
			case ZodIssueCode.invalid_string:
				if (issue.validation === "email") {
					message = trans("validation.email");
				} else if (issue.validation === "url") {
					message = trans("validation.url");
				} else if (issue.validation === "regex") {
					message = trans("validation.regex");
				}
				break;
			case ZodIssueCode.invalid_type:
				if (issue.expected === "string") {
					message = trans("validation.string");
				} else if (issue.expected === "number") {
					message = trans("validation.numeric");
				} else if (issue.expected === "array") {
					message = trans("validation.array");
				}
				break;
			case ZodIssueCode.invalid_union:
				message = trans("validation.invalid_type");
				break;
			case ZodIssueCode.too_big:
				if (issue.maximum !== undefined) {
					if (issue.type === "string") {
						message = trans("validation.max.string", {
							replacements: {
								max: `${issue.maximum}`,
							},
						});
					} else if (issue.type === "number") {
						message = trans("validation.max.numeric", {
							replacements: {
								max: `${issue.maximum}`,
							},
						});
					} else if (issue.type === "array") {
						message = trans("validation.max.array", {
							replacements: {
								max: `${issue.maximum}`,
							},
						});
					}
				}
				break;
			case ZodIssueCode.too_small:
				if (issue.minimum !== undefined) {
					if (issue.type === "string") {
						message = trans("validation.min.string", {
							replacements: {
								min: `${issue.minimum}`,
							},
						});
					} else if (issue.type === "number") {
						message = trans("validation.min.numeric", {
							replacements: {
								min: `${issue.minimum}`,
							},
						});
					} else if (issue.type === "array") {
						message = trans("validation.min.array", {
							replacements: {
								min: `${issue.minimum}`,
							},
						});
					}
				}
				break;
			default:
				message = ctx.defaultError;
		}

		if (!message) {
			message = ctx.defaultError;
		}

		return { message };
	};
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
		set((state) => {
			const newState = {
				...state,
				translations: translations,
			};

			z.setErrorMap(errorMap(newState.trans));

			return newState;
		}),
}));
