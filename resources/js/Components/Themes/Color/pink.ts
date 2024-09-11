import { baseDark, baseLight, Theme } from "./color";

const pink: Theme = {
	light: {
		...baseLight,
		"accent-foreground": "240 6% 10%",
		"card-foreground": "240 10% 4%",
		"constructive-foreground": "0 0% 98%",
		"destructive-foreground": "0 0% 98%",
		"muted-foreground": "240 4% 46%",
		"popover-foreground": "240 10% 4%",
		"primary-foreground": "326 78% 95%",
		"primary-highlight-foreground": "326 78% 95%",
		"primary-highlight": "328.6 85.5% 70.2%", // pink-400
		"secondary-foreground": "240 6% 10%",
		"secondary-highlight-foreground": "240 6% 10%",
		"secondary-highlight": "240 5% 96%",
		accent: "240 5% 96%",
		border: "240 6% 90%",
		constructive: "142 71% 45%",
		destructive: "0 84% 60%",
		foreground: "240 10% 4%",
		muted: "240 5% 96%",
		primary: "333.3 71.4% 50.6%", // pink-600
		secondary: "240 5% 96%",
	},
	dark: {
		...baseDark,
		"accent-foreground": "0 0% 98%",
		"card-foreground": "0 0% 95%",
		"constructive-foreground": "0 86% 97%",
		"destructive-foreground": "0 86% 97%",
		"muted-foreground": "240 5% 65%",
		"popover-foreground": "0 0% 95%",
		"primary-foreground": "326 78% 95%",
		"primary-highlight-foreground": "326 78% 95%",
		"primary-highlight": "328.6 85.5% 70.2%", // pink-400
		"secondary-foreground": "0 0% 98%",
		"secondary-highlight-foreground": "0 0% 98%",
		"secondary-highlight": "240 4% 16%",
		accent: "12 7% 15%",
		background: "20 14% 4%",
		border: "240 4% 16%",
		card: "24 10% 10%",
		constructive: "144, 61%, 20%",
		destructive: "0 63% 31%",
		foreground: "0 0% 95%",
		muted: "0 0% 15%",
		popover: "0 0% 9%",
		primary: "333.3 71.4% 50.6%", // pink-600
		secondary: "240 4% 16%",
	},
};

export default pink;
