import { baseDark, baseLight, Theme } from "./color";

const green: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "151.09 78.29% 34.31%", //green-600
		primary: "143.8 61.2% 20.2%", // green-800
	},
	dark: {
		...baseDark,
		"primary-highlight": "151.09 78.29% 34.31%", //green-600
		background: "132 55.56% 1.76%", //green-995
		primary: "142.8 64.2% 24.1%", // green-800
	},
};

export default green;
