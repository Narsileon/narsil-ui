import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import ScrollAreaViewport from "./ScrollAreaViewport";
import ScrollAreaScrollbar from "./ScrollAreaScrollbar";
import ScrollAreaThumb from "./ScrollAreaThumb";

export interface ScrollAreaProps
	extends React.ComponentProps<typeof ScrollAreaPrimitive.Root>,
		Pick<React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>, "orientation"> {}

const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, ScrollAreaProps>(
	({ className, children, orientation = "vertical", ...props }, ref) => {
		return (
			<ScrollAreaPrimitive.Root
				ref={ref}
				className={cn("relative overflow-hidden", className)}
				{...props}
			>
				<ScrollAreaViewport asChild={true}>{children}</ScrollAreaViewport>
				<ScrollAreaScrollbar orientation={orientation}>
					<ScrollAreaThumb />
				</ScrollAreaScrollbar>
				<ScrollAreaPrimitive.Corner />
			</ScrollAreaPrimitive.Root>
		);
	}
);

export default ScrollArea;
