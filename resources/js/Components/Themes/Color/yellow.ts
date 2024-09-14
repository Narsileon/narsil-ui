import { baseDark, baseLight, Theme } from "./color";

const yellow: Theme = {
	light: {
		...baseLight,
		"primary-foreground": "222.2 84% 4.9%", // slate-950
		"primary-highlight-foreground": "222.2 84% 4.9%", // slate-950
		"primary-highlight": "45.4 93.4% 47.5%", // yellow-500
		primary: "47.95,95.82%,53.14%", // yellow-400
	},
	dark: {
		...baseDark,
		"primary-foreground": "222.2 84% 4.9%", // slate-950
		"primary-highlight-foreground": "222.2 84% 4.9%", // slate-950
		"primary-highlight": "47.95,95.82%,53.14%", // yellow-400
		background: "21.82 84.62% 2.55%", //yellow-995
		primary: "45.4 93.4% 47.5%", // yellow-500
	},
};

export default yellow;
