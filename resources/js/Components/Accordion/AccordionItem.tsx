import { cn } from '@narsil-ui/Components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('border-b', className)}
		{...props}
	/>
));

export default AccordionItem;
