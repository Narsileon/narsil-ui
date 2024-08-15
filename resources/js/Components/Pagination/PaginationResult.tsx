import { cn } from "@narsil-ui/Components";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as React from "react";

export interface PaginationResultProps extends React.HTMLAttributes<HTMLDivElement> {
	from: number;
	to: number;
	total: number;
}

const PaginationResult = React.forwardRef<HTMLDivElement, PaginationResultProps>(
	({ className, from, to, total, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		return (
			<div
				ref={ref}
				className={cn("min-w-fit truncate text-sm", className)}
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
			</div>
		);
	}
);

export default PaginationResult;
