import { Moon, Sun, SunMoon } from "lucide-react";
import { upperFirst } from "lodash";
import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";

import {
	Button,
	Card,
	CardContent,
	Heading,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Slider,
	TooltipWrapper,
	useTheme,
} from "@narsil-ui/Components";

const ThemeController = () => {
	const { trans } = useTranslationsStore();

	const { color, mode, radius, size, setColor, setMode, setRadius, setSize } = useTheme();

	const themes: Record<Color, string> = {
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
						<Heading
							level='h2'
							variant='h6'
						>
							{trans("Mode")}
						</Heading>
						<div className='grid grid-cols-3 w-full gap-2'>
							<Button
								className={"flex items-center justify-start gap-2 text-xs"}
								isActive={mode === "light"}
								size='sm'
								variant='outline'
								onClick={() => setMode("light")}
							>
								<Sun className='w-5 h-5' />
								{trans("Light")}
							</Button>
							<Button
								className={"flex items-center justify-start gap-2 text-xs"}
								isActive={mode === "dark"}
								size='sm'
								variant='outline'
								onClick={() => setMode("dark")}
							>
								<Moon className='w-5 h-5' />
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

						<Heading
							level='h2'
							variant='h6'
						>
							{trans("Color")}
						</Heading>
						<div className='grid grid-cols-3 w-full gap-2'>
							{Object.entries(themes).map(([theme, backgroundColor], index) => {
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
											className='min-w-5 w-5 h-5 rounded-full'
											style={{
												backgroundColor: backgroundColor,
											}}
										/>
										{trans(upperFirst(theme))}
									</Button>
								);
							})}
						</div>

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
					</CardContent>
				</Card>
			</PopoverContent>
		</Popover>
	);
};

export default ThemeController;
