import { ChevronDown } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { cva } from "class-variance-authority";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";

export const navigationMenuTriggerStyle = cva(
	cn(
		"relative group inline-flex flex-1 items-center justify-start w-full h-10 gap-x-4 rounded-md bg-background px-3.5 py-2 text-sm font-medium transition-colors",
		"hover:bg-accent hover:text-accent-foreground",
		"focus:bg-accent focus:text-accent-foreground focus:outline-none",
		"disabled:pointer-events-none disabled:opacity-50",
		"data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
		"[&>img]:max-w-5 [&>img]:max-h-5"
	)
);

export interface NavigationMenuTriggerProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {}

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
			className='h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180'
			aria-hidden='true'
		/>
	</NavigationMenuPrimitive.Trigger>
));

export default NavigationMenuTrigger;
