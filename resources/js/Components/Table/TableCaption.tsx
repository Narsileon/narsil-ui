import { cn } from '@narsil-ui/Components';
import * as React from 'react';

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
	({ className, ...props }, ref) => (
		<caption
			ref={ref}
			className={cn('mt-4 text-sm text-muted-foreground', className)}
			{...props}
		/>
	)
);

export default TableCaption;
