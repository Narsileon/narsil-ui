import { cn } from "@narsil-ui/Components";
import { toggleVariants } from "./Toggle";
import { useToggleGroup } from "./ToggleGroup";
import { VariantProps } from "class-variance-authority";
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

export interface ToggleGroupItemProps
	extends React.ComponentProps<typeof import("@radix-ui/react-toggle-group").Item>,
		VariantProps<typeof toggleVariants> {}

const ToggleGroupItem = React.forwardRef<React.ElementRef<typeof ToggleGroupPrimitive.Item>, ToggleGroupItemProps>(
	({ className, children, variant, size, ...props }, ref) => {
		const context = useToggleGroup();

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
	}
);

export default ToggleGroupItem;
