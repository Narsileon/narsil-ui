export default {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react", "@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsx-a11y/recommended",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
};
