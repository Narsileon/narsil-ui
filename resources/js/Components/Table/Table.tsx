import { cn } from "@narsil-ui/Components";
import * as React from "react";

const Table = React.forwardRef<HTMLTableElement, TableProps>(({ className, ...props }, ref) => (
	<div className='relative w-full overflow-auto'>
		<table
			ref={ref}
			className={cn("w-full caption-bottom text-sm", className)}
			{...props}
		/>
	</div>
));

export default Table;
