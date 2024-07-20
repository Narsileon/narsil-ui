import { cn } from 'ui/Components';
import React from 'react';

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ children, className }, ref) => (
		<div
			ref={ref}
			className={cn('w-full sm:w-11/12 md:w-10/12 lg:w-9/12 h-fit px-4 mx-auto', className)}
		>
			{children}
		</div>
	)
);

export default Container;
