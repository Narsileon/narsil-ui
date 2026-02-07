import { Select } from "@base-ui/react/select";
import { cn } from "@narsil-ui/lib/utils";

function SelectList({ className, ...props }: Select.List.Props) {
  return <Select.List data-slot="select-list" className={cn("p-1", className)} {...props} />;
}

export default SelectList;
