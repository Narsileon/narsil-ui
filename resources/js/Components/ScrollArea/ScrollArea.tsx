import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import ScrollAreaCorner from "./ScrollAreaCorner";
import ScrollAreaScrollbar, { ScrollAreaScrollbarProps } from "./ScrollAreaScrollbar";
import ScrollAreaThumb from "./ScrollAreaThumb";
import ScrollAreaViewport from "./ScrollAreaViewport";

export interface ScrollAreaProps
	extends React.ComponentProps<typeof ScrollAreaPrimitive.Root>,
		Pick<ScrollAreaScrollbarProps, "orientation"> {}

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
				<ScrollAreaCorner />
			</ScrollAreaPrimitive.Root>
		);
	}
);

export default ScrollArea;
