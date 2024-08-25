import { cn } from "@narsil-ui/Components";
import { X } from "lucide-react";
import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

export interface SheetCloseProps extends React.ComponentProps<typeof SheetPrimitive.Close> {}

const SheetClose = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Close>, SheetCloseProps>(
	({ ...props }, ref) => (
		<SheetPrimitive.Close
			ref={ref}
			className={cn(
				"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity",
				"hover:opacity-100",
				"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
				"disabled:pointer-events-none",
				"data-[state=open]:bg-secondary"
			)}
			{...props}
		>
			<X className='h-4 w-4' />
			<span className='sr-only'>Close</span>
		</SheetPrimitive.Close>
	)
);

export default SheetClose;
