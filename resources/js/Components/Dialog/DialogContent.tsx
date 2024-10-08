import { cn } from "@narsil-ui/Components";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import { X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import DialogOverlay from "./DialogOverlay";
import DialogPortal from "./DialogPortal";
import ScrollArea from "@narsil-ui/Components/ScrollArea/ScrollArea";
import ScrollAreaCorner from "@narsil-ui/Components/ScrollArea/ScrollAreaCorner";
import ScrollAreaScrollbar from "@narsil-ui/Components/ScrollArea/ScrollAreaScrollbar";
import ScrollAreaThumb from "@narsil-ui/Components/ScrollArea/ScrollAreaThumb";
import ScrollAreaViewport from "@narsil-ui/Components/ScrollArea/ScrollAreaViewport";

export interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {}

const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
	({ className, children, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		return (
			<DialogPortal>
				<DialogOverlay />
				<DialogPrimitive.Content
					ref={ref}
					className={cn(
						"grid max-h-screen w-full max-w-lg gap-4 border bg-background shadow-lg sm:rounded-lg",
						"fixed left-[50%] top-[50%] z-50",
						"translate-x-[-50%] translate-y-[-50%] duration-200",
						"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
						"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
						"data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
						"data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
						className
					)}
					onOpenAutoFocus={(event) => {
						event.preventDefault();
					}}
					onCloseAutoFocus={(event) => {
						event.preventDefault();
					}}
					{...props}
				>
					<ScrollArea className='max-h-screen p-4'>
						<ScrollAreaViewport
							className='space-y-4'
							asChild={true}
						>
							{children}
						</ScrollAreaViewport>
						<ScrollAreaScrollbar orientation='vertical'>
							<ScrollAreaThumb />
						</ScrollAreaScrollbar>
						<ScrollAreaCorner />
					</ScrollArea>
					<DialogPrimitive.Close
						className={cn(
							"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity",
							"hover:opacity-100",
							"focus:border-primary focus:outline-none",
							"disabled:pointer-events-none",
							"data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
						)}
						aria-label={trans("Close")}
					>
						<X className='h-4 w-4' />
					</DialogPrimitive.Close>
				</DialogPrimitive.Content>
			</DialogPortal>
		);
	}
);

export default DialogContent;
