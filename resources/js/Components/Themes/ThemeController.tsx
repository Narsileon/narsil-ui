import { Color } from "./Color/color";
import { Moon, Sun, SunMoon } from "lucide-react";
import { upperFirst } from "lodash";
import { useTheme } from "./ThemeProvider";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import Button from "@narsil-ui/Components/Button/Button";
import Card from "@narsil-ui/Components/Card/Card";
import CardContent from "@narsil-ui/Components/Card/CardContent";
import Heading from "@narsil-ui/Components/Heading/Heading";
import Popover from "@narsil-ui/Components/Popover/Popover";
import PopoverContent from "@narsil-ui/Components/Popover/PopoverContent";
import PopoverTrigger from "@narsil-ui/Components/Popover/PopoverTrigger";
import Slider from "@narsil-ui/Components/Slider/Slider";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

export interface ThemeControllerProps {
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
}: ThemeControllerProps) => {
	const { trans } = useTranslationsStore();

	const { color, mode, radius, size, setColor, setMode, setRadius, setSize } = useTheme();

	const Themes: Record<Color, string> = {
		gray: "hsl(220 9% 46%)",
		red: "hsl(0 72% 51%)",
		orange: "hsl(25 95% 53%)",
		yellow: "hsl(48 96% 53%)",
		green: "hsl(142 76% 36%)",
		blue: "hsl(221 83% 53%)",
		pink: "hsl(333 71% 51%)",
		violet: "hsl(262 83% 58%)",
		neutral: "hsl(0 0% 45%)",
	};

	return (
		<Popover>
			<TooltipWrapper tooltip={trans("Theme")}>
				<PopoverTrigger asChild={true}>
					<Button
						variant='ghost'
						size='icon'
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
										<SunMoon />
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
									{Object.entries(Themes).map(([Theme, backgroundColor], index) => {
										return (
											<Button
												className={"flex items-center justify-start gap-2 text-xs"}
												isActive={Theme === color}
												size='sm'
												variant='outline'
												onClick={() => setColor(Theme as Color)}
												key={index}
											>
												<span
													className='h-5 w-5 min-w-5 rounded-full'
													style={{
														backgroundColor: backgroundColor,
													}}
												/>
												{trans(upperFirst(Theme))}
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
