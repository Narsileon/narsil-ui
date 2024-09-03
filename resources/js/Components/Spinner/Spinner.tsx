import { cn } from "@narsil-ui/Components";
import { Loader2, LucideProps } from "lucide-react";

interface SpinnerProps extends LucideProps {}

const Spinner = ({ className, ...props }: SpinnerProps) => {
	return (
		<Loader2
			className={cn("h-6 w-6 animate-spin", className)}
			{...props}
		/>
	);
};

export default Spinner;
