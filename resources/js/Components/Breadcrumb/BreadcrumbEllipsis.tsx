import { cn } from "@narsil-ui/Components";
import { MoreHorizontal } from "lucide-react";
import * as React from "react";

const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
	({ className, ...props }, ref) => (
		<span
			ref={ref}
			className={cn("flex h-9 w-9 items-center justify-center", className)}
			aria-hidden='true'
			role='presentation'
			{...props}
		>
			<MoreHorizontal className='h-4 w-4' />
			<span className='sr-only'>More</span>
		</span>
	)
);

export default BreadcrumbEllipsis;