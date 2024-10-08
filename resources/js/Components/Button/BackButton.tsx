import { ChevronLeft } from "lucide-react";
import { Link, router } from "@inertiajs/react";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import AlertDialog from "@narsil-ui/Components/AlertDialog/AlertDialog";
import AlertDialogAction from "@narsil-ui/Components/AlertDialog/AlertDialogAction";
import AlertDialogCancel from "@narsil-ui/Components/AlertDialog/AlertDialogCancel";
import AlertDialogContent from "@narsil-ui/Components/AlertDialog/AlertDialogContent";
import AlertDialogDescription from "@narsil-ui/Components/AlertDialog/AlertDialogDescription";
import AlertDialogFooter from "@narsil-ui/Components/AlertDialog/AlertDialogFooter";
import AlertDialogHeader from "@narsil-ui/Components/AlertDialog/AlertDialogHeader";
import AlertDialogTitle from "@narsil-ui/Components/AlertDialog/AlertDialogTitle";
import AlertDialogTrigger from "@narsil-ui/Components/AlertDialog/AlertDialogTrigger";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

interface BackButtonProps extends ButtonProps {
	asIcon?: boolean;
	isDirty?: boolean;
	href: string;
}

const BackButton = React.forwardRef<HTMLButtonElement, BackButtonProps>(
	({ asIcon = false, href, isDirty = false, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		const [open, setOpen] = React.useState(false);

		const backLabel = trans("Back");

		return href ? (
			<AlertDialog
				open={open}
				onOpenChange={(value) => {
					if (href) {
						setOpen(value);
					}
				}}
			>
				{asIcon ? (
					<TooltipWrapper tooltip={backLabel}>
						<AlertDialogTrigger asChild={true}>
							<Button
								ref={ref}
								aria-label={backLabel}
								size={"icon"}
								type='button'
								variant='ghost'
								onClick={(event) => {
									event.preventDefault();

									if (!isDirty) {
										router.visit(href);
									} else {
										setOpen(true);
									}
								}}
								{...props}
							>
								<ChevronLeft className='h-6 w-6' />
							</Button>
						</AlertDialogTrigger>
					</TooltipWrapper>
				) : (
					<AlertDialogTrigger asChild={true}>
						<Button
							ref={ref}
							type='button'
							variant='secondary'
							onClick={() => {
								if (!isDirty) {
									router.visit(href);
								}
							}}
							{...props}
						>
							{backLabel}
						</Button>
					</AlertDialogTrigger>
				)}

				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>{trans("Are you sure?")}</AlertDialogTitle>
					</AlertDialogHeader>
					<AlertDialogDescription>{trans("Any change will be lost.")}</AlertDialogDescription>
					<AlertDialogFooter>
						<AlertDialogCancel>{trans("Cancel")}</AlertDialogCancel>
						<AlertDialogAction asChild={true}>
							<Link
								as='button'
								href={href}
							>
								{trans("Continue")}
							</Link>
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		) : null;
	}
);

export default BackButton;
