import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export interface TooltipProviderProps extends React.ComponentProps<typeof TooltipPrimitive.Provider> {}

const TooltipProvider = TooltipPrimitive.Provider;

export default TooltipProvider;
