import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

export interface SheetTitleProps extends React.ComponentProps<typeof SheetPrimitive.Title> {}

const SheetTitle = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Title>, SheetTitleProps>(
	({ className, ...props }, ref) => (
		<SheetPrimitive.Title
			ref={ref}
			className={cn("text-lg font-semibold text-foreground", className)}
			{...props}
		/>
	)
);

export default SheetTitle;
