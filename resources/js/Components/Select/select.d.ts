type SelectOption = {
	label?: string;
	value?: string | number;
	options?: SelectOption[];
	[key: string]: any;
};

interface SelectProps extends React.ComponentProps<typeof import("@radix-ui/react-select").Root> {}
