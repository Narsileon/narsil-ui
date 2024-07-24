import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@narsil-ui/Components";

interface TooltipWrapperProps {
	tooltip: string | React.ReactNode;
}

const TooltipWrapper = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> & TooltipWrapperProps
>(({ children, tooltip }, ref) => (
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger
				ref={ref}
				asChild={true}
			>
				{children}
			</TooltipTrigger>
			<TooltipContent>{tooltip}</TooltipContent>
		</Tooltip>
	</TooltipProvider>
));

export default TooltipWrapper;
