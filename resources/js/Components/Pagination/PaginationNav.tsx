import { cn } from "@narsil-ui/Components";
import * as React from "react";

const PaginationNav = React.forwardRef<HTMLDivElement, PaginationNavProps>(({ className, ...props }, ref) => (
	<nav
		ref={ref}
		className={cn("mx-auto flex w-full items-center justify-center", className)}
		aria-label='pagination'
		role='navigation'
		{...props}
	/>
));

export default PaginationNav;
