export type Color = "blue" | "gray" | "green" | "orange" | "pink" | "red" | "slate" | "violet" | "yellow";

export type Theme = {
	light: ThemeProperties;
	dark: ThemeProperties;
};

export type ThemeProperties = {
	"accent-foreground": string;
	"card-foreground": string;
	"chart-1": string;
	"chart-2": string;
	"chart-3": string;
	"chart-4": string;
	"chart-5": string;
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
	muted: string;
	popover: string;
	primary: string;
	secondary: string;
};

export const baseDark = {
	"card-foreground": "210 40% 98%", // slate-50
	"chart-1": "12 76% 61%", // ?
	"chart-2": "173 58% 39%", // ?
	"chart-3": "197 37% 24%", // ?
	"chart-4": "43 74% 66%", // ?
	"chart-5": "27 87 % 67 %", // ?
	"constructive-foreground": "210 40% 98%", // slate-50
	"destructive-foreground": "210 40% 98%", // slate-50
	"popover-foreground": "210 40% 98%", // slate-50
	"primary-foreground": "210 40% 98%", // slate-50
	"primary-highlight-foreground": "210 40% 98%", // slate-50
	background: "222.2 84% 4.9%", // slate-950
	card: "222.2 84% 4.9%", // slate-950
	constructive: "142.1 76.2% 36.3%", // green-600
	destructive: "0 72.2% 50.6%", // red-600
	foreground: "210 40% 98%", // slate-50
	popover: "222.2 84% 4.9%", // slate-950
};

export const baseLight = {
	"card-foreground": "222.2 84% 4.9%", // slate-950
	"chart-1": "220 70% 50%", // ?
	"chart-2": "160 60% 45%", // ?
	"chart-3": "30 80% 55%", // ?
	"chart-4": "280 65% 60%", // ?
	"chart-5": "340 75% 55%", // ?
	"constructive-foreground": "210 40% 98%", // slate-50
	"destructive-foreground": "210 40% 98%", // slate-50
	"popover-foreground": "222.2 84% 4.9%", // slate-950
	"primary-foreground": "210 40% 98%", // slate-50
	"primary-highlight-foreground": "210 40% 98%", // slate-50
	background: "210 40% 98%", // slate-50
	card: "210 40% 98%", // slate-50
	constructive: "142.1 76.2% 36.3%", // green-600
	destructive: "0 72.2% 50.6%", // red-600
	foreground: "222.2 84% 4.9%", // slate-950
	popover: "210 40% 98%", // slate-50
};
