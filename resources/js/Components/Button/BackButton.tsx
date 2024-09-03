import { router } from "@inertiajs/react";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";
import { ChevronLeft } from "lucide-react";

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
			<Button
				ref={ref}
				size={asIcon ? "icon" : "default"}
				type='button'
				variant='secondary'
				onClick={onClick}
				{...props}
			>
				{asIcon ? <ChevronLeft className='h-6 w-6' /> : trans("common.back")}
			</Button>
		) : null;
	}
);

export default BackButton;
