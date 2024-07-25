import { cn, Command, Dialog, DialogContent } from "@narsil-ui/Components";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

const CommandDialog = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>
>(({ children, ...props }, ref) => (
	<Dialog {...props}>
		<DialogContent className='overflow-hidden p-0 shadow-lg'>
			<Command
				ref={ref}
				className={cn(
					"[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
					"[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2",
					"[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12",
					"[&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
				)}
			>
				{children}
			</Command>
		</DialogContent>
	</Dialog>
));

export default CommandDialog;