import * as React from "react";

const Breadcrumb = React.forwardRef<
	HTMLElement,
	React.HTMLAttributes<HTMLElement> & {
		separator?: React.ReactNode;
	}
>(({ ...props }, ref) => (
	<nav
		ref={ref}
		aria-label='breadcrumb'
		{...props}
	/>
));

export default Breadcrumb;
