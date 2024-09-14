import { cn } from "@narsil-ui/Components/utils";
import * as React from "react";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
	separator?: React.ReactNode;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(({ className, ...props }, ref) => (
	<nav
		ref={ref}
		className={cn("flex h-10 items-center", className)}
		aria-label='breadcrumb'
		{...props}
	/>
));

export default Breadcrumb;
