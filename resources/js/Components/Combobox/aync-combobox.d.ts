interface AsyncComboboxProps extends React.ComponentProps<typeof import("@radix-ui/react-popover").Content> {
	fetch: string;
	labelKey?: string;
	preview?: "icon" | "image";
	sort?: boolean;
	ucFirst?: boolean;
	value: string | number;
	valueKey?: string;
	onChange: (value: number | string) => void;
}
