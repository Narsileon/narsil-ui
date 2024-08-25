import { cn } from "@narsil-ui/Components";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

export const badgeVariants = cva(
	cn(
		"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
		"focus:outline-none focus:ring-2 focus:ring-primary-highlight focus:ring-offset-2"
	),
	{
		variants: {
			variant: {
				default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
				secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
				destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
				outline: "text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, variant, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(badgeVariants({ variant }), className)}
		{...props}
	/>
));

export default Badge;
