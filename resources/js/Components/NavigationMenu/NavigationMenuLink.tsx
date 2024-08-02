import { cn } from "@narsil-ui/Components";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";

const NavigationMenuLink = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Link>,
	NavigationMenuLinkProps
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Link
		ref={ref}
		className={cn("grow truncate", className)}
		{...props}
	/>
));

export default NavigationMenuLink;
