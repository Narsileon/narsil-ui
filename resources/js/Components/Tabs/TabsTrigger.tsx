import { cn } from '@narsil-ui/Components';
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all',
			'focus-visible:outline-none focus-visible:border-primary',
			'disabled:pointer-events-none disabled:opacity-50',
			'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
			className
		)}
		{...props}
	/>
));

export default TabsTrigger;
