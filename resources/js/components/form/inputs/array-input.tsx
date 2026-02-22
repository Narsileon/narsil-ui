import { FormElement } from "@narsil-ui/components/form";
import { SortableList } from "@narsil-ui/components/sortable";
import type { FieldData, FieldsetData } from "@narsil-ui/types";
import { type FieldProps, Registry } from ".";

type ArrayInputProps = FieldProps & {
  registry: Registry;
};

function ArrayInput({ id, input, registry, value, setValue }: ArrayInputProps) {
  const form = input.form as (FieldData | FieldsetData)[];

  return (
    <SortableList
      {...input}
      items={value}
      labelKey={input.labelKey}
      setItems={setValue}
      render={(item, index) => {
        return (
          <>
            {form?.map((element) => {
              const elementId = `${id}.${index}.${element.id}`;

              return (
                <FormElement {...element} id={elementId} registry={registry} key={element.id} />
              );
            })}
          </>
        );
      }}
    />
  );
}

export default ArrayInput;
