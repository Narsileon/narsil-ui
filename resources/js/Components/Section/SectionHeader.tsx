import { CardHeaderProps } from "@narsil-ui/Components/Card/CardHeader";
import { cn } from "@narsil-ui/Components";
import { Maximize, Minimize } from "lucide-react";
import { useSection } from "./Section";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as React from "react";
import Separator from "@narsil-ui/Components/Separator/Separator";
import Toggle from "@narsil-ui/Components/Toggle/Toggle";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

export interface SectionHeaderProps extends CardHeaderProps {}

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

				<TooltipWrapper
					tooltip={trans(context?.isFullscreen ? "Exit full screen mode" : "Enter full screen mode")}
				>
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
