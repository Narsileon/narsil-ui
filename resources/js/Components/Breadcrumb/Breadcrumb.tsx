import * as React from "react";

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(({ ...props }, ref) => (
	<nav
		ref={ref}
		aria-label='breadcrumb'
		{...props}
	/>
));

export default Breadcrumb;
