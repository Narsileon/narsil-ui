import { baseDark, baseLight, Theme } from "./color";

const red: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "0 71.57% 38.63%", // red-750
		primary: "0 72.2% 50.6%", // red-600
	},
	dark: {
		...baseDark,
		"primary-highlight": "0 72.2% 50.6%", // red-600
		background: "5 85.71% 2.75%", // red-995
		primary: "0 71.57% 38.63%", // red-750
	},
};

export default red;
