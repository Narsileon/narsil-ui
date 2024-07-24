import { cn } from "@narsil-ui/Components";
import * as React from "react";

const SectionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("pt-0 space-y-4", className)}
			{...props}
		/>
	)
);

export default SectionContent;
