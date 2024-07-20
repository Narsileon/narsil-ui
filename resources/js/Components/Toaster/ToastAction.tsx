import { cn } from 'ui/Components';
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

const ToastAction = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Action>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Action
		ref={ref}
		className={cn(
			'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors',
			'hover:bg-secondary focus:outline-none focus:border-primary',
			'disabled:pointer-events-none disabled:opacity-50',
			'group-[.constructive]:border-muted/40 group-[.constructive]:hover:border-constructive/30',
			'group-[.constructive]:hover:bg-constructive',
			'group-[.constructive]:hover:text-constructive-foreground group-[.constructive]:focus:ring-constructive',
			'group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30',
			'group-[.destructive]:hover:bg-destructive',
			'group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
			className
		)}
		{...props}
	/>
));

export default ToastAction;
