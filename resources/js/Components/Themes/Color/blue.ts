import { baseDark, baseLight, Theme } from "./color";

const blue: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "212.76 74.3% 48.82%", // sky-600/blue/600
		primary: "216.38 70.17% 35.49%", // sky-800/blue/800
	},
	dark: {
		...baseDark,
		"primary-highlight": "212.76 74.3% 48.82%", // sky-600/blue/600
		background: "240 33.33% 6.47%", // blue-990
		primary: "216.38 70.17% 35.49%", // sky-800/blue/800
	},
};

export default blue;
