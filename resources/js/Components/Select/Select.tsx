import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectProps extends React.ComponentProps<typeof SelectPrimitive.Root> {}

const Select = SelectPrimitive.Root;

export default Select;
