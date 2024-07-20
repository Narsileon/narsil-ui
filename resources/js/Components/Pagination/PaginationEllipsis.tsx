import { cn } from '@narsil-ui/Components';
import { MoreHorizontal } from 'lucide-react';
import * as React from 'react';

const PaginationEllipsis = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
	({ className, ...props }, ref) => (
		<span
			ref={ref}
			className={cn('flex h-9 w-9 items-center justify-center', className)}
			aria-hidden
			{...props}
		>
			<MoreHorizontal className='h-5 w-5' />
			<span className='sr-only'>More pages</span>
		</span>
	)
);

export default PaginationEllipsis;
