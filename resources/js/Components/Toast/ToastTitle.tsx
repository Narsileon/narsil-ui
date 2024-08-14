import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";

export interface ToastTitleProps extends React.ComponentProps<typeof ToastPrimitives.Title> {}

const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Title>, ToastTitleProps>(
	({ className, ...props }, ref) => (
		<ToastPrimitives.Title
			ref={ref}
			className={cn("text-sm font-semibold", className)}
			{...props}
		/>
	)
);

export default ToastTitle;
