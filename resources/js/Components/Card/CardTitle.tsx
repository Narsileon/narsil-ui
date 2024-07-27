import { cn, Heading } from "@narsil-ui/Components";
import { HeadingProps } from "@narsil-ui/Components/Heading/Heading";
import * as React from "react";

const CardTitle = React.forwardRef<HTMLParagraphElement, HeadingProps>(
	({ className, level = "h3", variant = "h4", ...props }, ref) => (
		<Heading
			ref={ref}
			className={cn("flex items-center leading-none", className)}
			level={level}
			variant={variant}
			{...props}
		/>
	)
);

export default CardTitle;
