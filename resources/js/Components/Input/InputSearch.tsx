import { cn } from "@narsil-ui/Components";
import { isEmpty } from "lodash";
import { Search } from "lucide-react";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as React from "react";
import Input, { InputProps } from "@narsil-ui/Components/Input/Input";

export interface InputSearchProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
		Pick<InputProps, "value" | "onChange"> {}

const InputSearch = React.forwardRef<HTMLDivElement, InputSearchProps>(
	({ className, value, onChange, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		return (
			<div
				ref={ref}
				className={cn("relative max-w-96", { "text-primary": !isEmpty(value) }, className)}
				{...props}
			>
				<Search className='botton-1.5 z-1 absolute left-1.5 top-1.5' />

				<Input
					className='w-full px-9'
					placeholder={trans("Search...")}
					value={value}
					onChange={onChange}
				/>
			</div>
		);
	}
);

export default InputSearch;
