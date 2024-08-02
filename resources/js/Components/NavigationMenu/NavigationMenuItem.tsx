import { cn } from "@narsil-ui/Components";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";

const NavigationMenuItem = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Item>,
	NavigationMenuItemProps
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Item
		ref={ref}
		className={cn("grow", className)}
		{...props}
	/>
));

export default NavigationMenuItem;
