import { cn } from 'ui/Components';
import * as React from 'react';

const AlertDialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
			{...props}
		/>
	)
);

export default AlertDialogHeader;
