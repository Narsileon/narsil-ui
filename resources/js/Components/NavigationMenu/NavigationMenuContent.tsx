import { cn } from "@narsil-ui/Components";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";

const NavigationMenuContent = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	NavigationMenuContentProps
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			"left-0 top-0 w-full md:absolute md:w-auto",
			"data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in",
			"data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out",
			"data-[motion=from-start]:slide-in-from-left-52",
			"data-[motion=from-end]:slide-in-from-right-52",
			"data-[motion=to-start]:slide-out-to-left-52",
			"data-[motion=to-end]:slide-out-to-right-52",
			className
		)}
		{...props}
	/>
));

export default NavigationMenuContent;
