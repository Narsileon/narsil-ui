import { Color } from "./Color/color";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useThemeContext } from "./ThemeProvider";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";
import Card from "@narsil-ui/Components/Card/Card";
import CardContent from "@narsil-ui/Components/Card/CardContent";
import Heading from "@narsil-ui/Components/Heading/Heading";
import Popover from "@narsil-ui/Components/Popover/Popover";
import PopoverContent from "@narsil-ui/Components/Popover/PopoverContent";
import PopoverTrigger from "@narsil-ui/Components/Popover/PopoverTrigger";
import Slider from "@narsil-ui/Components/Slider/Slider";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

export interface ThemeControllerProps extends Partial<ButtonProps> {
	enableColors?: boolean;
	enableMode?: boolean;
	enableRadius?: boolean;
	enableSize?: boolean;
}

const ThemeController = ({
	enableColors = true,
	enableMode = true,
	enableRadius = true,
	enableSize = true,
	...props
}: ThemeControllerProps) => {
	const { trans } = useTranslationsStore();

	const { color, mode, radius, size, setColor, setMode, setRadius, setSize } = useThemeContext();

	const Themes: Record<Color, string> = {
		red: "hsl(0 84.2% 60.2%)",
		orange: "hsl(24.6 95% 53.1%)",
		yellow: "hsl(45.4 93.4% 47.5%)",
		green: "hsl(142.1 70.6% 45.3%)",
		blue: "hsl(217.2 91.2% 59.8%)",
		violet: "hsl(238.7 83.5% 66.7%)",
		gray: "hsl(0 0% 45.1%)",
		slate: "hsl(215.4 16.3% 46.9%)",
		pink: "hsl(330.4 81.2% 60.4%)",
	};

	const themeLabel = trans("Theme");

	return (
		<Popover>
			<TooltipWrapper tooltip={themeLabel}>
				<PopoverTrigger asChild={true}>
					<Button
						aria-label={themeLabel}
						size='icon'
						variant='ghost'
						{...props}
					>
						<SunMoon />
					</Button>
				</PopoverTrigger>
			</TooltipWrapper>
			<PopoverContent
				className='min-w-max'
				collisionPadding={8}
			>
				<Card variant='inline'>
					<CardContent>
						{enableMode ? (
							<>
								<Heading
									level='h2'
									variant='h6'
								>
									{trans("Mode")}
								</Heading>
								<div className='grid w-full grid-cols-3 gap-2'>
									<Button
										className={"flex items-center justify-start gap-2 text-xs"}
										isActive={mode === "light"}
										size='sm'
										variant='outline'
										onClick={() => setMode("light")}
									>
										<Sun className='h-5 w-5' />
										{trans("Light")}
									</Button>
									<Button
										className={"flex items-center justify-start gap-2 text-xs"}
										isActive={mode === "dark"}
										size='sm'
										variant='outline'
										onClick={() => setMode("dark")}
									>
										<Moon className='h-5 w-5' />
										{trans("Dark")}
									</Button>
									<Button
										className={"flex items-center justify-start gap-2 text-xs"}
										isActive={mode === "system"}
										size='sm'
										variant='outline'
										onClick={() => setMode("system")}
									>
										<SunMoon className='h-6 w-6' />
										{trans("System")}
									</Button>
								</div>
							</>
						) : null}

						{enableColors ? (
							<>
								<Heading
									level='h2'
									variant='h6'
								>
									{trans("Color")}
								</Heading>
								<div className='grid w-full grid-cols-3 gap-2'>
									{Object.entries(Themes).map(([theme, backgroundColor], index) => {
										return (
											<Button
												className={"flex items-center justify-start gap-2 text-xs"}
												isActive={theme === color}
												size='sm'
												variant='outline'
												onClick={() => setColor(theme as Color)}
												key={index}
											>
												<span
													className='h-5 w-5 min-w-5 rounded-full'
													style={{
														backgroundColor: backgroundColor,
													}}
												/>
												{trans(`colors.${theme}`)}
											</Button>
										);
									})}
								</div>
							</>
						) : null}

						{enableRadius ? (
							<>
								<Heading
									level='h2'
									variant='h6'
								>
									{trans("Radius")}
								</Heading>
								<Slider
									defaultValue={[radius]}
									min={0}
									max={1}
									step={0.05}
									onValueChange={(value) => setRadius(value[0])}
								/>
							</>
						) : null}

						{enableSize ? (
							<>
								<Heading
									level='h2'
									variant='h6'
								>
									{trans("Size")}
								</Heading>
								<Slider
									defaultValue={[size]}
									min={0.75}
									max={1.25}
									step={0.025}
									onValueChange={(value) => setSize(value[0])}
								/>
							</>
						) : null}
					</CardContent>
				</Card>
			</PopoverContent>
		</Popover>
	);
};

export default ThemeController;
