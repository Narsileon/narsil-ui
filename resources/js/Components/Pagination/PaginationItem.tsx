import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface PaginationItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const PaginationItem = React.forwardRef<HTMLLIElement, PaginationItemProps>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={cn("", className)}
		{...props}
	/>
));

export default PaginationItem;
