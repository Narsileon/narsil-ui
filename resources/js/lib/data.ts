import { get, isObject, isString } from "lodash-es";

function getTranslatableData(
  option: Record<string, unknown> | string,
  key: string,
  language: string,
  fallbackLanguage?: string,
): string {
  let value = isString(option) ? option : get(option, key);

  if (isObject(value)) {
    let translatedValue = get(value, language);

    if (!translatedValue && fallbackLanguage) {
      translatedValue = get(value, fallbackLanguage);
    }

    if (!translatedValue) {
      translatedValue = get(value, Object.keys(value)[0], "");
    }

    value = translatedValue;
  }

  return value as string;
}

function getUntranslatableData(option: Record<string, unknown> | string, key: string): string {
  const value = isString(option) ? option : get(option, key);

  return value as string;
}

export { getTranslatableData, getUntranslatableData };
