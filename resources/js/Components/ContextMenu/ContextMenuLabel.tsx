import { cn } from '@narsil-ui/Components';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as React from 'react';

const ContextMenuLabel = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<ContextMenuPrimitive.Label
		ref={ref}
		className={cn('px-2 py-1.5 text-sm font-semibold text-foreground', inset && 'pl-8', className)}
		{...props}
	/>
));

export default ContextMenuLabel;
