import * as RechartsPrimitive from "recharts";

export interface ChartLegendProps extends React.ComponentProps<typeof RechartsPrimitive.Legend> {}

const ChartLegend = RechartsPrimitive.Legend;

export default ChartLegend;
