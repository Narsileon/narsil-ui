import { cn } from "@narsil-ui/Components";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export const buttonVariants = cva(
	cn(
		"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors gap-x-1",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
		"disabled:pointer-events-none disabled:opacity-50"
	),
	{
		variants: {
			size: {
				default: "h-10",
				icon: "h-10 w-10 min-h-10 min-w-10",
				lg: "h-12 px-8 py-3",
				md: "h-10 px-4 py-2",
				sm: "h-8 px-2 py-1",
			},
			variant: {
				constructive: "bg-constructive font-medium text-constructive-foreground hover:bg-constructive/80",
				destructive: "bg-destructive font-medium text-destructive-foreground hover:bg-destructive/80",
				ghost: "font-medium hover:bg-accent hover:text-accent-foreground focus-visible:ring-offset-0",
				inline: "font-medium underline-offset-4 hover:underline focus-visible:ring-offset-0",
				link: "underline-offset-4 hover:underline focus-visible:ring-offset-0",
				outline: "border border-border bg-background font-medium hover:bg-accent hover:text-accent-foreground",
				primary: cn(
					"font-medium",
					"bg-primary text-primary-foreground",
					"hover:bg-primary-highlight hover:text-primary-highlight-foreground"
				),
				secondary: cn(
					"font-medium",
					"bg-secondary text-secondary-foreground",
					"hover:bg-secondary-highlight hover:text-secondary-highlight-foreground"
				),
			},
		},
		defaultVariants: {
			size: "md",
			variant: "primary",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	isActive?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ asChild = false, className, isActive, size, variant, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		if (isActive) {
			className = cn(className, "border-primary");
		}

		return (
			<Comp
				ref={ref}
				className={cn(buttonVariants({ variant, size, className }))}
				{...props}
			/>
		);
	}
);

export default Button;
