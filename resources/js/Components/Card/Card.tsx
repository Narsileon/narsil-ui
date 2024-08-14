import { cn } from "@narsil-ui/Components";
import { cva, VariantProps } from "class-variance-authority";
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

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(cardVariants({ variant, className }))}
		{...props}
	/>
));

export default Card;
