import { cn } from "@narsil-ui/Components";
import * as React from "react";

const PaginationNav = React.forwardRef<HTMLDivElement, PaginationNavProps>(({ className, ...props }, ref) => (
	<nav
		ref={ref}
		className={cn("flex items-center justify-center w-full mx-auto", className)}
		aria-label='pagination'
		role='navigation'
		{...props}
	/>
));

export default PaginationNav;
