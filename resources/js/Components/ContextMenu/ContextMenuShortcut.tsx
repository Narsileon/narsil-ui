import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface ContextMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

const ContextMenuShortcut = React.forwardRef<HTMLSpanElement, ContextMenuShortcutProps>(
	({ className, ...props }, ref) => (
		<span
			ref={ref}
			className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
			{...props}
		/>
	)
);

export default ContextMenuShortcut;
