import { cn } from "@narsil-ui/Components";
import { cva } from "class-variance-authority";
import * as React from "react";
import DatePicker from "@narsil-ui/Components/Input/Date/DatePicker";
import DatetimePicker from "@narsil-ui/Components/Input/Datetime/DatetimePicker";
import TimePicker from "@narsil-ui/Components/Input/Time/TimePicker";

export const inputStyle = cva(
	cn(
		"flex h-10 w-full rounded-md border border-border bg-background px-3.5 py-2 text-sm ring-offset-background",
		"placeholder:text-muted-foreground",
		"file:border-0 file:bg-transparent file:text-sm file:font-medium",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
		"disabled:opacity-50s disabled:cursor-not-allowed"
	)
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type = "text", ...props }, ref) => {
	switch (type) {
		case "date":
			return (
				<DatePicker
					className={cn(inputStyle(), className)}
					{...props}
				/>
			);
		case "datetime-local":
			return (
				<DatetimePicker
					className={cn(inputStyle(), className)}
					{...props}
				/>
			);
		case "time":
			return (
				<TimePicker
					className={cn(inputStyle(), className)}
					{...props}
				/>
			);
		default:
			return (
				<input
					ref={ref}
					type={type}
					className={cn(inputStyle(), className)}
					{...props}
				/>
			);
	}
});

export default Input;
