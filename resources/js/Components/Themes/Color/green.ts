import { baseDark, baseLight, Theme } from "./color";

const green: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "142.83 67.65% 26.67%", // green-750
		primary: "151.09 78.29% 34.31%", //green-600
	},
	dark: {
		...baseDark,
		"primary-highlight": "151.09 78.29% 34.31%", //green-600
		background: "132 55.56% 1.76%", //green-995
		primary: "142.83 67.65% 26.67%", // green-750
	},
};

export default green;
