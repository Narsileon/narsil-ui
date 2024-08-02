import { cn } from "@narsil-ui/Components";
import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

const CommandSeparator = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Separator>, CommandSeparatorProps>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.Separator
			ref={ref}
			className={cn("-mx-1 h-px bg-border", className)}
			{...props}
		/>
	)
);

export default CommandSeparator;
