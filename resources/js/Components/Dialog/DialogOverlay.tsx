import { cn } from "@narsil-ui/Components";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

export interface DialogOverlayProps extends React.ComponentProps<typeof DialogPrimitive.Overlay> {}

const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, DialogOverlayProps>(
	({ className, ...props }, ref) => (
		<DialogPrimitive.Overlay
			ref={ref}
			className={cn(
				"fixed inset-0 z-50 bg-black/80",
				"data-[state=open]:animate-in data-[state=open]:fade-in-0",
				"data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
				className
			)}
			{...props}
		/>
	)
);

export default DialogOverlay;
