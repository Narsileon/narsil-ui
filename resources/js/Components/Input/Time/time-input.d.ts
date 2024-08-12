interface TimeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	date: Date | undefined;
	picker: TimeInputType;
	onLeftFocus?: () => void;
	onRightFocus?: () => void;
	setDate: (date: Date | undefined) => void;
}
