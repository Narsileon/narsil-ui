import { baseDark, baseLight, Theme } from "./color";

const slate: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "215.3 19.3% 34.5%",
		primary: "217.2 32.6% 17.5%",
	},
	dark: {
		...baseDark,
		"primary-highlight": "215.3 19.3% 34.5%",
		background: "220 100% 0.59%",
		primary: "217.2 32.6% 17.5%",
	},
};

export default slate;
