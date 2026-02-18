import { replaceLastPath } from "@narsil-cms/lib/utils";
import { useForm } from "@narsil-ui/components/form";
import { FieldData } from "@narsil-ui/types";
import { cloneDeep, get, isObject, unset } from "lodash-es";
import { type ReactNode, useEffect, useState } from "react";
import { FormFieldContext } from "./form-field-context";

type FormFieldProps = FieldData & {
  render: (element: {
    error: string | undefined;
    fieldLanguage: string;
    id: string;
    placeholder?: string;
    value: unknown;
    onFieldChange: (value: unknown) => void;
    setFieldLanguage: (value: string) => void;
  }) => ReactNode;
};

function FormField({ conditions, id, input, render, translatable }: FormFieldProps) {
  const { data, defaultLanguage, errors, formLanguage, setData } = useForm();

  const [fieldLanguage, setFieldLanguage] = useState<string>("en");
  const [visible, setVisible] = useState<boolean>(true);

  function getError() {
    let error = get(errors, id);

    if (!error && translatable) {
      error = get(errors, `${id}.${fieldLanguage}`);
    }

    return error;
  }

  function getPlaceholder() {
    let placeholder = undefined;

    if (translatable && defaultLanguage) {
      const value = get(data, id);

      if (isObject(value)) {
        placeholder = get(value, defaultLanguage);
      }
    }

    return placeholder;
  }

  function getValue() {
    const defaultValue = input.defaultValue ?? "";

    let value = get(data, id, defaultValue);

    if (translatable && isObject(value)) {
      value = get(value, fieldLanguage, defaultValue);
    }

    return value;
  }

  useEffect(() => {
    if (get(data, id) === undefined) {
      setData?.(id, getValue());
    }
  }, []);

  useEffect(() => {
    let nextVisible = true;

    for (const condition of conditions || []) {
      if (get(data, replaceLastPath(id, condition.handle)) !== condition.value) {
        nextVisible = false;
        break;
      }
    }

    if (nextVisible && !visible) {
      setVisible(true);
    } else if (!nextVisible && visible) {
      setData?.((data: Record<string, unknown>) => {
        const newData = cloneDeep(data);

        unset(newData, id);

        return newData;
      });

      setVisible(false);
    }
  }, [data]);

  useEffect(() => {
    requestAnimationFrame(() => {
      setFieldLanguage(formLanguage);
    });
  }, [formLanguage]);

  const contextValue = {
    error: getError(),
    id: id,
    fieldLanguage: fieldLanguage,
    setFieldLanguage: setFieldLanguage,
  };

  return visible ? (
    <FormFieldContext.Provider value={contextValue}>
      {render({
        id: id,
        error: getError(),
        fieldLanguage: fieldLanguage,
        placeholder: getPlaceholder(),
        value: getValue(),
        onFieldChange: (value) => {
          const key = translatable ? `${id}.${fieldLanguage}` : id;

          setData?.(key, value);
        },
        setFieldLanguage: setFieldLanguage,
      })}
    </FormFieldContext.Provider>
  ) : null;
}

export default FormField;
