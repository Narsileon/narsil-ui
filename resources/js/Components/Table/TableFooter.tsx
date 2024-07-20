import { cn } from 'ui/Components';
import * as React from 'react';

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
	({ className, ...props }, ref) => (
		<tfoot
			ref={ref}
			className={cn('border-t bg-muted/50 font-medium', '[&>tr]:last:border-b-0', className)}
			{...props}
		/>
	)
);

export default TableFooter;
