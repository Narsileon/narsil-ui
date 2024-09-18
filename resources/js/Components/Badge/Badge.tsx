import { cn } from "@narsil-ui/Components";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

export const badgeVariants = cva(
	cn(
		"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
		"focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
	),
	{
		variants: {
			variant: {
				primary: "bg-primary text-primary-foreground",
				secondary: "bg-secondary text-secondary-foreground",
				constructive: "border-transparent bg-constructive text-constructive-foreground",
				destructive: "border-transparent bg-destructive text-destructive-foreground",
				outline: "text-foreground",
			},
		},
		defaultVariants: {
			variant: "primary",
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
