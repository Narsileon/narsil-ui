import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDialogHeader = React.forwardRef<HTMLDivElement, AlertDialogHeaderProps>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col gap-y-2 text-center sm:text-left", className)}
		{...props}
	/>
));

export default AlertDialogHeader;
