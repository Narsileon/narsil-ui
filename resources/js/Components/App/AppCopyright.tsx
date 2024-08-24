import { cn } from "@narsil-ui/Components/utils";
import { Link } from "@inertiajs/react";
import * as React from "react";
import Button from "@narsil-ui/Components/Button/Button";

export interface AppCopyrightProps extends React.HTMLAttributes<HTMLDivElement> {
	href?: string;
	name: string;
}

const AppCopyright = React.forwardRef<HTMLDivElement, AppCopyrightProps>(
	({ className, href = "/", name, ...props }, ref) => {
		const year = new Date().getFullYear();

		return (
			<div
				ref={ref}
				className={cn("inline-flex items-center", className)}
				{...props}
			>
				<small className='min-w-fit whitespace-nowrap'>{`© ${year} `}</small>
				<Button
					asChild={true}
					size='default'
					variant='link'
				>
					<Link href={href}>{name}</Link>
				</Button>
			</div>
		);
	}
);

export default AppCopyright;
