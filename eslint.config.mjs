import jsxa11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
	{
		files: ["./resources/js/**/*.ts", "./resources/js/**/*.tsx"],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2020,
			sourceType: "module",
			ecmaFeatures: {
				jsx: true,
			},
		},
		plugins: {
			"jsx-a11y": jsxa11y,
			react: react,
			"@typescript-eslint": tsPlugin,
		},
		rules: {
			...jsxa11y.configs.recommended.rules,
			...react.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
];
