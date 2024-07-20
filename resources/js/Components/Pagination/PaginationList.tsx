import { cn } from '@narsil-ui/Components';
import * as React from 'react';

const PaginationList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
	({ className, ...props }, ref) => (
		<ul
			ref={ref}
			className={cn('flex flex-row items-center gap-1', className)}
			{...props}
		/>
	)
);

export default PaginationList;
