import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface PaginationListProps extends React.HTMLAttributes<HTMLUListElement> {}

const PaginationList = React.forwardRef<HTMLUListElement, PaginationListProps>(({ className, ...props }, ref) => (
	<ul
		ref={ref}
		className={cn("flex flex-row items-center gap-1", className)}
		{...props}
	/>
));

export default PaginationList;
