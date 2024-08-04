import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const SliderRange = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderRangeProps>(
	({ className, ...props }, ref) => {
		const values = props.value ?? [props.min, props.max];

		return (
			<SliderPrimitive.Root
				ref={ref}
				className={cn("relative flex h-10 w-full touch-none select-none items-center", className)}
				{...props}
			>
				<SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-secondary'>
					<SliderPrimitive.Range className='absolute h-full bg-primary' />
				</SliderPrimitive.Track>
				{values.map((value, index) => (
					<SliderPrimitive.Thumb
						className={cn(
							"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors",
							"focus-visible:border-primary focus-visible:outline-none",
							"disabled:pointer-events-none disabled:opacity-50"
						)}
						key={index}
					/>
				))}
			</SliderPrimitive.Root>
		);
	}
);

export default SliderRange;
