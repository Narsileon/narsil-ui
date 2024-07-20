import { cn, useFullscreenable } from '@narsil-ui/Components/utils';
import * as React from 'react';

type SectionContextValue = {
	isFullscreen: boolean;
	toggleFullscreen: () => void;
};

export const SectionContext = React.createContext<SectionContextValue>({} as SectionContextValue);

const Section = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const defaultRef = React.useRef<HTMLDivElement>(null);

		const sectionRef = ref && typeof ref === 'object' ? ref : defaultRef;

		const { isFullscreen, toggleFullscreen } = useFullscreenable(sectionRef);

		return (
			<SectionContext.Provider
				value={{
					isFullscreen: isFullscreen,
					toggleFullscreen: toggleFullscreen,
				}}
			>
				<div
					ref={sectionRef}
					className={cn('bg-background text-foreground p-4', className)}
					{...props}
				/>
			</SectionContext.Provider>
		);
	}
);

export default Section;
