import { cn } from "@narsil-ui/Components";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import * as React from "react";

export interface ContextMenuItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.Item> {
	inset?: boolean;
}

const ContextMenuItem = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Item>, ContextMenuItemProps>(
	({ className, inset, ...props }, ref) => (
		<ContextMenuPrimitive.Item
			ref={ref}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
				"focus:bg-accent focus:text-accent-foreground",
				"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				inset && "pl-8",
				className
			)}
			{...props}
		/>
	)
);

export default ContextMenuItem;
