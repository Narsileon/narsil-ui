import { cn } from "@narsil-ui/Components";
import { MoreHorizontal } from "lucide-react";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";

export interface PaginationEllipsisProps extends React.HTMLAttributes<HTMLSpanElement> {}

const PaginationEllipsis = React.forwardRef<HTMLSpanElement, PaginationEllipsisProps>(
	({ className, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		return (
			<span
				ref={ref}
				className={cn("flex h-9 w-9 items-center justify-center", className)}
				aria-hidden
				{...props}
			>
				<MoreHorizontal className='h-5 w-5' />
				<span className='sr-only'>{trans("More pages")}</span>
			</span>
		);
	}
);

export default PaginationEllipsis;
