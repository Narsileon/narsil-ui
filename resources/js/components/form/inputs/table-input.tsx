import { SortableTable } from "@narsil-ui/components/sortable";
import { type FieldProps, Registry } from ".";

type TableInputProps = FieldProps & {
  registry: Registry;
};

function TableInput({ input, registry, value, setValue }: TableInputProps) {
  return (
    <SortableTable
      {...input}
      columns={input.columns}
      rows={value}
      registry={registry}
      setRows={setValue}
    />
  );
}

export default TableInput;
