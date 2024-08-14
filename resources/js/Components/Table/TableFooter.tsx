import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(({ className, ...props }, ref) => (
	<tfoot
		ref={ref}
		className={cn("border-t bg-muted/50 font-medium", "[&>tr]:last:border-b-0", className)}
		{...props}
	/>
));

export default TableFooter;
