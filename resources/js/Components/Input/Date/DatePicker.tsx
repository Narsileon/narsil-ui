import { Button, Calendar, cn, Popover, PopoverContent, PopoverTrigger } from "@narsil-ui/Components";
import { CalendarIcon } from "lucide-react";
import { inputStyle } from "@narsil-ui/Components/Input/Input";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";

const DatePicker = ({ className, required = false, value, onChange }: DatePickerProps) => {
	const { locale, trans } = useTranslationsStore();

	const selected = new Date(value as string);

	const onSelect = (date: Date) => {
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
					{value ? selected.toLocaleDateString(locale) : <span>{trans("Select...")}</span>}
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
			</PopoverContent>
		</Popover>
	);
};

export default DatePicker;
