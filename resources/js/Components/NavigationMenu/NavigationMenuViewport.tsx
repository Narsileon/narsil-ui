import { cn } from "@narsil-ui/Components";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";

const NavigationMenuViewport = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div className={cn("absolute left-0 top-full flex justify-center")}>
		<NavigationMenuPrimitive.Viewport
			ref={ref}
			className={cn(
				"origin-top-center relative mt-1.5  w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg",
				"h-[var(--radix-navigation-menu-viewport-height)]",
				"md:w-[var(--radix-navigation-menu-viewport-width)]",
				"data-[state=open]:animate-in data-[state=open]:zoom-in-90",
				"data-[state=closed]:animate-out data-[state=closed]:zoom-out-95",
				className
			)}
			{...props}
		/>
	</div>
));

export default NavigationMenuViewport;
