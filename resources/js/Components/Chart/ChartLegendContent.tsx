import { ChartLegendProps } from "./ChartLegend";
import { cn } from "@narsil-ui/Components";
import { getPayloadConfigFromPayload } from "./chart";
import { useChartContext } from "./ChartContainer";
import * as React from "react";

export interface ChartLegendContentProps
	extends React.HTMLAttributes<HTMLDivElement>,
		Pick<ChartLegendProps, "payload" | "verticalAlign"> {
	hideIcon?: boolean;
	nameKey?: string;
}

const ChartLegendContent = React.forwardRef<HTMLDivElement, ChartLegendContentProps>(
	({ className, hideIcon = false, nameKey, payload, verticalAlign = "bottom" }, ref) => {
		const { config } = useChartContext();

		if (!payload?.length) {
			return null;
		}

		return (
			<div
				ref={ref}
				className={cn(
					"flex items-center justify-center gap-4",
					verticalAlign === "top" ? "pb-3" : "pt-3",
					className
				)}
			>
				{payload.map((item) => {
					const key = `${nameKey || item.dataKey || "value"}`;
					const itemConfig = getPayloadConfigFromPayload(config, item, key);

					return (
						<div
							key={item.value}
							className={cn(
								"flex items-center gap-1.5",
								"[&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
							)}
						>
							{itemConfig?.icon && !hideIcon ? (
								<itemConfig.icon />
							) : (
								<div
									className='h-2 w-2 shrink-0 rounded-[2px]'
									style={{
										backgroundColor: item.color,
									}}
								/>
							)}
							{itemConfig?.label}
						</div>
					);
				})}
			</div>
		);
	}
);

export default ChartLegendContent;
