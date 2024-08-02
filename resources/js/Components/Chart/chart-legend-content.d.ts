interface ChartLegendContentProps
	extends React.HTMLAttributes<HTMLDivElement>,
		Pick<ChartLegendProps, "payload" | "verticalAlign"> {
	hideIcon?: boolean;
	nameKey?: string;
}
