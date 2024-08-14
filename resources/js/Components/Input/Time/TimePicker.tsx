import { InputProps } from "@narsil-ui/Components/Input/Input";
import * as React from "react";
import TimeInput from "@narsil-ui/Components/Input/Time/TimeInput";

export interface TimePickerProps extends InputProps {}

const TimePicker = ({ ...props }: TimePickerProps) => {
	const hourRef = React.useRef<HTMLInputElement>(null);
	const minuteRef = React.useRef<HTMLInputElement>(null);
	const secondRef = React.useRef<HTMLInputElement>(null);

	return (
		<div className='flex items-center gap-x-2 font-mono'>
			<TimeInput
				ref={hourRef}
				picker='hours'
				onRightFocus={() => minuteRef.current?.focus()}
				{...props}
			/>
			:
			<TimeInput
				ref={minuteRef}
				picker='minutes'
				onLeftFocus={() => hourRef.current?.focus()}
				onRightFocus={() => secondRef.current?.focus()}
				{...props}
			/>
			:
			<TimeInput
				ref={secondRef}
				picker='seconds'
				onLeftFocus={() => minuteRef.current?.focus()}
				{...props}
			/>
		</div>
	);
};

export default TimePicker;
