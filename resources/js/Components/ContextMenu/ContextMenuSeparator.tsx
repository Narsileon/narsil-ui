import { cn } from "@narsil-ui/Components";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import * as React from "react";

const ContextMenuSeparator = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Separator>,
	ContextMenuSeparatorProps
>(({ className, ...props }, ref) => (
	<ContextMenuPrimitive.Separator
		ref={ref}
		className={cn("-mx-1 my-1 h-px bg-border", className)}
		{...props}
	/>
));

export default ContextMenuSeparator;
