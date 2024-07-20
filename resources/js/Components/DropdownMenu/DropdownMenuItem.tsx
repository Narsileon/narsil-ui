import { cn } from '@narsil-ui/Components';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as React from 'react';

const DropdownMenuItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Item
		ref={ref}
		className={cn(
			'relative flex gap-x-2 cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
			'focus:bg-accent focus:text-accent-foreground',
			'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			inset && 'pl-8',
			className
		)}
		{...props}
	/>
));

export default DropdownMenuItem;
