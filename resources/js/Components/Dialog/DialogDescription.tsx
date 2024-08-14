import { cn } from "@narsil-ui/Components";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

export interface DialogDescriptionProps extends React.ComponentProps<typeof DialogPrimitive.Description> {}

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	DialogDescriptionProps
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));

export default DialogDescription;
