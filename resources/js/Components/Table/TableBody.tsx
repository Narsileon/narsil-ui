import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface TableBopyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBopyProps>(({ className, ...props }, ref) => (
	<tbody
		ref={ref}
		className={cn("[&_tr:last-child]:border-0", className)}
		{...props}
	/>
));

export default TableBody;
