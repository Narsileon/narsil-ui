import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

export interface SheetDescriptionProps extends React.ComponentProps<typeof SheetPrimitive.Description> {}

const SheetDescription = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Description>, SheetDescriptionProps>(
	({ className, ...props }, ref) => (
		<SheetPrimitive.Description
			ref={ref}
			className={cn("text-sm text-muted-foreground", className)}
			{...props}
		/>
	)
);

export default SheetDescription;
