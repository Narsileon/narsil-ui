import { cn } from 'ui/Components';
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(
			'mt-2 ring-offset-background space-y-4',
			'focus-visible:outline-none focus-visible:border-primary',
			className
		)}
		{...props}
	/>
));

export default TabsContent;
