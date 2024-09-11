import { baseDark, baseLight, Theme } from "./color";

const neutral: Theme = {
	light: {
		...baseLight,
		"accent-foreground": "0 0% 9%",
		"card-foreground": "0 0% 4%",
		"constructive-foreground": "0 0% 98%",
		"destructive-foreground": "0 0% 98%",
		"muted-foreground": "0 0% 45%",
		"popover-foreground": "0 0% 4%",
		"primary-foreground": "0 0% 98%",
		"primary-highlight-foreground": "0 0% 98%",
		"primary-highlight": "0 0% 9%",
		"secondary-foreground": "0 0% 9%",
		"secondary-highlight-foreground": "0 0% 9%",
		"secondary-highlight": "0 0% 96%",
		accent: "0 0% 96%",
		border: "0 0% 90%",
		constructive: "142 71% 45%",
		destructive: "0 84% 60%",
		foreground: "0 0% 4%",
		muted: "0 0% 96%",
		primary: "0 0% 9%",
		secondary: "0 0% 96%",
	},
	dark: {
		...baseDark,
		"accent-foreground": "0 0% 98%",
		"card-foreground": "0 0% 98%",
		"constructive-foreground": "0 0% 98%",
		"destructive-foreground": "0 0% 98%",
		"muted-foreground": "0 0% 64%",
		"popover-foreground": "0 0% 98%",
		"primary-foreground": "0 0% 9%",
		"primary-highlight-foreground": "0 0% 9%",
		"primary-highlight": "0 0% 98%",
		"secondary-foreground": "0 0% 98%",
		"secondary-highlight-foreground": "0 0% 98%",
		"secondary-highlight": "0 0% 15%",
		accent: "0 0% 15%",
		background: "0 0% 4%",
		border: "0 0% 15%",
		card: "0 0% 4%",
		constructive: "144, 61%, 20%",
		destructive: "0 63% 31%",
		foreground: "0 0% 98%",
		muted: "0 0% 15%",
		popover: "0 0% 4%",
		primary: "0 0% 98%",
		secondary: "0 0% 15%",
	},
};

export default neutral;
