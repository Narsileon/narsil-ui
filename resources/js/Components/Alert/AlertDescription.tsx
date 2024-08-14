import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("text-sm [&_p]:leading-relaxed", className)}
			{...props}
		/>
	)
);

export default AlertDescription;
