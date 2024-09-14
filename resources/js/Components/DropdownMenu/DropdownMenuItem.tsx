import { cn } from "@narsil-ui/Components";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";

export interface DropdownMenuItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {
	active?: boolean;
	inset?: boolean;
}

const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Item>, DropdownMenuItemProps>(
	({ active, className, inset, ...props }, ref) => (
		<DropdownMenuPrimitive.Item
			ref={ref}
			className={cn(
				active && "font-bold text-primary-highlight",
				"relative flex w-full cursor-default select-none items-center gap-x-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
				"focus:bg-accent focus:text-accent-foreground",
				"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				inset && "pl-8",
				className
			)}
			{...props}
		/>
	)
);

export default DropdownMenuItem;
