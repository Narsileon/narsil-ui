import { ChevronLeft } from "lucide-react";
import { router } from "@inertiajs/react";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";
import TooltipWrapper from "../Tooltip/TooltipWrapper";

interface BackButtonProps extends ButtonProps {
	asIcon?: boolean;
	isDirty?: boolean;
	href: string;
}

const BackButton = React.forwardRef<HTMLButtonElement, BackButtonProps>(
	({ asIcon = false, href, isDirty = false, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		const message = trans("Do you really want to leave this page? Unsaved data has been detected.");

		const onClick = () => {
			if (isDirty) {
				if (!confirm(message)) {
					return;
				}
			}

			router.visit(href);
		};

		return href ? (
			asIcon ? (
				<TooltipWrapper tooltip={trans("common.back")}>
					<Button
						ref={ref}
						size={"icon"}
						type='button'
						variant='secondary'
						onClick={onClick}
						{...props}
					>
						<ChevronLeft className='h-6 w-6' />
						<span className='sr-only'>{trans("common.back")}</span>
					</Button>
				</TooltipWrapper>
			) : (
				<Button
					ref={ref}
					type='button'
					variant='secondary'
					onClick={onClick}
					{...props}
				>
					{trans("common.back")}
				</Button>
			)
		) : null;
	}
);

export default BackButton;
