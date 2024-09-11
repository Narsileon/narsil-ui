import { baseDark, baseLight, Theme } from "./color";

const pink: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "333.3 71.4% 50.6%", // pink-600
		primary: "335.8 74.4% 35.3%", // pink-800
	},
	dark: {
		...baseDark,
		"primary-highlight": "333.3 71.4% 50.6%", // pink-600
		background: "349.09 64.71% 3.33%", // pink-995
		primary: "335.8 74.4% 35.3%", // pink-800
	},
};

export default pink;
