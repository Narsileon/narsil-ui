import { cn } from "@narsil-ui/Components";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";

export interface NavigationMenuLinkProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {}

const NavigationMenuLink = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Link>,
	NavigationMenuLinkProps
>(({ active, className, ...props }, ref) => (
	<NavigationMenuPrimitive.Link
		ref={ref}
		className={cn(active && "font-bold text-primary", "grow truncate", className)}
		{...props}
	/>
));

export default NavigationMenuLink;
