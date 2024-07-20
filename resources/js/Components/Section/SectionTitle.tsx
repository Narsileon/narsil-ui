import { cn } from '@narsil-ui/Components';
import * as React from 'react';

const SectionTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h3
			ref={ref}
			className={cn('flex items-center text-2xl font-semibold leading-none tracking-tight', className)}
			{...props}
		/>
	)
);

export default SectionTitle;
