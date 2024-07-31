import { Button } from "@narsil-ui/Components";
import { Link } from "@inertiajs/react";
import * as React from "react";

const AppCopyright = React.forwardRef<HTMLDivElement, AppCopyrightProps>(({ href = "/", name }, ref) => {
	const year = new Date().getFullYear();

	return (
		<div
			ref={ref}
			className='flex flex-wrap items-center gap-x-1'
		>
			<small className='min-w-fit whitespace-nowrap'>{`© ${year}`}</small>
			<Button
				size='link'
				variant='inline-link'
				asChild={true}
			>
				<Link
					href={href}
					className='hover:underline'
				>
					{name}
				</Link>
			</Button>
		</div>
	);
});

export default AppCopyright;