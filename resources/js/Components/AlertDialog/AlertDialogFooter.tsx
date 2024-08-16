import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDialogFooter = React.forwardRef<HTMLDivElement, AlertDialogFooterProps>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", className)}
		{...props}
	/>
));

export default AlertDialogFooter;
