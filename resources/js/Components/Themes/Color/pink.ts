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
		background: "346.67 60% 5.88%", // pink-990
		primary: "335.8 74.4% 35.3%", // pink-800
	},
};

export default pink;
