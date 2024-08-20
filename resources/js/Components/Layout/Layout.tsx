import "@narsil-ui/../css/app.scss";
import { cn } from "@narsil-ui/Components";
import { Theme } from "@narsil-ui/Components/Themes/Color/color";
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { useToast } from "@narsil-ui/Components/Toast/useToast";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import ThemeProvider from "@narsil-ui/Components/Themes/ThemeProvider";
import Toaster from "@narsil-ui/Components/Toast/Toaster";

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
	className?: string;
	children?: React.ReactNode;
	defaultTheme?: Theme;
}

const Layout = React.forwardRef<HTMLElement, LayoutProps>(
	({ children, className, defaultTheme = null, ...props }, ref) => {
		const { toast } = useToast();

		const translationStore = useTranslationsStore();

		const shared = usePage<GlobalProps>().props.shared;

		const { error, success } = shared.redirect;
		const { locale, translations } = shared.localization;

		useEffect(() => {
			if (translations) {
				translationStore.setTranslations(translations);
			}

			translationStore.setLocale(locale);
		}, [locale, translations]);

		useEffect(() => {
			if (success) {
				toast({
					title: translationStore.trans(success.message, success.options),
					variant: "constructive",
				});
			}
		}, [success]);

		useEffect(() => {
			if (error) {
				toast({
					title: translationStore.trans(error.message, error.options),
					variant: "destructive",
				});
			}
		}, [error]);

		return (
			<ThemeProvider defaultTheme={defaultTheme}>
				<main
					ref={ref}
					className={cn("flex h-screen min-h-fit w-full min-w-full max-w-full flex-col", className)}
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
