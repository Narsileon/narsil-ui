import { cn } from "@narsil-ui/Components";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";

export interface DropdownMenuSeparatorProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Separator> {}

const DropdownMenuSeparator = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
	DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.Separator
		ref={ref}
		className={cn("-mx-1 my-1 h-px bg-muted", className)}
		{...props}
	/>
));

export default DropdownMenuSeparator;
