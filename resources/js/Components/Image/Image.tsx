import { DialogContent } from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import * as React from "react";
import Dialog from "@narsil-ui/Components/Dialog/Dialog";
import DialogClose from "@narsil-ui/Components/Dialog/DialogClose";
import DialogTrigger from "@narsil-ui/Components/Dialog/DialogTrigger";

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
	className?: string;
	disabled?: boolean;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(({ disabled = true, ...props }, ref) => {
	return (
		<Dialog>
			<DialogTrigger
				disabled={disabled}
				asChild={true}
			>
				<img
					ref={ref}
					{...props}
				/>
			</DialogTrigger>
			<DialogContent>
				<img
					ref={ref}
					{...props}
				/>
				<DialogClose />
			</DialogContent>
		</Dialog>
	);
});

export default Image;
