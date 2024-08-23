import { cn } from "@narsil-ui/Components/utils";
import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(({ className, children, ...props }, ref) => {
	return (
		<section
			ref={ref}
			className={cn(
				"w-full grow bg-background p-4 text-foreground",
				className,
				"data-[fullscreen-group-on=true]:p-4"
			)}
			{...props}
		>
			{children}
		</section>
	);
});

export default Section;
