import { cn } from "@narsil-ui/Components";
import { cva, VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import SheetPortal, { SheetPortalProps } from "./SheetPortal";
import SheetOverlay from "./SheetOverlay";

export const sheetVariants = cva(
	"fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
	{
		variants: {
			side: {
				top: cn(
					"inset-x-0 top-0 border-b",
					"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top"
				),
				bottom: cn(
					"inset-x-0 bottom-0 border-t",
					"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
				),
				left: cn(
					"inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
					"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left"
				),
				right: cn(
					"inset-y-0 right-0 h-full w-3/4  border-l sm:max-w-sm",
					"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
				),
			},
		},
		defaultVariants: {
			side: "right",
		},
	}
);

export interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
		Pick<SheetPortalProps, "container">,
		VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
	({ children, className, container, side = "right", ...props }, ref) => (
		<SheetPortal container={container}>
			<SheetOverlay />
			<SheetPrimitive.Content
				ref={ref}
				className={cn(sheetVariants({ side }), className)}
				{...props}
			>
				{children}
				<SheetPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'>
					<X className='h-4 w-4' />
					<span className='sr-only'>Close</span>
				</SheetPrimitive.Close>
			</SheetPrimitive.Content>
		</SheetPortal>
	)
);

export default SheetContent;
