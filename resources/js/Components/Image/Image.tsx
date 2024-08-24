import { forwardRef } from "react";
import * as React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	caption?: string;
}

const Image = forwardRef<HTMLElement, ImageProps>(({ caption, ...props }, ref) => {
	return (
		<figure ref={ref}>
			<img {...props} />
			{caption ? <figcaption>{caption}</figcaption> : null}
		</figure>
	);
});

export default Image;
