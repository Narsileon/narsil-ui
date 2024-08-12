import { cn } from "@narsil-ui/Components";
import { cva } from "class-variance-authority";
import * as React from "react";

export const inputStyle = cva(
	cn(
		"relative group inline-flex flex-1 items-center justify-start w-full h-10 gap-x-4 rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors",
		"hover:bg-accent hover:text-accent-foreground",
		"focus:bg-accent focus:text-accent-foreground focus:outline-none",
		"disabled:pointer-events-none disabled:opacity-50",
		"data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
		"[&>img]:max-w-5 [&>img]:max-h-5"
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
