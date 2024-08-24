import { forwardRef } from "react";
import * as React from "react";
import Dialog from "@narsil-ui/Components/Dialog/Dialog";
import DialogContent from "@narsil-ui/Components/Dialog/DialogContent";
import DialogHeader from "@narsil-ui/Components/Dialog/DialogHeader";
import DialogTitle from "@narsil-ui/Components/Dialog/DialogTitle";
import DialogTrigger from "@narsil-ui/Components/Dialog/DialogTrigger";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	disabled?: boolean;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(({ disabled = true, src, ...props }, ref) => {
	return (
		<Dialog>
			<DialogTrigger>
				<img
					ref={ref}
					src={src}
					{...props}
				/>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{src}</DialogTitle>
				</DialogHeader>
				<img
					src={src}
					{...props}
				/>
			</DialogContent>
		</Dialog>
	);
});

export default Image;
