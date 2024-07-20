import { cn } from 'ui/Components';
import * as React from 'react';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => (
		<p
			ref={ref}
			className={cn('text-sm text-muted-foreground', className)}
			{...props}
		/>
	)
);

export default CardDescription;
