import { cn, Separator } from '@narsil-ui/Components';
import * as React from 'react';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<>
			<Separator className='my-4' />

			<div
				ref={ref}
				className={cn('flex flex-row-reverse items-center justify-between', className)}
				{...props}
			/>
		</>
	)
);

export default CardFooter;
