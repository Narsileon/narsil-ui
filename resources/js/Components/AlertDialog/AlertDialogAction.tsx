import { buttonVariants } from "@narsil-ui/Components/Button/Button";
import { cn } from "@narsil-ui/Components";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";

export interface AlertDialogActionProps extends React.ComponentProps<typeof AlertDialogPrimitive.Action> {}

const AlertDialogAction = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Action>,
	AlertDialogActionProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Action
		ref={ref}
		className={cn(buttonVariants(), className)}
		{...props}
	/>
));

export default AlertDialogAction;
