import * as React from "react";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
	separator?: React.ReactNode;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(({ ...props }, ref) => (
	<nav
		ref={ref}
		aria-label='breadcrumb'
		{...props}
	/>
));

export default Breadcrumb;
