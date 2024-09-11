import { baseDark, baseLight, Theme } from "./color";

const violet: Theme = {
	light: {
		...baseLight,
		"accent-foreground": "221 39% 11%",
		"card-foreground": "224 71% 4%",
		"constructive-foreground": "210 20% 98%",
		"destructive-foreground": "210 20% 98%",
		"muted-foreground": "220 9% 46%",
		"popover-foreground": "224 71% 4%",
		"primary-foreground": "210 20% 98%",
		"primary-highlight-foreground": "210 20% 98%",
		"primary-highlight": "262.1 83.3% 57.8%", // violet-600
		"secondary-foreground": "221 39% 11%",
		"secondary-highlight-foreground": "221 39% 11%",
		"secondary-highlight": "220 14% 96%",
		accent: "220 14% 96%",
		border: "220 13% 91%",
		constructive: "142 71% 45%",
		destructive: "0 84% 60%",
		foreground: "224 71% 4%",
		muted: "220 14% 96%",
		primary: "263.5 67.4% 34.9%", // violet-900
		secondary: "220 14% 96%",
	},
	dark: {
		...baseDark,
		"accent-foreground": "210 20% 98%",
		"card-foreground": "210 20% 98%",
		"constructive-foreground": "210 20% 98%",
		"destructive-foreground": "210 20% 98%",
		"muted-foreground": "218 11% 65%",
		"popover-foreground": "210 20% 98%",
		"primary-foreground": "210 20% 98%",
		"primary-highlight-foreground": "210 20% 98%",
		"primary-highlight": "262.1 83.3% 57.8%", // violet-600
		"secondary-foreground": "210 20% 98%",
		"secondary-highlight-foreground": "210 20% 98%",
		"secondary-highlight": "215 28% 17%",
		accent: "215 28% 17%",
		background: "224 71% 4%",
		border: "215 28% 17%",
		card: "224 71% 4%",
		constructive: "144, 61%, 20%",
		destructive: "0 63% 31%",
		foreground: "210 20% 98%",
		muted: "215 28% 17%",
		popover: "224 71% 4%",
		primary: "263.5 67.4% 34.9%", // violet-900
		secondary: "215 28% 17%",
	},
};

export default violet;
