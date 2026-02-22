import { FormElement } from "@narsil-ui/components/form";
import { SortableList } from "@narsil-ui/components/sortable";
import type { FieldData, FieldsetData } from "@narsil-ui/types";
import { type FieldProps } from ".";

function ArrayInput({ id, input, value, setValue }: FieldProps) {
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

              return <FormElement {...element} id={elementId} key={element.id} />;
            })}
          </>
        );
      }}
    />
  );
}

export default ArrayInput;
