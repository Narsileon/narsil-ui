import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface BreadcrumbPageProps extends React.HTMLAttributes<HTMLSpanElement> {}

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		className={cn("font-normal text-foreground", className)}
		aria-current='page'
		aria-disabled='true'
		role='link'
		{...props}
	/>
));

export default BreadcrumbPage;
