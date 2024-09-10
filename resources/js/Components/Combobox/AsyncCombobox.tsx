import { Check, ChevronDown } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { debounce } from "lodash";
import { getSelectOptionLabel, getSelectOptionValue, sortSelectOption } from "./comboboxUtils";
import { SelectOption } from "@narsil-ui/Types";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import axios from "axios";
import Button from "@narsil-ui/Components/Button/Button";
import Command from "@narsil-ui/Components/Command/Command";
import CommandEmpty from "@narsil-ui/Components/Command/CommandEmpty";
import CommandGroup from "@narsil-ui/Components/Command/CommandGroup";
import CommandInput from "@narsil-ui/Components/Command/CommandInput";
import CommandItem from "@narsil-ui/Components/Command/CommandItem";
import CommandList from "@narsil-ui/Components/Command/CommandList";
import CommandLoading from "@narsil-ui/Components/Command/CommandLoading";
import Popover from "@narsil-ui/Components/Popover/Popover";
import PopoverContent from "@narsil-ui/Components/Popover/PopoverContent";
import PopoverTrigger from "@narsil-ui/Components/Popover/PopoverTrigger";
import Svg from "@narsil-ui/Components/Svg/Svg";

export interface AsyncComboboxProps extends Omit<React.ComponentProps<typeof PopoverPrimitive.Trigger>, "onChange"> {
	fetch: string;
	labelKey?: string;
	preview?: "icon" | "image";
	sort?: boolean;
	ucFirst?: boolean;
	value: string | number;
	valueKey?: string;
	onChange: (value: number | string) => void;
}

const AsyncCombobox = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Trigger>, AsyncComboboxProps>(
	(
		{
			fetch,
			labelKey = "label",
			preview,
			sort = true,
			ucFirst = true,
			value,
			valueKey = "value",
			onChange,
			...props
		},
		ref
	) => {
		const { trans } = useTranslationsStore();

		const [open, setOpen] = React.useState(false);
		const [option, setOption] = React.useState<SelectOption | null>(null);
		const [options, setOptions] = React.useState<SelectOption[]>([]);

		const [loading, setLoading] = React.useState(false);
		const [search, setSearch] = React.useState<string>("");

		const fetchOptions = async (search: string) => {
			try {
				const response = await axios.get(fetch, {
					params: {
						search: search,
					},
				});

				return response.data.data;
			} catch (error) {
				console.error("Error fetching options:", error);

				return [];
			}
		};

		const debouncedFetchOptions = React.useCallback(
			debounce(async (search) => {
				if (search.length > 2) {
					setLoading(true);

					let options = await fetchOptions(search);

					if (sort) {
						options = sortSelectOption(options, labelKey);
					}

					setOptions(options);

					setLoading(false);
				} else {
					setOptions([]);
				}
			}, 300),
			[fetch, labelKey, sort]
		);

		React.useEffect(() => {
			debouncedFetchOptions(search);
		}, [search, debouncedFetchOptions]);

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
						className='w-full justify-between gap-x-2 px-3.5 font-normal'
						role='combobox'
						variant='outline'
					>
						<div className='flex items-center gap-x-2'>
							{option ? (
								<>
									{preview === "icon" ? (
										<Svg src={`/storage/icons/${getSelectOptionLabel(option, labelKey)}`} />
									) : null}

									<span className='grow text-left'>
										{getSelectOptionLabel(option, labelKey, ucFirst)}
									</span>
								</>
							) : (
								trans("Select...")
							)}
						</div>
						<ChevronDown
							className={cn("h-4 w-4 shrink-0 opacity-50 transition duration-200", {
								"rotate-180": open,
							})}
						/>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className='p-0'
					align='start'
				>
					<Command shouldFilter={false}>
						<CommandInput
							className='h-10'
							autoFocus={true}
							placeholder={trans("Search...")}
							value={search}
							onValueChange={setSearch}
						/>
						<CommandList
							className='min-h-10'
							key={options.length}
						>
							{loading ? <CommandLoading>{trans("Search...")}</CommandLoading> : null}
							<CommandGroup>
								{options.map((option) => {
									const optionLabel = getSelectOptionLabel(option, labelKey, ucFirst);
									const optionValue = getSelectOptionValue(option, valueKey);

									return (
										<CommandItem
											className='gap-x-2'
											value={optionValue}
											onSelect={() => {
												onChange(optionValue);
												setOption(option);
												setOpen(false);
											}}
											key={optionValue}
										>
											{preview === "icon" ? <Svg src={`/storage/icons/${optionLabel}`} /> : null}
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
							<CommandEmpty>{!loading ? trans("No options.") : ""}</CommandEmpty>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		);
	}
);

export default AsyncCombobox;
