import { cn } from "@narsil-ui/Components";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

export const alertVariants = cva(
	cn(
		"relative w-full rounded-lg border p-4",
		"[&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground"
	),
	{
		variants: {
			variant: {
				default: "bg-background text-foreground",
				destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(alertVariants({ variant }), className)}
		role='alert'
		{...props}
	/>
));

export default Alert;
