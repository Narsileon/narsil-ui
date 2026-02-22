import { FieldDescription, FieldError, FieldLabel, FieldRoot } from "@narsil-ui/components/field";
import { FormField, FormFieldLanguage } from "@narsil-ui/components/form";
import { Icon } from "@narsil-ui/components/icon";
import type { FieldData, FieldsetData } from "@narsil-ui/types";
import { type ReactNode } from "react";
import { getField, type Registry } from "./inputs";

type FormElementProps = (FieldsetData | FieldData) & {
  registry?: Registry;
  onChange?: (value: unknown) => void;
  render?: (fieldset: FieldsetData) => ReactNode;
};

function FormElement({ registry = {}, onChange, render, ...props }: FormElementProps) {
  if ("elements" in props) {
    return render?.(props);
  }

  const { className, description, id, input, label, required, translatable, width } = props;

  return (
    <FormField
      {...props}
      render={({ error, fieldLanguage, value, onFieldChange, setFieldLanguage }) => {
        function handleOnChange(value: unknown) {
          onChange?.(value);
          onFieldChange(value);
        }

        return (
          <FieldRoot
            className={className as string}
            orientation={input.type === "checkbox" && !input.options ? "horizontal" : "vertical"}
            width={width}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <FieldLabel required={required}>{label}</FieldLabel>
                {translatable ? (
                  <>
                    <Icon className="size-4" name="globe" />
                    <span>-</span>
                    <FormFieldLanguage
                      value={fieldLanguage}
                      onValueChange={(value) => {
                        setFieldLanguage(value as string);
                      }}
                    />
                  </>
                ) : null}
              </div>
            </div>
            {description ? <FieldDescription>{description}</FieldDescription> : null}
            {getField(registry, input.type, {
              ...props,
              id: id,
              required: required,
              value: value,
              setValue: handleOnChange,
            })}
            <FieldError match={!!error}>{error}</FieldError>
          </FieldRoot>
        );
      }}
    />
  );
}

export default FormElement;
