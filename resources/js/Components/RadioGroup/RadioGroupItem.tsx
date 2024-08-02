import { Circle } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
	({ className, ...props }, ref) => (
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cn(
				"aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background",
				"focus:outline-none focus-visible:border-primary",
				"disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
				<Circle className='h-2.5 w-2.5 fill-current text-current' />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	)
);

export default RadioGroupItem;
