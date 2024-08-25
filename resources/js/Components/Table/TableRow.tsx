import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(({ className, ...props }, ref) => {
	const [hovered, setHovered] = React.useState(false);

	return (
		<tr
			ref={ref}
			className={cn(
				"group border-b transition-colors",
				"hover:bg-muted/50",
				"data-[state=selected]:bg-muted",
				className
			)}
			data-hovered={hovered}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			{...props}
		/>
	);
});

export default TableRow;
