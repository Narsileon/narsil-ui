import { cn } from "@narsil-ui/Components";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

const spinnerVariants = cva("flex-col items-center justify-center", {
	variants: {
		show: {
			true: "flex",
			false: "hidden",
		},
	},
	defaultVariants: {
		show: true,
	},
});

const loaderVariants = cva("animate-spin text-primary", {
	variants: {
		size: {
			small: "h-4 w-4",
			medium: "h-6 w-6",
			large: "h-8 w-8",
		},
	},
	defaultVariants: {
		size: "medium",
	},
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants>, VariantProps<typeof loaderVariants> {
	className?: string;
	children?: React.ReactNode;
}

const Spinner = ({ children, className, size, show }: SpinnerProps) => {
	return (
		<span className={spinnerVariants({ show })}>
			<Loader2 className={cn(loaderVariants({ size }), className)} />
			{children}
		</span>
	);
};

export default Spinner;
