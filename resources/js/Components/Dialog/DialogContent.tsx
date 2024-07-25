import { cn } from "@narsil-ui/Components";
import { X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import DialogOverlay from "./DialogOverlay";
import DialogPortal from "./DialogPortal";

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(
				"fixed  z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
				"left-[50%] top-[50%]",
				"translate-x-[-50%] translate-y-[-50%]",
				"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
				"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
				"data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
				"data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
				className
			)}
			{...props}
		>
			{children}
			<DialogPrimitive.Close
				className={cn(
					"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity",
					"hover:opacity-100",
					"focus:outline-none focus:border-primary",
					"disabled:pointer-events-none",
					"data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
				)}
			>
				<X className='h-4 w-4' />
				<span className='sr-only'>Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
));

export default DialogContent;