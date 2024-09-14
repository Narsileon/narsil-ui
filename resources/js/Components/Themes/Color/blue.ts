import { baseDark, baseLight, Theme } from "./color";

const blue: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "216.38 70.17% 35.49%", // sky-800/blue-800
		primary: "212.76 74.3% 48.82%", // sky-600/blue-600
	},
	dark: {
		...baseDark,
		"primary-highlight": "212.76 74.3% 48.82%", // sky-600/blue-600
		background: "247.5 44.44% 3.53%", // blue-995
		primary: "216.38 70.17% 35.49%", // sky-800/blue-800
	},
};

export default blue;
