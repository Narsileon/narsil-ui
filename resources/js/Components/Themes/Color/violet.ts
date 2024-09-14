import { baseDark, baseLight, Theme } from "./color";

const violet: Theme = {
	light: {
		...baseLight,
		"primary-highlight": "268.31 68.27% 40.78%", // violet-800/purple-800
		primary: "267 81.82% 56.86%", // violet-600/purple-600
	},
	dark: {
		...baseDark,
		"primary-highlight": "267 81.82% 56.86%", // violet-600/purple-600
		background: "275 66.67% 3.53%", // violet-995
		primary: "268.31 68.27% 40.78%", // violet-800/purple-800
	},
};

export default violet;
