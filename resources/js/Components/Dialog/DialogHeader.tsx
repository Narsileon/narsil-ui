import { cn } from 'ui/Components';
import * as React from 'react';

const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
			{...props}
		/>
	)
);

export default DialogHeader;
