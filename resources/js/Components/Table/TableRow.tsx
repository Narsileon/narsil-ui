import { cn } from "@narsil-ui/Components";
import * as React from "react";

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(({ className, ...props }, ref) => (
	<tr
		ref={ref}
		className={cn("border-b transition-colors", "hover:bg-muted/50", "data-[state=selected]:bg-muted", className)}
		{...props}
	/>
));

export default TableRow;
