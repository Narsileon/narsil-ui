import { cn } from '@narsil-ui/Components';
import * as React from 'react';

const PaginationItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
	({ className, ...props }, ref) => (
		<li
			ref={ref}
			className={cn('', className)}
			{...props}
		/>
	)
);

export default PaginationItem;
