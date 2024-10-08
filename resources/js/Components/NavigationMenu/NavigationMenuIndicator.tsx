import { cn } from "@narsil-ui/Components";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";

export interface NavigationMenuIndicatorProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Indicator> {}

const NavigationMenuIndicator = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(
			"top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
			"data-[state=visible]:animate-in data-[state=visible]:fade-in",
			"data-[state=hidden]:animate-out data-[state=hidden]:fade-out",
			className
		)}
		{...props}
	>
		<div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md' />
	</NavigationMenuPrimitive.Indicator>
));

export default NavigationMenuIndicator;
