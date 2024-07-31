import { cn } from "@narsil-ui/Components";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";

const AlertDialogTitle = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Title>, AlertDialogTitleProps>(
	({ className, ...props }, ref) => (
		<AlertDialogPrimitive.Title
			ref={ref}
			className={cn("text-lg font-semibold", className)}
			{...props}
		/>
	)
);

export default AlertDialogTitle;
