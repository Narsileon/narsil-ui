import { cn } from 'ui/Components';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

const toastVariants = cva(
	cn(
		'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',
		'data-[swipe=cancel]:translate-x-0',
		'data-[swipe=end]:animate-out data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
		'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none',
		'data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
		'data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full'
	),
	{
		variants: {
			variant: {
				default: 'border bg-background text-foreground',
				constructive: 'constructive group border-constructive bg-constructive text-constructive-foreground',
				destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

const Toast = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
	return (
		<ToastPrimitives.Root
			ref={ref}
			className={cn(toastVariants({ variant }), className)}
			{...props}
		/>
	);
});

export default Toast;
