import { cn } from "@narsil-ui/Components";
import * as React from "react";

const SheetFooter = React.forwardRef<HTMLDivElement, SheetFooterProps>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
		{...props}
	/>
));

export default SheetFooter;
