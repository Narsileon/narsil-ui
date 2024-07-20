import { cn } from '@narsil-ui/Components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			'overflow-hidden text-sm transition-all',
			'data-[state=closed]:animate-accordion-up',
			'data-[state=open]:animate-accordion-down'
		)}
		{...props}
	>
		<div className={cn('pb-4 pt-0', className)}>{children}</div>
	</AccordionPrimitive.Content>
));

export default AccordionContent;
