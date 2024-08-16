import { buttonVariants } from "@narsil-ui/Components/Button/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { DayPicker, DayPickerProps } from "react-day-picker";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as Locales from "date-fns/locale";

const Calendar = ({ className, classNames, showOutsideDays = true, ...props }: DayPickerProps) => {
	const { locale } = useTranslationsStore();

	return (
		<DayPicker
			className={cn("max-w-fit p-4", className)}
			classNames={{
				button_next: cn(
					buttonVariants({ variant: "outline" }),
					"absolute top-0 right-1 z-50 h-9 w-9 bg-transparent p-0 opacity-50 hover:opacity-100"
				),
				button_previous: cn(
					buttonVariants({ variant: "outline" }),
					"absolute top-0 left-1 z-50 h-9 w-9 bg-transparent p-0 opacity-50 hover:opacity-100"
				),
				caption_label: "text-sm font-medium",
				day: cn(
					buttonVariants({ variant: "ghost" }),
					"h-9 w-9 text-center text-sm p-0 relative",
					"[&:has([aria-selected].range-end)]:rounded-r-md [&:has([aria-selected].outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent",
					"first:[&:has([aria-selected])]:rounded-l-md",
					"last:[&:has([aria-selected])]:rounded-r-md",
					"focus-within:relative focus-within:z-20"
				),
				day_button: cn(
					buttonVariants({ variant: "ghost" }),
					"h-9 w-9 p-0 font-normal aria-selected:opacity-100"
				),
				disabled: "text-muted-foreground opacity-50",
				hidden: "invisible",
				month_caption: "flex justify-center pt-1 h-9 relative items-center",
				month_grid: "w-full border-collapse gap-y-1",
				month: "gap-y-4",
				months: "relative",
				nav: "gap-x-1 flex items-center",
				outside: cn(
					"outside text-muted-foreground opacity-50",
					"aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
				),
				range_end: "range-end",
				range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
				selected:
					"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
				today: "bg-accent text-accent-foreground",
				week: "flex w-full mt-2",
				weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
				weekdays: "flex",
				...classNames,
			}}
			components={{
				Chevron: (props) =>
					props.orientation === "left" ? (
						<ChevronLeft className='h-4 w-4' />
					) : (
						<ChevronRight className='h-4 w-4' />
					),
			}}
			locale={Locales[locale as keyof typeof Locales]}
			showOutsideDays={showOutsideDays}
			{...props}
		/>
	);
};

export default Calendar;
