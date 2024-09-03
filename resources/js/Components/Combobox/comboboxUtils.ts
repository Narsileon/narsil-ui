import { get, isString, lowerCase, sortBy, upperFirst } from "lodash";
import { SelectOption } from "@narsil-ui/Types";

export function getSelectOptionLabel(option: SelectOption | string, labelKey: string, ucFirst: boolean = true) {
	const label = isString(option) ? option : get(option, labelKey);

	return ucFirst ? upperFirst(label) : label;
}

export function getSelectOptionValue(option: SelectOption | string, valueKey: string) {
	const value = isString(option) ? option : get(option, valueKey);

	return value;
}

export function sortSelectOption(options: SelectOption[] | undefined, labelKey: string) {
	const sortedOptions = sortBy(options, (option) => {
		return lowerCase(getSelectOptionLabel(option, labelKey));
	});

	return sortedOptions;
}
