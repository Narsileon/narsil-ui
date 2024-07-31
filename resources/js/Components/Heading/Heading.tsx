import { cn } from "@narsil-ui/Components";
import { cva } from "class-variance-authority";
import * as React from "react";

export const headingVariants = cva(cn("scroll-m-20 font-semibold tracking-tight"), {
	variants: {
		variant: {
			h1: "text-5xl",
			h2: "text-4xl",
			h3: "text-3xl",
			h4: "text-2xl",
			h5: "text-xl",
			h6: "base",
		},
	},
	defaultVariants: {
		variant: "h5",
	},
});

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, level = "h2", variant = "h5", ...props }, ref) => {
		const Comp = level;

		return (
			<Comp
				ref={ref}
				className={cn(headingVariants({ variant, className }))}
				{...props}
			/>
		);
	}
);

export default Heading;
