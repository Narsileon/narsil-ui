import { TimeInput } from "@narsil-ui/Components";
import * as React from "react";

const TimePicker = ({ value, onChange }: TimePickerProps) => {
	const hourRef = React.useRef<HTMLInputElement>(null);
	const minuteRef = React.useRef<HTMLInputElement>(null);
	const secondRef = React.useRef<HTMLInputElement>(null);

	return (
		<div className='flex items-center gap-x-2 font-mono'>
			<TimeInput
				ref={hourRef}
				picker='hours'
				date={value}
				onRightFocus={() => minuteRef.current?.focus()}
				setDate={onChange}
			/>
			:
			<TimeInput
				ref={minuteRef}
				picker='minutes'
				date={value}
				onLeftFocus={() => hourRef.current?.focus()}
				onRightFocus={() => secondRef.current?.focus()}
				setDate={onChange}
			/>
			:
			<TimeInput
				ref={secondRef}
				picker='seconds'
				date={value}
				onLeftFocus={() => minuteRef.current?.focus()}
				setDate={onChange}
			/>
		</div>
	);
};

export default TimePicker;
