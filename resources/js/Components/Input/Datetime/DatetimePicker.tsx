import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
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

const DatetimePicker = ({ value, onChange }: DateTimePickerProps) => {
	const { trans } = useTranslationsStore();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					className={cn("w-[280px] justify-start text-left font-normal", !value && "text-muted-foreground")}
				>
					<CalendarIcon className='mr-2 h-4 w-4' />
					{value ? format(value, "PPP HH:mm:ss") : <span>{trans("Select")}</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				<Calendar
					mode='single'
					selected={value}
					onSelect={onChange}
				/>
				<Separator />
				<TimePicker
					value={value}
					onChange={onChange}
				/>
			</PopoverContent>
		</Popover>
	);
};

export default DatetimePicker;
