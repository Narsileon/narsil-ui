import { cn } from "@narsil-ui/Components";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";
import NavigationMenuViewport from "./NavigationMenuViewport";

export interface NavigationMenuProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Root> {}

const NavigationMenu = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Root>, NavigationMenuProps>(
	({ className, children, orientation = "horizontal", ...props }, ref) => (
		<NavigationMenuPrimitive.Root
			ref={ref}
			className={cn(
				"relative z-10 flex max-w-max flex-1",
				orientation === "horizontal"
					? "items-center justify-center"
					: "min-w-full flex-col items-center justify-start",
				className
			)}
			orientation={orientation}
			{...props}
		>
			{children}
			<NavigationMenuViewport />
		</NavigationMenuPrimitive.Root>
	)
);

export default NavigationMenu;
