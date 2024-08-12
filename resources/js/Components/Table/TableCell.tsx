import { cn } from "@narsil-ui/Components";
import * as React from "react";

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(({ className, ...props }, ref) => (
	<td
		ref={ref}
		className={cn("h-9 px-4 py-1 align-middle [&:has([role=checkbox])]:pr-0", className)}
		{...props}
	/>
));

export default TableCell;
