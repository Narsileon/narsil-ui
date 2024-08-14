import { cn } from "@narsil-ui/Components";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as React from "react";

export interface MenubarContentProps extends React.ComponentProps<typeof MenubarPrimitive.Content> {}

const MenubarContent = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Content>, MenubarContentProps>(
	({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
		<MenubarPrimitive.Portal>
			<MenubarPrimitive.Content
				ref={ref}
				align={align}
				alignOffset={alignOffset}
				sideOffset={sideOffset}
				className={cn(
					"z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
					"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
					"data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
					"data-[side=bottom]:slide-in-from-top-2",
					"data-[side=left]:slide-in-from-right-2",
					"data-[side=right]:slide-in-from-left-2",
					"data-[side=top]:slide-in-from-bottom-2",
					className
				)}
				{...props}
			/>
		</MenubarPrimitive.Portal>
	)
);

export default MenubarContent;
