import { cn } from "@narsil-ui/Components";
import { getArrowByType, getDateByType, setDateByType } from "./timeUtils";
import Input, { InputProps } from "@narsil-ui/Components/Input/Input";
import React from "react";

export type TimeInputType = "minutes" | "seconds" | "hours";

export interface TimeInputProps extends InputProps {
	picker: TimeInputType;
	onLeftFocus?: () => void;
	onRightFocus?: () => void;
}

const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(
	({ className, id, name, picker, value, onChange, onKeyDown, onLeftFocus, onRightFocus, ...props }, ref) => {
		const date = new Date((value as string) ?? new Date().setHours(0, 0, 0, 0));

		const setDate = (date: Date) => {
			const value = date.toISOString();

			const event = {
				target: {
					value: value,
				},
			} as React.ChangeEvent<HTMLInputElement>;

			onChange?.(event);
		};

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

		const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === "Tab") {
				return;
			}

			event.preventDefault();

			if (event.key === "ArrowRight") {
				onRightFocus?.();
			}
			if (event.key === "ArrowLeft") {
				onLeftFocus?.();
			}

			if (["ArrowUp", "ArrowDown"].includes(event.key)) {
				const step = event.key === "ArrowUp" ? 1 : -1;
				const newValue = getArrowByType(calculatedValue, step, picker);

				if (flag) {
					setFlag(false);
				}

				const tempDate = new Date(date);

				setDate(setDateByType(tempDate, newValue, picker));
			}
			if (event.key >= "0" && event.key <= "9") {
				const newValue = calculateNewValue(event.key);

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
				type={"tel"}
				className={cn("w-12 px-2 text-center font-mono text-base", className)}
				inputMode='decimal'
				value={calculatedValue}
				onChange={(event) => {
					event.preventDefault();
				}}
				onKeyDown={(event) => {
					onKeyDown?.(event);
					handleKeyDown(event);
				}}
				{...props}
			/>
		);
	}
);

export default TimeInput;
