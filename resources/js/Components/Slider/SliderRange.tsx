import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

export interface SliderRangeProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

const SliderRange = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderRangeProps>(
	({ className, ...props }, ref) => {
		const values = props.value ?? [props.min, props.max];

		return (
			<div className='h-20'>
				<div className='flex items-center justify-between gap-x-4 text-muted-foreground'>
					<span className='pl-0.5'>{props.min}</span>
					<span className='pr-0.5'>{props.max}</span>
				</div>
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
							<span className={cn("absolute top-7 text-center", index === 0 ? "left-0" : "right-0")}>
								{value}
							</span>
						</SliderPrimitive.Thumb>
					))}
				</SliderPrimitive.Root>
			</div>
		);
	}
);

export default SliderRange;
