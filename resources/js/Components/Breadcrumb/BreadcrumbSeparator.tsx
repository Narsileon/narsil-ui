import { ChevronRight } from 'lucide-react';
import { cn } from 'ui/Components';
import * as React from 'react';

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
	({ children, className, ...props }, ref) => (
		<li
			ref={ref}
			className={cn('[&>svg]:size-3.5', className)}
			aria-hidden='true'
			role='presentation'
			{...props}
		>
			{children ?? <ChevronRight />}
		</li>
	)
);

export default BreadcrumbSeparator;
