import { cn } from "@narsil-ui/Components";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as React from "react";

const MenubarSeparator = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Separator>, MenubarSeparatorProps>(
	({ className, ...props }, ref) => (
		<MenubarPrimitive.Separator
			ref={ref}
			className={cn("-mx-1 my-1 h-px bg-muted", className)}
			{...props}
		/>
	)
);

export default MenubarSeparator;
