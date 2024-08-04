import { cn } from "@narsil-ui/Components";
import * as React from "react";

const MenubarShortcut = React.forwardRef<HTMLSpanElement, MenubarShortcutProps>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
		{...props}
	/>
));

export default MenubarShortcut;
