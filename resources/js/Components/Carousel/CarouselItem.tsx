import { cn } from 'ui/Components';
import { useCarousel } from './Carousel';
import * as React from 'react';

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { orientation } = useCarousel();

		return (
			<div
				ref={ref}
				className={cn('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', className)}
				aria-roledescription='slide'
				role='group'
				{...props}
			/>
		);
	}
);

export default CarouselItem;
