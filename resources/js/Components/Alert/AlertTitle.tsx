import { cn, Heading } from "@narsil-ui/Components";
import * as React from "react";

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
