import { cn } from 'ui/Components';
import { Command as CommandPrimitive } from 'cmdk';
import * as React from 'react';

const CommandItem = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Item
		ref={ref}
		className={cn(
			'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
			'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground',
			'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
			className
		)}
		{...props}
	/>
));

export default CommandItem;
