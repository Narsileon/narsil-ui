import { baseDark, baseLight, Theme } from "./color";

const orange: Theme = {
	light: {
		...baseLight,
		"accent-foreground": "24 10% 10%",
		"card-foreground": "20 14% 4%",
		"constructive-foreground": "60 9% 98%",
		"destructive-foreground": "60 9% 98%",
		"muted-foreground": "25 5% 45%",
		"popover-foreground": "20 14% 4%",
		"primary-foreground": "60 9% 98%",
		"primary-highlight-foreground": "60 9% 98%",
		"primary-highlight": "20.5 90.2% 48.2%", // orange-600
		"secondary-foreground": "24 10% 10%",
		"secondary-highlight-foreground": "24 10% 10%",
		"secondary-highlight": "60 5% 96%",
		accent: "60 5% 96%",
		border: "20 6% 90%",
		constructive: "142 71% 45%",
		destructive: "0 84% 60%",
		foreground: "20 14% 4%",
		muted: "60 5% 96%",
		primary: "15 79.1% 33.7%", // orange-800
		secondary: "60 5% 96%",
	},
	dark: {
		...baseDark,
		"accent-foreground": "60 9% 98%",
		"card-foreground": "60 9% 98%",
		"constructive-foreground": "60 9% 98%",
		"destructive-foreground": "60 9% 98%",
		"muted-foreground": "24 5% 64%",
		"popover-foreground": "60 9% 98%",
		"primary-foreground": "60 9% 98%",
		"primary-highlight-foreground": "60 9% 98%",
		"primary-highlight": "20.5 90.2% 48.2%", // orange-600
		"secondary-foreground": "60 9% 98%",
		"secondary-highlight-foreground": "60 9% 98%",
		"secondary-highlight": "12 7% 15%",
		accent: "12 7% 15%",
		background: "20 14% 4%",
		border: "12 7% 15%",
		card: "20 14% 4%",
		constructive: "142 76% 36%",
		destructive: "0 72% 51%",
		foreground: "60 9% 98%",
		muted: "12 7% 15%",
		popover: "20 14% 4%",
		primary: "15 79.1% 33.7%", // orange-800
		secondary: "12 7% 15%",
	},
};

export default orange;
