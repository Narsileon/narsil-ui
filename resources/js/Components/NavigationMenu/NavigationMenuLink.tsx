import { cn } from 'ui/Components';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as React from 'react';

const NavigationMenuLink = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Link>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Link
		ref={ref}
		className={cn('grow truncate', className)}
		{...props}
	/>
));

export default NavigationMenuLink;
