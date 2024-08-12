import { cn } from "@narsil-ui/Components";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export const buttonVariants = cva(
	cn(
		"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors",
		"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
		"disabled:pointer-events-none disabled:opacity-50"
	),
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
				destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				"inline-link": "text-primary underline-offset-4 hover:underline",
				link: "text-primary underline-offset-4 hover:underline",
				outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			},
			size: {
				default: "h-9 px-4 py-2",
				icon: "h-9 w-9",
				lg: "h-10 rounded-md px-8",
				link: "",
				sm: "h-8 rounded-md px-3 text-xs",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

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
