import { Check, ChevronsUpDown } from "lucide-react";
import { isString, sortBy, upperFirst } from "lodash";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

import {
	Button,
	cn,
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@narsil-ui/Components";

const Combobox = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, ComboboxProps>(
	({ labelKey = "label", sort = true, ucFirst = true, value, valueKey = "value", options, onChange }, ref) => {
		const { trans } = useTranslationsStore();

		const [open, setOpen] = React.useState(false);

		if (sort) {
			options = sortBy(options, (option) => {
				const label = option[labelKey];

				return isString(label) ? label.toLowerCase : label;
			});
		}

		const getValueOption = (value: string | number) => {
			return options?.find((option) => option[valueKey] === value)?.[labelKey] ?? value;
		};

		return (
			<Popover
				open={open}
				onOpenChange={setOpen}
			>
				<PopoverTrigger asChild={true}>
					<Button
						aria-expanded={open}
						className='w-full justify-between'
						role='combobox'
						variant='outline'
					>
						{value
							? ucFirst
								? upperFirst(getValueOption(value))
								: getValueOption(value)
							: trans("Select...")}
						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className='p-0'
					align='start'
				>
					<Command>
						<CommandInput
							placeholder={trans("Search...")}
							className='h-9'
						/>
						<CommandList>
							<CommandEmpty>{trans("No options.")}</CommandEmpty>
							<CommandGroup>
								{options?.map((option, index) => {
									const optionLabel = isString(option) ? option : option[labelKey];
									const optionValue = isString(option) ? option : option[valueKey];

									return (
										<CommandItem
											value={optionValue}
											onSelect={() => {
												onChange(optionValue);
												setOpen(false);
											}}
											key={index}
										>
											{ucFirst && isString(optionLabel) ? upperFirst(optionLabel) : optionLabel}
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
