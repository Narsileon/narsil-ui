import { cn } from "@narsil-ui/Components";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

export const toggleVariants = cva(
	cn(
		"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors",
		"hover:bg-muted hover:text-muted-foreground",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
		"disabled:pointer-events-none disabled:opacity-50",
		"data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
	),
	{
		variants: {
			variant: {
				default: "bg-transparent focus-visible:ring-offset-0",
				outline: cn(
					"border border-border bg-transparent",
					"hover:bg-accent hover:text-accent-foreground",
					"focus-visible:ring-offset-2"
				),
			},
			size: {
				default: "h-10 px-2",
				sm: "h-9 px-1",
				lg: "h-11 px-4",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ToggleProps
	extends React.ComponentProps<typeof TogglePrimitive.Root>,
		VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
	({ className, variant, size, ...props }, ref) => (
		<TogglePrimitive.Root
			ref={ref}
			className={cn(toggleVariants({ variant, size, className }))}
			{...props}
		/>
	)
);

export default Toggle;
