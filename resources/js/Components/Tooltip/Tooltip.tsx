import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {}

const Tooltip = TooltipPrimitive.Root;

export default Tooltip;
