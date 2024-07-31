import { Button } from "@narsil-ui/Components";
import { router } from "@inertiajs/react";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as React from "react";

const BackButton = React.forwardRef<HTMLButtonElement, BackButtonProps>(({ href, isDirty = false, ...props }, ref) => {
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
			type='button'
			variant='secondary'
			onClick={onClick}
			{...props}
		>
			{trans("common.back")}
		</Button>
	) : null;
});

export default BackButton;
