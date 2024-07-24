import { cn } from "@narsil-ui/Components";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export const buttonVariants = cva(
	cn(
		"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors",
		"focus-visible:outline-none focus-visible:border-primary",
		"disabled:pointer-events-none disabled:opacity-50"
	),
	{
		variants: {
			variant: {
				default: "bg-primary font-medium text-primary-foreground hover:bg-primary/90",
				destructive: "bg-destructive font-medium text-destructive-foreground hover:bg-destructive/90",
				ghost: "font-medium hover:bg-accent hover:text-accent-foreground",
				"inline-link": "text-primary underline-offset-4 hover:underline",
				link: "underline-offset-4 hover:underline",
				outline: "border border-input bg-background font-medium hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-secondary font-medium text-secondary-foreground hover:bg-secondary/80",
			},
			size: {
				default: "h-10 px-4 py-2",
				icon: "h-10 w-10",
				lg: "h-11 rounded-md px-8",
				link: "",
				sm: "h-9 rounded-md px-3",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
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
