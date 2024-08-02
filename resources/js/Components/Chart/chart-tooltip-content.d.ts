interface ChartTooltipContentProps
	extends React.HTMLAttributes<HTMLDivElement>,
		Pick<ChartTooltipProps, "active" | "payload" | "label" | "labelFormatter" | "labelClassName" | "formatter"> {
	hideIndicator?: boolean;
	hideLabel?: boolean;
	indicator?: "line" | "dot" | "dashed";
	labelKey?: string;
	nameKey?: string;
}
