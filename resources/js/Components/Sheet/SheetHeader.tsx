import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface SheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col gap-y-2 text-center sm:text-left", className)}
		{...props}
	/>
));

export default SheetHeader;
