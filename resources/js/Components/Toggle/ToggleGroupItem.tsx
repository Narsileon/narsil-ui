import { cn } from '@narsil-ui/Components';
import { ToggleGroupContext } from './ToggleGroup';
import { toggleVariants } from './Toggle';
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

const ToggleGroupItem = React.forwardRef<
	React.ElementRef<typeof ToggleGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
	const context = React.useContext(ToggleGroupContext);

	return (
		<ToggleGroupPrimitive.Item
			ref={ref}
			className={cn(
				toggleVariants({
					variant: context.variant || variant,
					size: context.size || size,
				}),
				className
			)}
			{...props}
		>
			{children}
		</ToggleGroupPrimitive.Item>
	);
});

export default ToggleGroupItem;
