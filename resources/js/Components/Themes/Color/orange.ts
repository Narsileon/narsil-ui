import { baseDark, baseLight, Theme } from "./color";

const orange: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "15.95 83.16% 37.25%", // orange-750
		primary: "20.5 90.2% 48.2%", // orange-600
	},
	dark: {
		...baseDark,
		"primary-highlight": "20.5 90.2% 48.2%", // orange-600
		background: "10 85.71% 2.75%", // orange-995
		primary: "15.95 83.16% 37.25%", // orange-750
	},
};

export default orange;
