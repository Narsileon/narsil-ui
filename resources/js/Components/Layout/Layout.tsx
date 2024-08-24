import "@narsil-ui/../css/app.scss";
import { cn } from "@narsil-ui/Components";
import { GlobalProps } from "@narsil-ui/Types";
import { isString } from "lodash";
import { usePage } from "@inertiajs/react";
import { useToast } from "@narsil-ui/Components/Toast/useToast";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import ThemeProvider, { ThemeProviderProps } from "@narsil-ui/Components/Themes/ThemeProvider";
import Toaster from "@narsil-ui/Components/Toast/Toaster";

interface LayoutProps extends React.HTMLAttributes<HTMLElement>, Partial<Omit<ThemeProviderProps, "children">> {
	className?: string;
	children?: React.ReactNode;
}

const Layout = React.forwardRef<HTMLElement, LayoutProps>(
	(
		{
			children,
			className,
			defaultColor,
			defaultMode,
			defaultRadius,
			defaultSize,
			defaultTheme = null,
			storageKey,
			...props
		},
		ref
	) => {
		const { toast } = useToast();

		const translationStore = useTranslationsStore();

		const shared = usePage<GlobalProps>().props.shared;

		const { error, success } = shared.redirect;
		const { locale, translations } = shared.localization;

		React.useEffect(() => {
			if (translations) {
				translationStore.setTranslations(translations);
			}

			translationStore.setLocale(locale);
		}, [locale, translations]);

		React.useEffect(() => {
			if (success) {
				toast({
					title: isString(success)
						? translationStore.trans(success)
						: translationStore.trans(success.message, success.options),
					variant: "constructive",
				});
			}
		}, [success]);

		React.useEffect(() => {
			if (error) {
				toast({
					title: isString(error)
						? translationStore.trans(error)
						: translationStore.trans(error.message, error.options),
					variant: "destructive",
				});
			}
		}, [error]);

		return (
			<ThemeProvider
				defaultColor={defaultColor}
				defaultMode={defaultMode}
				defaultRadius={defaultRadius}
				defaultSize={defaultSize}
				defaultTheme={defaultTheme}
				storageKey={storageKey}
			>
				<main
					ref={ref}
					className={cn("flex h-fit min-h-screen w-full min-w-full max-w-full flex-col", className)}
					{...props}
				>
					{children}

					<Toaster />
				</main>
			</ThemeProvider>
		);
	}
);

export default Layout;
