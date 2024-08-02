import { cn } from "@narsil-ui/Components";
import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

const CommandList = React.forwardRef<React.ElementRef<typeof CommandPrimitive.List>, CommandListProps>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.List
			ref={ref}
			className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
			{...props}
		/>
	)
);

export default CommandList;
