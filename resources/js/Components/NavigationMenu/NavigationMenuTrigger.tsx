import { ChevronDown } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { cva } from "class-variance-authority";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";

export const navigationMenuTriggerStyle = cva(
	cn(
		"group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors",
		"hover:bg-accent hover:text-accent-foreground",
		"focus:bg-accent focus:text-accent-foreground focus:outline-none",
		"disabled:pointer-events-none disabled:opacity-50",
		"data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
	)
);

const NavigationMenuTrigger = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(navigationMenuTriggerStyle(), className)}
		{...props}
	>
		{children}
		<ChevronDown
			className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
			aria-hidden='true'
		/>
	</NavigationMenuPrimitive.Trigger>
));

export default NavigationMenuTrigger;
