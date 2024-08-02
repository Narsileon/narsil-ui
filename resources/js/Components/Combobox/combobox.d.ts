interface ComboboxProps
	extends Omit<React.ComponentProps<typeof import("@radix-ui/react-popover").Content>, "onChange"> {
	labelKey?: string;
	options?: SelectOption[];
	sort?: boolean;
	ucFirst?: boolean;
	value: string | number;
	valueKey?: string;
	onChange: (value: number | string) => void;
}
