import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
		{...props}
	/>
));

export default DialogHeader;
