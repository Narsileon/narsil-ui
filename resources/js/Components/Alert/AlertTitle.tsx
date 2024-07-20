import { cn } from '@narsil-ui/Components';
import * as React from 'react';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h5
			ref={ref}
			className={cn('mb-1 font-medium leading-none tracking-tight', className)}
			{...props}
		/>
	)
);

export default AlertTitle;
