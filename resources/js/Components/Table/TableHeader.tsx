import { cn } from "@narsil-ui/Components";
import * as React from "react";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
	({ className, ...props }, ref) => (
		<thead
			ref={ref}
			className={cn("[&_tr]:border-b", className)}
			{...props}
		/>
	)
);

export default TableHeader;
