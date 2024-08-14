import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import ScrollBar from "./ScrollBar";

interface ScrollAreaProps
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
				<ScrollAreaPrimitive.Viewport
					className='!flex h-full flex-col items-start rounded-[inherit]'
					asChild={true}
				>
					{children}
				</ScrollAreaPrimitive.Viewport>
				<ScrollBar orientation={orientation} />
				<ScrollAreaPrimitive.Corner />
			</ScrollAreaPrimitive.Root>
		);
	}
);

export default ScrollArea;
