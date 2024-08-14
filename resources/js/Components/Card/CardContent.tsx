import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("space-y-4 pt-0", className)}
		{...props}
	/>
));

export default CardContent;
