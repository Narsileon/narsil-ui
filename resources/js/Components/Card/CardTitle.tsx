import { cn } from "@narsil-ui/Components";
import * as React from "react";
import Heading, { HeadingProps } from "@narsil-ui/Components/Heading/Heading";

export interface CardTitleProps extends HeadingProps {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
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
