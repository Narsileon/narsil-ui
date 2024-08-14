import { cn } from "@narsil-ui/Components";
import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

export interface CommandProps extends React.ComponentProps<typeof CommandPrimitive> {}

const Command = React.forwardRef<React.ElementRef<typeof CommandPrimitive>, CommandProps>(
	({ className, ...props }, ref) => (
		<CommandPrimitive
			ref={ref}
			className={cn(
				"flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
				className
			)}
			{...props}
		/>
	)
);

export default Command;
