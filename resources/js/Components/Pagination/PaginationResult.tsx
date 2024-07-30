import { cn } from "@narsil-ui/Components";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as React from "react";

interface PaginationResultProps extends React.HTMLAttributes<HTMLSpanElement> {
	from: number;
	to: number;
	total: number;
}

const PaginationResult = React.forwardRef<HTMLSpanElement, PaginationResultProps>(
	({ className, from, to, total, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		return (
			<span
				ref={ref}
				className={cn("min-w-fit text-sm truncate", className)}
				{...props}
			>
				{total > 0
					? trans("pagination.results", {
							replacements: {
								from: from,
								to: to,
								total: total,
							},
					  })
					: trans("pagination.empty")}
			</span>
		);
	}
);

export default PaginationResult;
