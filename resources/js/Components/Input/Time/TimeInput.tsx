import { cn, Input } from "@narsil-ui/Components";
import { getArrowByType, getDateByType, setDateByType } from "./timeInputUtils";
import React from "react";

const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(
	(
		{
			className,
			date = new Date(new Date().setHours(0, 0, 0, 0)),
			id,
			name,
			picker,
			type = "tel",
			value,
			onChange,
			onKeyDown,
			onLeftFocus,
			onRightFocus,
			setDate,
			...props
		},
		ref
	) => {
		const [flag, setFlag] = React.useState<boolean>(false);

		React.useEffect(() => {
			if (flag) {
				const timer = setTimeout(() => {
					setFlag(false);
				}, 2000);

				return () => clearTimeout(timer);
			}
		}, [flag]);

		const calculatedValue = React.useMemo(() => {
			return getDateByType(date, picker);
		}, [date, picker]);

		const calculateNewValue = (key: string) => {
			return !flag ? "0" + key : calculatedValue.slice(1, 2) + key;
		};

		const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Tab") {
				return;
			}

			e.preventDefault();

			if (e.key === "ArrowRight") {
				onRightFocus?.();
			}
			if (e.key === "ArrowLeft") {
				onLeftFocus?.();
			}

			if (["ArrowUp", "ArrowDown"].includes(e.key)) {
				const step = e.key === "ArrowUp" ? 1 : -1;
				const newValue = getArrowByType(calculatedValue, step, picker);

				if (flag) {
					setFlag(false);
				}

				const tempDate = new Date(date);

				setDate(setDateByType(tempDate, newValue, picker));
			}
			if (e.key >= "0" && e.key <= "9") {
				const newValue = calculateNewValue(e.key);

				if (flag) {
					onRightFocus?.();
				}

				setFlag((prev) => !prev);

				const tempDate = new Date(date);

				setDate(setDateByType(tempDate, newValue, picker));
			}
		};

		return (
			<Input
				ref={ref}
				id={id || picker}
				name={name || picker}
				type={type}
				className={cn("w-12 px-2 text-center font-mono text-base", className)}
				inputMode='decimal'
				value={value || calculatedValue}
				onChange={(e) => {
					e.preventDefault();
					onChange?.(e);
				}}
				onKeyDown={(e) => {
					onKeyDown?.(e);
					handleKeyDown(e);
				}}
				{...props}
			/>
		);
	}
);

export default TimeInput;
