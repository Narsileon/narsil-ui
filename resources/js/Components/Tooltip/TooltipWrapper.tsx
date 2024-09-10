import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import Tooltip from "./Tooltip";
import TooltipContent from "./TooltipContent";
import TooltipProvider from "./TooltipProvider";
import TooltipTrigger from "./TooltipTrigger";
import type { TooltipContentProps } from "./TooltipContent";
import type { TooltipTriggerProps } from "./TooltipTrigger";

export interface TooltipWrapperProps extends TooltipTriggerProps {
	align?: TooltipContentProps["align"];
	alignOffset?: TooltipContentProps["alignOffset"];
	children: React.ReactNode;
	side?: TooltipContentProps["side"];
	sideOffset?: TooltipContentProps["sideOffset"];
	tooltip: string | React.ReactNode;
}

const TooltipWrapper = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Trigger>, TooltipWrapperProps>(
	({ align, alignOffset, children, side, sideOffset, tooltip, ...props }, ref) => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					ref={ref}
					asChild={true}
					{...props}
				>
					{children}
				</TooltipTrigger>
				<TooltipContent
					align={align}
					alignOffset={alignOffset}
					side={side}
					sideOffset={sideOffset}
				>
					{tooltip}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
);

export default TooltipWrapper;
