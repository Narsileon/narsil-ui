import { cn } from "@narsil-ui/Components";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";

export interface DropdownMenuContentProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Content> {}

const DropdownMenuContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Content>,
	DropdownMenuContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(
				"z-50 min-w-24 overflow-hidden rounded-md border bg-popover p-2 text-popover-foreground shadow-md",
				"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
				"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
				"data-[side=bottom]:slide-in-from-top-2",
				"data-[side=left]:slide-in-from-right-2",
				"data-[side=right]:slide-in-from-left-2",
				"data-[side=top]:slide-in-from-bottom-2",
				className
			)}
			onCloseAutoFocus={(event) => {
				event.preventDefault();
			}}
			{...props}
		/>
	</DropdownMenuPrimitive.Portal>
));

export default DropdownMenuContent;
