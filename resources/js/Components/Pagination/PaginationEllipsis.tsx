import { cn } from "@narsil-ui/Components";
import { MoreHorizontal } from "lucide-react";
import * as React from "react";

export interface PaginationEllipsisProps extends React.HTMLAttributes<HTMLSpanElement> {}

const PaginationEllipsis = React.forwardRef<HTMLSpanElement, PaginationEllipsisProps>(
	({ className, ...props }, ref) => {
		return (
			<span
				ref={ref}
				className={cn("flex h-10 w-10 items-center justify-center", className)}
				aria-hidden='true'
				{...props}
			>
				<MoreHorizontal className='h-5 w-5' />
			</span>
		);
	}
);

export default PaginationEllipsis;
