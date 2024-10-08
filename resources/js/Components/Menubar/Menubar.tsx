import { cn } from "@narsil-ui/Components";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as React from "react";

export interface MenubarProps extends React.ComponentProps<typeof MenubarPrimitive.Root> {}

const Menubar = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Root>, MenubarProps>(
	({ className, ...props }, ref) => (
		<MenubarPrimitive.Root
			ref={ref}
			className={cn("flex h-9 items-center gap-x-1 rounded-md border bg-background p-1 shadow-sm", className)}
			{...props}
		/>
	)
);

export default Menubar;
