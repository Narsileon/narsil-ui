import { cn } from "@narsil-ui/Components";
import * as React from "react";
import Heading, { HeadingProps } from "@narsil-ui/Components/Heading/Heading";

export interface AlertTitleProps extends HeadingProps {}

const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
	({ className, level = "h2", variant = "h5", ...props }, ref) => (
		<Heading
			ref={ref}
			className={cn("mb-1 leading-none", className)}
			level={level}
			variant={variant}
			{...props}
		/>
	)
);

export default AlertTitle;
