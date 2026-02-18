import { FieldDescription, FieldError, FieldLabel, FieldRoot } from "@narsil-ui/components/field";
import { FormField, FormFieldLanguage } from "@narsil-ui/components/form";
import { Icon } from "@narsil-ui/components/icon";
import { FieldData, FieldsetData } from "@narsil-ui/types";
import { type Registry } from "./registry";

type FormElementProps = (FieldsetData | FieldData) & {
  registry?: Registry;
  onChange?: (value: unknown) => void;
};

function FormElement({ registry = {}, onChange, ...props }: FormElementProps) {
  function getField<K extends keyof Registry>(name: K, props: any) {
    const FieldComponent = registry[name] ?? registry.default;

    return <FieldComponent {...props} />;
  }

  if ("elements" in props) {
    return getField("fieldset", {
      ...props,
    });
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
                      onValueChange={(value) => setFieldLanguage(value as string)}
                    />
                  </>
                ) : null}
              </div>
            </div>
            {description ? <FieldDescription>{description}</FieldDescription> : null}
            {getField(input.type, {
              ...props,
              id: id,
              required: required,
              value: value,
              setValue: handleOnChange,
            })}
            <FieldError>{error}</FieldError>
          </FieldRoot>
        );
      }}
    />
  );
}

export default FormElement;
