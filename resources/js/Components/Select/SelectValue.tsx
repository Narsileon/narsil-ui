import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectValueProps extends React.ComponentProps<typeof SelectPrimitive.Value> {}

const SelectValue = SelectPrimitive.Value;

export default SelectValue;
