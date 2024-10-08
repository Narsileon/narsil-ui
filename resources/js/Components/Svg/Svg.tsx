import { cn } from "@narsil-ui/Components/utils";
import { ReactSVG } from "react-svg";

export interface SvgProps {
	className?: string;
	src: string;
}

const Svg = ({ className, src, ...props }: SvgProps) => {
	const beforeInjection = (svg: any) => {
		const classNames: string[] = cn("w-5 h-5", className).split(" ");

		classNames.map((className) => {
			svg.classList.add(className);
		});
	};

	return (
		<ReactSVG
			beforeInjection={beforeInjection}
			src={src}
			{...props}
		/>
	);
};

export default Svg;
