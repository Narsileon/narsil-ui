import { FormElement } from "@narsil-ui/components/form";
import { SortableList } from "@narsil-ui/components/sortable";
import type { FieldData, FieldsetData } from "@narsil-ui/types";
import { type FieldProps } from ".";

function ArrayInput({ id, input, value, setValue }: FieldProps) {
  const elements = input.elements as (FieldData | FieldsetData)[];

  return (
    <SortableList
      {...input}
      items={value}
      labelPath={input.labelPath}
      setItems={setValue}
      render={(item, index) => {
        return (
          <>
            {elements?.map((element) => {
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
