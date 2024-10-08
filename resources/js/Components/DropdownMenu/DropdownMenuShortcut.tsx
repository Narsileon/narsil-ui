import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface DropdownMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

const DropdownMenuShortcut = React.forwardRef<HTMLSpanElement, DropdownMenuShortcutProps>(
	({ className, ...props }, ref) => (
		<span
			ref={ref}
			className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
			{...props}
		/>
	)
);

export default DropdownMenuShortcut;
