export type Theme = {
	light: ThemeProperties;
	dark: ThemeProperties;
};

export type ThemeProperties = {
	"accent-foreground": string;
	"card-foreground": string;
	"constructive-foreground": string;
	"destructive-foreground": string;
	"muted-foreground": string;
	"popover-foreground": string;
	"primary-foreground": string;
	"primary-highlight-foreground": string;
	"primary-highlight": string;
	"secondary-foreground": string;
	"secondary-highlight-foreground": string;
	"secondary-highlight": string;
	accent: string;
	background: string;
	border: string;
	card: string;
	constructive: string;
	destructive: string;
	foreground: string;
	input: string;
	muted: string;
	popover: string;
	primary: string;
	ring: string;
	secondary: string;
};

export type Color = "blue" | "gray" | "green" | "neutral" | "orange" | "pink" | "red" | "violet" | "yellow";
