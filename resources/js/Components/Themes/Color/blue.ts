import { baseDark, baseLight, Theme } from "./color";

const blue: Theme = {
	light: {
		...baseLight,
		"accent-foreground": "222.2 47.4% 11.2%", // slate-900
		"muted-foreground": "215.4 16.3% 46.9%", // slate-500
		"primary-highlight": "221.2 83.2% 53.3%", // blue-600
		"secondary-foreground": "222.2 47.4% 11.2%", // slate-900
		"secondary-highlight-foreground": "222.2 47.4% 11.2%", // slate-900
		"secondary-highlight": "210 40% 96%", // slate-100
		accent: "210 40% 96%", // slate-100
		border: "214.3 31.8% 91.4%", // slate-200
		muted: "210 40% 96%", // slate-100
		primary: "224.4 64.3% 32.9%", // blue-900
		secondary: "210 40% 96%", // slate-100
	},
	dark: {
		...baseDark,
		"accent-foreground": "210 40% 98%", // slate-50
		"card-foreground": "210 40% 98%", // slate-50
		"muted-foreground": "215 20.2% 65.1%", // slate-400
		"primary-highlight": "221.2 83.2% 53.3%", // blue-600
		"secondary-foreground": "210 40% 98%", // slate-50
		"secondary-highlight-foreground": "210 40% 98%",
		"secondary-highlight": "217.2 32.6% 17.5%", // slate-800
		accent: "217.2 32.6% 17.5%", // slate-800
		border: "217.2 32.6% 17.5%", // slate-800
		muted: "217.2 32.6% 17.5%", // slate-800
		primary: "224.4 64.3% 32.9%", // blue-900
		secondary: "217.2 32.6% 17.5%", // slate-800
	},
};

export default blue;
