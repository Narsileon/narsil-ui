import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(({ className, ...props }, ref) => (
	<div className='rounded-md border'>
		<table
			ref={ref}
			className={cn("min-w-max table-auto caption-bottom text-sm", className)}
			{...props}
		/>
	</div>
));

export default Table;
