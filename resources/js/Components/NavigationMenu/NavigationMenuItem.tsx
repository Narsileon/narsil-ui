import { cn } from "@narsil-ui/Components";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";

export interface NavigationMenuItemProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Item> {}

const NavigationMenuItem = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Item>,
	NavigationMenuItemProps
>(({ className, onMouseEnter, onMouseLeave, ...props }, ref) => {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<NavigationMenuPrimitive.Item
			ref={ref}
			className={cn("grow", className)}
			onMouseEnter={(event) => {
				setIsHovered(true);

				onMouseEnter?.(event);
			}}
			onMouseLeave={(event) => {
				setIsHovered(false);

				onMouseLeave?.(event);
			}}
			data-hovered={isHovered}
			{...props}
		/>
	);
});

export default NavigationMenuItem;
