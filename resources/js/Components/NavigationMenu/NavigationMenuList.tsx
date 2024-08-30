import { cn } from "@narsil-ui/Components";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";

export interface NavigationMenuListProps extends React.ComponentProps<typeof NavigationMenuPrimitive.List> {}

const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	NavigationMenuListProps
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn(
			"group flex flex-1 list-none",
			"data-[orientation=vertical]:flex-col",
			"data-[orientation=vertical]:items-start",
			"data-[orientation=vertical]:justify-start",
			"data-[orientation=vertical]:gap-y-1",
			"data-[orientation=vertical]:w-full",
			"data-[orientation=horizontal]:flex-row",
			"data-[orientation=horizontal]:items-center",
			"data-[orientation=horizontal]:justify-center",
			"data-[orientation=horizontal]:gap-x-1",
			className
		)}
		{...props}
	/>
));

export default NavigationMenuList;
