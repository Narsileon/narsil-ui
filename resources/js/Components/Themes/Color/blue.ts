import { baseDark, baseLight, Theme } from "./color";

const blue: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "201.02 96.72% 35.88%", // sky-650
		primary: "224.4 64.3% 32.9%", // blue-900
	},
	dark: {
		...baseDark,
		"primary-highlight": "201.02 96.72% 35.88%", // sky-650
		primary: "224.4 64.3% 32.9%", // blue-900
	},
};

export default blue;
