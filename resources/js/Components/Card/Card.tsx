import { cn } from "@narsil-ui/Components";
import { cva } from "class-variance-authority";
import * as React from "react";

export const cardVariants = cva(cn("text-card-foreground"), {
	variants: {
		variant: {
			outline: "rounded-lg border bg-card p-4 shadow-md",
			inline: "",
		},
	},
	defaultVariants: {
		variant: "outline",
	},
});

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(cardVariants({ variant, className }))}
		{...props}
	/>
));

export default Card;
