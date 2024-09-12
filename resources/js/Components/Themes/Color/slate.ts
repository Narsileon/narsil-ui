import { baseDark, baseLight, Theme } from "./color";

const slate: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "215.3 25% 26.7%", // slate-700
		primary: "217.2 32.6% 17.5%", // slate-800
	},
	dark: {
		...baseDark,
		"primary-highlight": "215.3 25% 26.7%", // slate-700
		background: "220 100% 0.59%", // slate-995
		primary: "217.2 32.6% 17.5%", // slate-800
	},
};

export default slate;
