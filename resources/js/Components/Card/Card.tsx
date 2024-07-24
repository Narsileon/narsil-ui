import { cn } from "@narsil-ui/Components";
import * as React from "react";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("rounded-lg border bg-card p-4 text-card-foreground shadow-md", className)}
		{...props}
	/>
));

export default Card;
