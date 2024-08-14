import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface BreadcrumbListProps extends React.HTMLAttributes<HTMLOListElement> {}

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(({ className, ...props }, ref) => (
	<ol
		ref={ref}
		className={cn(
			"flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
			className
		)}
		{...props}
	/>
));

export default BreadcrumbList;
