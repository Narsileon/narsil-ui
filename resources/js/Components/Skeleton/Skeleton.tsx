import { cn } from 'ui/Components';
import * as React from 'react';

const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('animate-pulse rounded-md bg-primary/10', className)}
			{...props}
		/>
	)
);

export default Skeleton;
