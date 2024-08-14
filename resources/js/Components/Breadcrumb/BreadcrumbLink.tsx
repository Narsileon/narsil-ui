import { cn } from "@narsil-ui/Components";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	asChild?: boolean;
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
	({ asChild, className, ...props }, ref) => {
		const Comp = asChild ? Slot : "a";

		return (
			<Comp
				ref={ref}
				className={cn("transition-colors hover:text-foreground", className)}
				{...props}
			/>
		);
	}
);

export default BreadcrumbLink;
