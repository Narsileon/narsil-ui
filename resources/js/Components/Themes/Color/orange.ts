import { baseDark, baseLight, Theme } from "./color";

const orange: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "20.5 90.2% 48.2%", // orange-600
		primary: "15 79.1% 33.7%", // orange-800
	},
	dark: {
		...baseDark,
		"primary-highlight": "20.5 90.2% 48.2%", // orange-600
		background: "10 85.71% 2.75%", // orange-995
		primary: "15 79.1% 33.7%", // orange-800
	},
};

export default orange;
