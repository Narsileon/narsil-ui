import { cn } from 'ui/Components';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as React from 'react';

const DropdownMenuSeparator = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.Separator
		ref={ref}
		className={cn('-mx-1 my-1 h-px bg-muted', className)}
		{...props}
	/>
));

export default DropdownMenuSeparator;
