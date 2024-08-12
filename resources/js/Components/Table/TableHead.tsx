import { cn } from "@narsil-ui/Components";
import * as React from "react";

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={cn(
			"h-9 px-4 py-1 text-left align-middle font-medium text-muted-foreground",
			"[&:has([role=checkbox])]:pr-0",
			className
		)}
		{...props}
	/>
));

export default TableHead;
