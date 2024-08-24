import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export interface ScrollAreaThumbProps extends React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaThumb> {}

const ScrollAreaThumb = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaThumb>,
	ScrollAreaThumbProps
>(({ className, ...props }, ref) => (
	<ScrollAreaPrimitive.ScrollAreaThumb
		ref={ref}
		className={cn("relative flex-1 rounded-full bg-border", className)}
		{...props}
	/>
));

export default ScrollAreaThumb;
