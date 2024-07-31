import { cn } from "@narsil-ui/Components";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as React from "react";

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
					? trans("Showing :from to :to of :total results", {
							replacements: {
								from: from,
								to: to,
								total: total,
							},
					  })
					: trans("No results.")}
			</span>
		);
	}
);

export default PaginationResult;
