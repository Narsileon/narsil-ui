import { CalendarIcon } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { InputProps, inputStyle } from "@narsil-ui/Components/Input/Input";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import Button from "@narsil-ui/Components/Button/Button";
import Calendar from "@narsil-ui/Components/Calendar/Calendar";
import Popover from "@narsil-ui/Components/Popover/Popover";
import PopoverContent from "@narsil-ui/Components/Popover/PopoverContent";
import PopoverTrigger from "@narsil-ui/Components/Popover/PopoverTrigger";
import Separator from "@narsil-ui/Components/Separator/Separator";
import TimePicker from "@narsil-ui/Components/Input/Time/TimePicker";

export interface DateTimePickerProps extends InputProps {}

const DatetimePicker = ({ className, value, onChange, required }: DateTimePickerProps) => {
	const { locale, trans } = useTranslationsStore();

	const selected = value ? new Date(value as string) : new Date();

	const onSelect = (date: Date) => {
		const previousDate = selected;

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
					required={required as true}
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
