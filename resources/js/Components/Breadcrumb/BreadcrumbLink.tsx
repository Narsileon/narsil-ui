import { cn } from 'ui/Components';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

const BreadcrumbLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentPropsWithoutRef<'a'> & {
		asChild?: boolean;
	}
>(({ asChild, className, ...props }, ref) => {
	const Comp = asChild ? Slot : 'a';

	return (
		<Comp
			ref={ref}
			className={cn('transition-colors hover:text-foreground', className)}
			{...props}
		/>
	);
});

export default BreadcrumbLink;
