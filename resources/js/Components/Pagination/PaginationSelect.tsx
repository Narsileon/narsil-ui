import { cn } from "@narsil-ui/Components";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as React from "react";
import Select from "@narsil-ui/Components/Select/Select";
import SelectContent from "@narsil-ui/Components/Select/SelectContent";
import SelectItem from "@narsil-ui/Components/Select/SelectItem";
import SelectTrigger from "@narsil-ui/Components/Select/SelectTrigger";
import SelectValue from "@narsil-ui/Components/Select/SelectValue";

const defaultOptions = [10, 25, 50, 100];

export interface PaginationSelectProps extends React.HTMLAttributes<HTMLDivElement> {
	options?: number[];
	pageSize?: number | string;
	onPageSizeChange?: (value: string) => void;
}

const PaginationSelect = React.forwardRef<HTMLDivElement, PaginationSelectProps>(
	({ children, className, options = defaultOptions, pageSize, onPageSizeChange, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		return (
			<div
				ref={ref}
				className={cn("flex items-center gap-x-2", className)}
				{...props}
			>
				<p className='text-sm font-medium'>{trans("Per page")}</p>
				<Select
					value={`${pageSize}`}
					onValueChange={onPageSizeChange}
				>
					<SelectTrigger className='h-8 w-[70px]'>
						<SelectValue placeholder={pageSize} />
					</SelectTrigger>
					<SelectContent side='top'>
						{children}
						{options.map((pageSize, index) => (
							<SelectItem
								value={`${pageSize}`}
								key={index}
							>
								{pageSize}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		);
	}
);

export default PaginationSelect;
