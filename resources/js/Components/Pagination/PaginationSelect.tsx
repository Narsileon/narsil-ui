import { cn, Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@narsil-ui/Components";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as React from "react";

interface PaginationSelectProps extends React.HTMLAttributes<HTMLDivElement> {
	options?: number[];
	value?: number | string;
	onValueChange?: (value: string) => void;
}

const defaultOptions = [10, 25, 50, 100];

const PaginationSelect = React.forwardRef<HTMLDivElement, PaginationSelectProps>(
	({ children, className, options = defaultOptions, value, onValueChange, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		return (
			<div
				ref={ref}
				className={cn("flex items-center gap-x-2", className)}
				{...props}
			>
				<p className='text-sm font-medium'>{trans("Per page")}</p>
				<Select
					value={`${value}`}
					onValueChange={onValueChange}
				>
					<SelectTrigger className='h-8 w-[70px]'>
						<SelectValue placeholder={value} />
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
