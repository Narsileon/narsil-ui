import { cn } from '@narsil-ui/Components';
import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
	<textarea
		ref={ref}
		className={cn(
			'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
			'placeholder:text-muted-foreground',
			'focus-visible:outline-none focus-visible:border-primary',
			'disabled:cursor-not-allowed disabled:opacity-50',
			className
		)}
		{...props}
	/>
));

export default Textarea;
