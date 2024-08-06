import { cn } from "@narsil-ui/Components";
import * as React from "react";

const Table = React.forwardRef<HTMLTableElement, TableProps>(({ className, ...props }, ref) => (
	<div className='w-max rounded-md border'>
		<table
			ref={ref}
			className={cn("table-auto caption-bottom text-sm", className)}
			{...props}
		/>
	</div>
));

export default Table;
