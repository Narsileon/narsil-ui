import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {}

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(({ className, ...props }, ref) => (
	<nav
		ref={ref}
		className={cn("mx-auto flex w-full items-center justify-center", className)}
		aria-label='pagination'
		role='navigation'
		{...props}
	/>
));

export default Pagination;
