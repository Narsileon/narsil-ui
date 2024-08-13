import { CalendarIcon } from "lucide-react";
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
	const { locale, trans } = useTranslationsStore();

	const selected = new Date(value as string);

	const onSelect = (date: Date) => {
		const previousDate = new Date(value as string);

		date.setHours(previousDate.getHours(), previousDate.getMinutes(), previousDate.getSeconds());

		const nextValue = date.toISOString();

		const event = {
			target: {
				value: nextValue,
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
					{value ? selected.toLocaleString(locale) : <span>{trans("Select...")}</span>}
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
