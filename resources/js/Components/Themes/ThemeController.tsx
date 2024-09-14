import { Color } from "./Color/color";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useThemeContext } from "./ThemeProvider";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import blue from "./Color/blue";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";
import Card from "@narsil-ui/Components/Card/Card";
import CardContent from "@narsil-ui/Components/Card/CardContent";
import gray from "./Color/gray";
import green from "./Color/green";
import Heading from "@narsil-ui/Components/Heading/Heading";
import orange from "./Color/orange";
import pink from "./Color/pink";
import Popover from "@narsil-ui/Components/Popover/Popover";
import PopoverContent from "@narsil-ui/Components/Popover/PopoverContent";
import PopoverTrigger from "@narsil-ui/Components/Popover/PopoverTrigger";
import red from "./Color/red";
import slate from "./Color/slate";
import Slider from "@narsil-ui/Components/Slider/Slider";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";
import violet from "./Color/violet";
import yellow from "./Color/yellow";

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

	const { color, dark, mode, radius, size, setColor, setMode, setRadius, setSize } = useThemeContext();

	const currentTheme = dark ? "dark" : "light";

	const Themes: Record<Color, string> = {
		red: `hsl(${red[currentTheme]["primary"]})`,
		orange: `hsl(${orange[currentTheme]["primary"]})`,
		yellow: `hsl(${yellow[currentTheme]["primary"]})`,
		green: `hsl(${green[currentTheme]["primary"]})`,
		blue: `hsl(${blue[currentTheme]["primary"]})`,
		violet: `hsl(${violet[currentTheme]["primary"]})`,
		gray: `hsl(${gray[currentTheme]["primary"]})`,
		slate: `hsl(${slate[currentTheme]["primary"]})`,
		pink: `hsl(${pink[currentTheme]["primary"]})`,
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
