import { cn } from "@narsil-ui/Components";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
	({ className, ...props }, ref) => (
		<AvatarPrimitive.Root
			ref={ref}
			className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
			{...props}
		/>
	)
);

export default Avatar;
