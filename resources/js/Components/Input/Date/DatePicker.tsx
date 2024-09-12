import { CalendarIcon } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { format } from "date-fns";
import { InputProps, inputStyle } from "@narsil-ui/Components/Input/Input";
import { useDatetimeLocale } from "@narsil-ui/Components/Input/Datetime/datetimeUtils";
import { usePage } from "@inertiajs/react";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import Button from "@narsil-ui/Components/Button/Button";
import Calendar from "@narsil-ui/Components/Calendar/Calendar";
import Popover from "@narsil-ui/Components/Popover/Popover";
import PopoverContent from "@narsil-ui/Components/Popover/PopoverContent";
import PopoverTrigger from "@narsil-ui/Components/Popover/PopoverTrigger";
import type { GlobalProps } from "@narsil-ui/Types";

export interface DatePickerProps extends InputProps {}

const DatePicker = ({ className, id, required, value, onChange }: DatePickerProps) => {
	const { trans } = useTranslationsStore();

	const { locale } = usePage<GlobalProps>().props.shared.localization;

	const datetimeLocale = useDatetimeLocale(locale);

	const selected = value ? new Date(value as string) : new Date();

	const onSelect = (date: Date) => {
		const nextValue = format(date, "yyyy-MM-dd");

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
					{value ? format(selected, "P", { locale: datetimeLocale }) : <span>{trans("Select...")}</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				<Calendar
					autoFocus={true}
					id={id}
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
