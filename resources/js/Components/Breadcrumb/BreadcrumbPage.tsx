import { cn } from "@narsil-ui/Components";
import * as React from "react";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
	({ className, ...props }, ref) => (
		<span
			ref={ref}
			className={cn("font-normal text-foreground", className)}
			aria-current='page'
			aria-disabled='true'
			role='link'
			{...props}
		/>
	)
);

export default BreadcrumbPage;
