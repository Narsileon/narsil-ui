import { CalendarIcon } from "lucide-react";
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

const DatetimePicker = ({ className, value, onChange }: DateTimePickerProps) => {
	const { trans } = useTranslationsStore();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					className={cn(inputStyle(), "gap-x-2 text-left font-normal", className)}
				>
					<CalendarIcon className='h-4 w-4' />
					{value ? format(value, "PPP HH:mm:ss") : <span>{trans("Select...")}</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				<Calendar
					mode='single'
					selected={value}
					onSelect={onChange}
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
