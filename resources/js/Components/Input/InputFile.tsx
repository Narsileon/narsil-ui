import { cn } from "@narsil-ui/Components";
import { Database } from "lucide-react";
import { inputStyle } from "./Input";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import Button from "@narsil-ui/Components/Button/Button";

export interface InputFileProps extends Omit<React.InputHTMLAttributes<HTMLDivElement>, "onChange"> {
	onChange?: (value: File) => void;
}

const InputFile = React.forwardRef<HTMLDivElement, InputFileProps>(
	({ className, disabled, value, onChange, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		const inputRef = React.useRef<HTMLInputElement | null>(null);

		const [filePreview, setFilePreview] = React.useState<string | null>(null);

		const isFile = () => {
			return value instanceof File;
		};

		const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			if (event.target.files && event.target.files.length > 0) {
				onChange?.(event.target.files[0]);
			}
		};

		React.useEffect(() => {
			if (value instanceof File) {
				const objectUrl = URL.createObjectURL(value);

				setFilePreview(objectUrl);

				return () => URL.revokeObjectURL(objectUrl);
			} else if (inputRef.current) {
				setFilePreview(null);

				inputRef.current.value = "";
			}
		}, [value]);

		return (
			<>
				<div
					ref={ref}
					className='flex items-center'
				>
					<div className='flex items-center'>
						<Button variant='secondary'>
							<Database className='h-5 w-5' />
						</Button>
						<Button
							className='rounded-r-none'
							variant='secondary'
							onClick={() => inputRef.current?.click()}
						>
							{trans("Choose file")}
						</Button>
					</div>
					<input
						className={cn(inputStyle())}
						disabled={true}
						value={value?.name}
					/>

					<div className='ml-2'>
						{value ? (
							<img
								src={isFile() ? (filePreview ?? "") : value}
								height={56}
								width={56}
								previewable={true}
							/>
						) : null}
					</div>
				</div>
				<input
					ref={inputRef}
					className='hidden'
					type='file'
					onChange={onFileChange}
					disabled={disabled}
					{...props}
				/>
			</>
		);
	}
);

export default InputFile;
