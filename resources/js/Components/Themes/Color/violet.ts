import { baseDark, baseLight, Theme } from "./color";

const violet: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "263.4 69.3% 42.2%", // violet-800
		primary: "262.1 83.3% 57.8%", // violet-600
	},
	dark: {
		...baseDark,
		"primary-highlight": "262.1 83.3% 57.8%", // violet-600
		background: "275 66.67% 3.53%", // violet-995
		primary: "263.4 69.3% 42.2%", // violet-800
	},
};

export default violet;
