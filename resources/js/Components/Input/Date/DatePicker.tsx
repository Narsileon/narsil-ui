import { CalendarIcon } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { InputProps, inputStyle } from "@narsil-ui/Components/Input/Input";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import Button from "@narsil-ui/Components/Button/Button";
import Calendar from "@narsil-ui/Components/Calendar/Calendar";
import Popover from "@narsil-ui/Components/Popover/Popover";
import PopoverContent from "@narsil-ui/Components/Popover/PopoverContent";
import PopoverTrigger from "@narsil-ui/Components/Popover/PopoverTrigger";

export interface DatePickerProps extends InputProps {}

const DatePicker = ({ className, required = false, value, onChange }: DatePickerProps) => {
	const { locale, trans } = useTranslationsStore();

	const selected = value ? new Date(value as string) : new Date();

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
					required={required as true}
				/>
			</PopoverContent>
		</Popover>
	);
};

export default DatePicker;
