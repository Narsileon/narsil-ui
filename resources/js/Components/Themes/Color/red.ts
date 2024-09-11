import { baseDark, baseLight, Theme } from "./color";

const red: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "0 72.2% 50.6%", // red-600
		primary: "0 70% 35.3%", // red-800
	},
	dark: {
		...baseDark,
		"primary-highlight": "0 72.2% 50.6%", // red-600
		background: "5 85.71% 2.75%", // red-995
		primary: "0 70% 35.3%", // red-800
	},
};

export default red;
