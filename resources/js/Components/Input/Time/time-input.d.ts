interface TimeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	picker: TimeInputType;
	onLeftFocus?: () => void;
	onRightFocus?: () => void;
}
