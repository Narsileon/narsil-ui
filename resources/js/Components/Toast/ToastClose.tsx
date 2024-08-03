import { cn } from "@narsil-ui/Components";
import { X } from "lucide-react";
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";

const ToastClose = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Close>, ToastCloseProps>(
	({ className, ...props }, ref) => (
		<ToastPrimitives.Close
			ref={ref}
			className={cn(
				"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity",
				"hover:text-foreground",
				"focus:opacity-100 focus:outline-none focus:ring-2",
				"group-hover:opacity-100",
				"group-[.constructive]:text-green-300",
				"group-[.constructive]:hover:text-green-50",
				"group-[.constructive]:focus:ring-green-400 group-[.constructive]:focus:ring-offset-green-600",
				"group-[.destructive]:text-red-300",
				"group-[.destructive]:hover:text-red-50",
				"group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
				className
			)}
			toast-close=''
			{...props}
		>
			<X className='h-4 w-4' />
		</ToastPrimitives.Close>
	)
);

export default ToastClose;
