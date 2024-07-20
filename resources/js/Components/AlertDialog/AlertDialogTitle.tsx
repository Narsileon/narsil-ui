import { cn } from 'ui/Components';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as React from 'react';

const AlertDialogTitle = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Title
		ref={ref}
		className={cn('text-lg font-semibold', className)}
		{...props}
	/>
));

export default AlertDialogTitle;
