import { cn, Separator, Toggle, TooltipWrapper } from '@narsil-ui/Components';
import { Maximize, Minimize } from 'lucide-react';
import { SectionContext } from './Section';
import { useTranslationsStore } from 'vendor/narsil/localization/resources/js/Stores/translationStore';
import * as React from 'react';

const SectionHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ children, className, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		const sectionContext = React.useContext(SectionContext);

		return (
			<>
				<div
					ref={ref}
					className={cn('flex items-center justify-between', className)}
					{...props}
				>
					{children}

					<TooltipWrapper
						tooltip={trans(sectionContext?.isFullscreen ? 'Exit full screen mode' : 'Enter full screen mode')}
					>
						<Toggle onClick={() => sectionContext?.toggleFullscreen()}>
							{sectionContext?.isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
						</Toggle>
					</TooltipWrapper>
				</div>

				<Separator className='my-4' />
			</>
		);
	}
);

export default SectionHeader;
