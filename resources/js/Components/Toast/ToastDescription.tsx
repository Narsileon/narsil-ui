import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";

export interface ToastDescriptionProps extends React.ComponentProps<typeof ToastPrimitives.Description> {}

const ToastDescription = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Description>, ToastDescriptionProps>(
	({ className, ...props }, ref) => (
		<ToastPrimitives.Description
			ref={ref}
			className={cn("text-sm opacity-90", className)}
			{...props}
		/>
	)
);

export default ToastDescription;
