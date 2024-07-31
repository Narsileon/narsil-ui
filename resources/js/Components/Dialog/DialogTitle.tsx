import { cn } from "@narsil-ui/Components";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, DialogTitleProps>(
	({ className, ...props }, ref) => (
		<DialogPrimitive.Title
			ref={ref}
			className={cn("text-lg font-semibold leading-none tracking-tight", className)}
			{...props}
		/>
	)
);

export default DialogTitle;
