import { cn } from "@narsil-ui/Components";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, AvatarImageProps>(
	({ className, ...props }, ref) => (
		<AvatarPrimitive.Image
			ref={ref}
			className={cn("aspect-square h-full w-full", className)}
			{...props}
		/>
	)
);

export default AvatarImage;
