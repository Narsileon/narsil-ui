import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

const CommandShortcut = React.forwardRef<HTMLSpanElement, CommandShortcutProps>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
		{...props}
	/>
));

export default CommandShortcut;
