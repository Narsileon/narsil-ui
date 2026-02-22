import { SortableTable } from "@narsil-ui/components/sortable";
import { type FieldProps } from ".";

function TableInput({ input, value, setValue }: FieldProps) {
  return <SortableTable {...input} columns={input.columns} rows={value} setRows={setValue} />;
}

export default TableInput;
