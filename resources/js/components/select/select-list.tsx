import { Select } from "@base-ui/react/select";
import { cn } from "@narsil-ui/lib/utils";

function SelectList({ className, ...props }: Select.List.Props) {
  return (
    <Select.List
      data-slot="select-list"
      className={cn("flex flex-col gap-0.5 p-1.5", className)}
      {...props}
    />
  );
}

export default SelectList;
