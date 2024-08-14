import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
		{...props}
	/>
));

export default DialogFooter;
