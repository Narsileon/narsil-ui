import { ChevronRight } from 'lucide-react';
import { cn } from '@narsil-ui/Components';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as React from 'react';

const ContextMenuSubTrigger = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
		inset?: boolean;
	}
>(({ className, inset, children, ...props }, ref) => (
	<ContextMenuPrimitive.SubTrigger
		ref={ref}
		className={cn(
			'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
			'focus:bg-accent focus:text-accent-foreground',
			'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
			inset && 'pl-8',
			className
		)}
		{...props}
	>
		{children}
		<ChevronRight className='ml-auto h-4 w-4' />
	</ContextMenuPrimitive.SubTrigger>
));

export default ContextMenuSubTrigger;
