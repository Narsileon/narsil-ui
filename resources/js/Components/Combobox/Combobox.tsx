import { Check, ChevronDown } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { get, lowerCase } from "lodash";
import { getSelectOptionLabel, getSelectOptionValue, sortSelectOption } from "./comboboxUtils";
import { SelectOption } from "@narsil-ui/Types";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import Button from "@narsil-ui/Components/Button/Button";
import Command from "@narsil-ui/Components/Command/Command";
import CommandEmpty from "@narsil-ui/Components/Command/CommandEmpty";
import CommandGroup from "@narsil-ui/Components/Command/CommandGroup";
import CommandInput from "@narsil-ui/Components/Command/CommandInput";
import CommandItem from "@narsil-ui/Components/Command/CommandItem";
import CommandList from "@narsil-ui/Components/Command/CommandList";
import Popover from "@narsil-ui/Components/Popover/Popover";
import PopoverContent from "@narsil-ui/Components/Popover/PopoverContent";
import PopoverTrigger from "@narsil-ui/Components/Popover/PopoverTrigger";

export interface ComboboxProps extends Omit<React.ComponentProps<typeof PopoverPrimitive.Trigger>, "onChange"> {
	labelKey?: string;
	options?: SelectOption[];
	sort?: boolean;
	ucFirst?: boolean;
	value: string | number;
	valueKey?: string;
	onChange: (value: number | string) => void;
}

const Combobox = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Trigger>, ComboboxProps>(
	(
		{ labelKey = "label", sort = true, ucFirst = true, value, valueKey = "value", options, onChange, ...props },
		ref
	) => {
		const { trans } = useTranslationsStore();

		const [open, setOpen] = React.useState(false);

		if (sort) {
			options = sortSelectOption(options, labelKey);
		}

		const [option, setOption] = React.useState<SelectOption | undefined>(
			options?.find((option) => option[valueKey] === value)
		);

		function filter(value: string, search: string) {
			const option = options?.find((option) => {
				get(option, valueKey) === value || get(option, labelKey) === value;
			});

			if (option) {
				const optionLabel = getSelectOptionLabel(option, labelKey, false);

				if (optionLabel.includes(lowerCase(search))) {
					return 1;
				}
			}

			return 0;
		}

		return (
			<Popover
				open={open}
				onOpenChange={setOpen}
			>
				<PopoverTrigger
					ref={ref}
					asChild={true}
					{...props}
				>
					<Button
						aria-expanded={open}
						className='w-full justify-between'
						role='combobox'
						variant='outline'
					>
						{option ? getSelectOptionLabel(option, labelKey, ucFirst) : trans("Select...")}
						<ChevronDown
							className={cn("h-4 w-4 shrink-0 opacity-50 transition duration-200", {
								open: "rotate-180",
							})}
						/>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className='p-0'
					align='start'
				>
					<Command filter={filter}>
						<CommandInput
							placeholder={trans("Search...")}
							className='h-9'
						/>
						<CommandList>
							<CommandEmpty>{trans("No options.")}</CommandEmpty>
							<CommandGroup>
								{options?.map((option) => {
									const optionLabel = getSelectOptionLabel(option, labelKey, ucFirst);
									const optionValue = getSelectOptionValue(option, valueKey);

									return (
										<CommandItem
											value={optionValue}
											onSelect={() => {
												onChange(optionValue);
												setOption(option);
												setOpen(false);
											}}
											key={optionValue}
										>
											{optionLabel}
											<Check
												className={cn(
													"ml-auto h-4 w-4",
													value === optionValue ? "opacity-100" : "opacity-0"
												)}
											/>
										</CommandItem>
									);
								})}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		);
	}
);

export default Combobox;
