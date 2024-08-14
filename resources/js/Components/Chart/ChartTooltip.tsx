import * as RechartsPrimitive from "recharts";

export interface ChartTooltipProps extends React.ComponentProps<typeof RechartsPrimitive.Tooltip> {}

const ChartTooltip = RechartsPrimitive.Tooltip;

export default ChartTooltip;
