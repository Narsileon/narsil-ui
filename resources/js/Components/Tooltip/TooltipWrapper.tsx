import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import Tooltip from "./Tooltip";
import TooltipContent from "./TooltipContent";
import TooltipProvider from "./TooltipProvider";
import TooltipTrigger from "./TooltipTrigger";

export interface TooltipWrapperProps {
	children: React.ReactNode;
	tooltip: string | React.ReactNode;
}

const TooltipWrapper = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Trigger>, TooltipWrapperProps>(
	({ children, tooltip }, ref) => (
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
	)
);

export default TooltipWrapper;
