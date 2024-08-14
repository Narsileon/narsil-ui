import { cn } from "@narsil-ui/Components";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as React from "react";

export interface MenubarTriggerProps extends React.ComponentProps<typeof MenubarPrimitive.Trigger> {}

const MenubarTrigger = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Trigger>, MenubarTriggerProps>(
	({ className, ...props }, ref) => (
		<MenubarPrimitive.Trigger
			ref={ref}
			className={cn(
				"flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none",
				"focus:bg-accent focus:text-accent-foreground",
				"data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
				className
			)}
			{...props}
		/>
	)
);

export default MenubarTrigger;
