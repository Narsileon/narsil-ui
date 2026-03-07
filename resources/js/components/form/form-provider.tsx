import { useForm } from "@inertiajs/react";
import type { FieldData, FieldsetData, FormStepData } from "@narsil-ui/types";
import { set } from "lodash-es";
import { type ReactNode, useState } from "react";
import { FormContext, type FormContextProps } from "./form-context";
import registry, { Registry } from "./inputs";

type FormProviderProps = Partial<FormContextProps> & {
  steps?: FormStepData[];
  initialData?: Record<string, unknown>;
  registry?: Registry;
  render: (props: FormContextProps) => ReactNode;
};

function FormProvider({
  action = "#",
  defaultLanguage = "en",
  steps = [],
  id = "form",
  initialData = {},
  languages = [],
  method = "post",
  options = {},
  registry: overrides = {},
  render,
}: FormProviderProps) {
  const [formLanguage, setFormLanguage] = useState<string>("en");

  function getDefaultValues(elements: (FieldsetData | FieldData)[]): Record<string, unknown> {
    const defaultData: Record<string, unknown> = {};

    elements.map((element) => {
      if ("elements" in element) {
        Object.assign(defaultData, getDefaultValues(element.elements));
      } else {
        set(defaultData, element.id, element.input.defaultValue ?? "");
      }
    });

    return defaultData;
  }

  const mergedInitialData = Object.assign(
    getDefaultValues(steps.flatMap((step) => step.elements)),
    initialData,
  );

  const {
    data,
    errors,
    isDirty,
    processing,
    cancel,
    clearErrors,
    patch,
    post,
    put,
    reset,
    setData,
    setDefaults,
    setError,
    submit,
    transform,
  } = useForm<Record<string, any>>(mergedInitialData);

  const contextValue = {
    action: action,
    data: data,
    defaultLanguage: defaultLanguage,
    errors: errors,
    formLanguage: formLanguage,
    id: id,
    isDirty: isDirty,
    languages: languages,
    method: method,
    options: options,
    processing: processing,
    registry: Object.assign(overrides, registry),
    cancel: cancel,
    clearErrors: clearErrors,
    patch: patch,
    post: post,
    put: put,
    reset: reset,
    setData: setData,
    setDefaults: setDefaults,
    setError: setError,
    setFormLanguage: setFormLanguage,
    submit: submit,
    transform: transform,
  };

  return <FormContext.Provider value={contextValue}>{render(contextValue)}</FormContext.Provider>;
}

export default FormProvider;
