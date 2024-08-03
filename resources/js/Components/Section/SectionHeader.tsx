import { cn, Separator, Toggle, TooltipWrapper, useSection } from "@narsil-ui/Components";
import { Maximize, Minimize } from "lucide-react";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as React from "react";

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(({ children, className, ...props }, ref) => {
	const { trans } = useTranslationsStore();

	const context = useSection();

	return (
		<>
			<div
				ref={ref}
				className={cn("flex items-center justify-between", className)}
				{...props}
			>
				{children}

				<TooltipWrapper tooltip={trans(context?.isFullscreen ? "Exit full screen mode" : "Enter full screen mode")}>
					<Toggle onClick={() => context?.toggleFullscreen()}>
						{context?.isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
					</Toggle>
				</TooltipWrapper>
			</div>

			<Separator className='my-4' />
		</>
	);
});

export default SectionHeader;
