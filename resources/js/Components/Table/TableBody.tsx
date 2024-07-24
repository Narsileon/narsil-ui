import { cn } from "@narsil-ui/Components";
import * as React from "react";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
	({ className, ...props }, ref) => (
		<tbody
			ref={ref}
			className={cn("[&_tr:last-child]:border-0", className)}
			{...props}
		/>
	)
);

export default TableBody;
