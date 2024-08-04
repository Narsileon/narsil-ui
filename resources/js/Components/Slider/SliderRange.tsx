import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const SliderRange = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderRangeProps>(
	({ className, ...props }, ref) => {
		const values = props.value ?? [props.min, props.max];

		return (
			<div>
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
								"relative block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors",
								"focus-visible:border-primary focus-visible:outline-none",
								"disabled:pointer-events-none disabled:opacity-50"
							)}
							key={index}
						>
							{value != props.min || value != props.max ? (
								<span className='absolute left-0 right-0 top-7 mx-auto text-center'>{value}</span>
							) : null}
						</SliderPrimitive.Thumb>
					))}
				</SliderPrimitive.Root>
				<div className='flex items-center justify-between gap-x-4'>
					<span>{props.min}</span>
					<span>{props.max}</span>
				</div>
			</div>
		);
	}
);

export default SliderRange;
