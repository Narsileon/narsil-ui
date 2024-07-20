import { cn } from 'ui/Components';
import * as React from 'react';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
	({ className, ...props }, ref) => (
		<li
			ref={ref}
			className={cn('inline-flex items-center gap-1.5', className)}
			{...props}
		/>
	)
);

export default BreadcrumbItem;
