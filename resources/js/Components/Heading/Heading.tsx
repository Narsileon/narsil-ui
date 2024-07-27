import { cn } from "@narsil-ui/Components";
import { cva, type VariantProps } from "class-variance-authority";
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

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
	level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(({ level, ...props }, ref) => {
	const Comp = level;

	return (
		<Comp
			ref={ref}
			{...props}
		/>
	);
});

export default Heading;
