import { buttonVariants } from "@narsil-ui/Components/Button/Button";
import { cn } from "@narsil-ui/Components";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";

export interface AlertDialogCancelProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> {}

const AlertDialogCancel = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
	AlertDialogCancelProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Cancel
		ref={ref}
		className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
		{...props}
	/>
));

export default AlertDialogCancel;
