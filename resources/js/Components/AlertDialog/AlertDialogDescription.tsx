import { cn } from "@narsil-ui/Components";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";

const AlertDialogDescription = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Description>,
	AlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Description
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));

export default AlertDialogDescription;
