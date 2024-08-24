import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export interface ScrollAreaViewportProps extends React.ComponentProps<typeof ScrollAreaPrimitive.Viewport> {}

const ScrollAreaViewport = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.Viewport>,
	ScrollAreaViewportProps
>(({ className, ...props }, ref) => (
	<ScrollAreaPrimitive.Viewport
		ref={ref}
		className={cn("flex h-full flex-col items-start rounded-[inherit]", className)}
		{...props}
	/>
));

export default ScrollAreaViewport;
