import { cn } from "@narsil-ui/Components";
import { router } from "@inertiajs/react";
import { upperCase } from "lodash";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import Button from "@narsil-ui/Components/Button/Button";
import DropdownMenu from "@narsil-ui/Components/DropdownMenu/DropdownMenu";
import DropdownMenuContent from "@narsil-ui/Components/DropdownMenu/DropdownMenuContent";
import DropdownMenuItem from "@narsil-ui/Components/DropdownMenu/DropdownMenuItem";
import DropdownMenuTrigger from "@narsil-ui/Components/DropdownMenu/DropdownMenuTrigger";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

export interface AppLanguageProps {
	languages: LanguageModel[];
	locale: string;
	variant?: "long" | "short";
}

const AppLanguage = ({ languages, locale, variant = "short" }: AppLanguageProps) => {
	const { trans } = useTranslationsStore();

	const label = (function () {
		let value;

		switch (variant) {
			case "long":
				value = trans(locale);
				break;
			default:
				value = upperCase(locale);
				break;
		}

		return value;
	})();

	return (
		<DropdownMenu>
			<TooltipWrapper tooltip={trans("language")}>
				<DropdownMenuTrigger asChild={true}>
					<Button
						size='icon'
						variant='ghost'
					>
						{label}
					</Button>
				</DropdownMenuTrigger>
			</TooltipWrapper>

			<DropdownMenuContent>
				{languages.map((language, index) => {
					return (
						<DropdownMenuItem
							className={cn({ "font-semibold text-primary": language.locale === locale })}
							onClick={() => {
								router.patch(route("locale"), {
									locale: language.locale,
								});
							}}
							key={index}
						>
							{language.language}
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default AppLanguage;
