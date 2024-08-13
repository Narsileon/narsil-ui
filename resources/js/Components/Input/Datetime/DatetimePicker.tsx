import { CalendarIcon, Proportions } from "lucide-react";
import { format } from "date-fns";
import { inputStyle } from "@narsil-ui/Components/Input/Input";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";

import {
	Button,
	Calendar,
	cn,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Separator,
	TimePicker,
} from "@narsil-ui/Components";

const DatetimePicker = ({ className, value, onChange, required }: DateTimePickerProps) => {
	const { trans } = useTranslationsStore();

	const selected = new Date(value as string);

	const onSelect = (date: Date) => {
		const value = date.toISOString().split("T")[0];

		const event = {
			target: {
				value: value,
			},
		} as React.ChangeEvent<HTMLInputElement>;

		onChange?.(event);
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					className={cn(inputStyle(), "justify-start gap-x-2 font-normal", className)}
				>
					<CalendarIcon className='h-4 w-4' />
					{value ? format(selected, "PPP HH:mm:ss") : <span>{trans("Select...")}</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				<Calendar
					autoFocus={true}
					mode='single'
					selected={selected}
					onSelect={onSelect}
					required={required}
				/>
				<Separator />
				<div className='flex items-center justify-center p-4'>
					<TimePicker
						value={value}
						onChange={onChange}
					/>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default DatetimePicker;
