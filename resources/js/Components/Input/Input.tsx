import { cn } from "@narsil-ui/Components";
import { cva } from "class-variance-authority";
import * as React from "react";

export const inputStyle = cva(
	cn(
		"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors",
		"file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
		"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
		"disabled:cursor-not-allowed disabled:opacity-50"
	)
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
	<input
		ref={ref}
		type={type}
		className={cn(inputStyle(), className)}
		{...props}
	/>
));

export default Input;
