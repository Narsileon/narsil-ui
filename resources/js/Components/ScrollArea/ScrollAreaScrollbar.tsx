import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export interface ScrollAreaScrollbarProps
	extends React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {}

const ScrollAreaScrollbar = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
	ScrollAreaScrollbarProps
>(({ className, orientation = "vertical", ...props }, ref) => (
	<ScrollAreaPrimitive.ScrollAreaScrollbar
		ref={ref}
		className={cn(
			"flex touch-none select-none transition-colors",
			orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
			orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
			className
		)}
		orientation={orientation}
		{...props}
	/>
));

export default ScrollAreaScrollbar;
