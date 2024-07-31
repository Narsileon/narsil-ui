interface PaginationSelectProps extends React.HTMLAttributes<HTMLDivElement> {
	options?: number[];
	value?: number | string;
	onValueChange?: (value: string) => void;
}
