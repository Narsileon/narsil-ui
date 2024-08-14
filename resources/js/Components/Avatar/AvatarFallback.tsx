import { cn } from "@narsil-ui/Components";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

export interface AvatarFallbackProps extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {}

const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, AvatarFallbackProps>(
	({ className, ...props }, ref) => (
		<AvatarPrimitive.Fallback
			ref={ref}
			className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
			{...props}
		/>
	)
);

export default AvatarFallback;
