import { ChevronRight } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLLIElement> {}

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
	({ children, className, ...props }, ref) => (
		<li
			ref={ref}
			className={cn("[&>svg]:size-3.5", className)}
			aria-hidden='true'
			role='presentation'
			{...props}
		>
			{children ?? <ChevronRight />}
		</li>
	)
);

export default BreadcrumbSeparator;
