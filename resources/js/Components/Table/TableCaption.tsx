import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {}

const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(({ className, ...props }, ref) => (
	<caption
		ref={ref}
		className={cn("mt-4 text-sm text-muted-foreground", className)}
		{...props}
	/>
));

export default TableCaption;
