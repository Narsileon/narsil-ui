import { cn } from "@narsil-ui/Components";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as React from "react";

export interface MenubarLabelProps extends React.ComponentProps<typeof MenubarPrimitive.Label> {
	inset?: boolean;
}

const MenubarLabel = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Label>, MenubarLabelProps>(
	({ className, inset, ...props }, ref) => (
		<MenubarPrimitive.Label
			ref={ref}
			className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
			{...props}
		/>
	)
);

export default MenubarLabel;
