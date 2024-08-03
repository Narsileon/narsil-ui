import { createContext, useContext, useEffect, useState } from "react";
import * as colors from "./Colors";

const initialState: ThemeProviderType = {
	color: "gray",
	dark: false,
	mode: "system",
	radius: 0.5,
	size: 1.0,
	setColor: () => null,
	setMode: () => null,
	setRadius: () => null,
	setSize: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderType>(initialState);

const ThemeProvider = ({
	children,
	defaultColor = "gray",
	defaultMode = "system",
	defaultRadius = 0.5,
	defaultSize = 1.0,
	storageKey = "theme",
	...props
}: ThemeProviderProps) => {
	const colorStorageKey = `app:${storageKey}:color`;
	const modeStorageKey = `app:${storageKey}:mode`;
	const radiusStorageKey = `app:${storageKey}:radius`;
	const sizeStorageKey = `app:${storageKey}:size`;

	const [color, setColor] = useState<Color>(() => (localStorage.getItem(colorStorageKey) as Color) || defaultColor);
	const [mode, setMode] = useState<Mode>(() => (localStorage.getItem(modeStorageKey) as Mode) || defaultMode);

	const [radius, setRadius] = useState<number>(() => {
		const storedRadius = localStorage.getItem(radiusStorageKey);

		return storedRadius ? parseFloat(storedRadius) : defaultRadius;
	});

	const [size, setSize] = useState<number>(() => {
		const storedSize = localStorage.getItem(sizeStorageKey);

		return storedSize ? parseFloat(storedSize) : defaultSize;
	});

	const [dark, setDark] = useState<boolean>(false);

	const getDark = () => {
		let isDark = mode === "dark";

		if (mode === "system") {
			isDark = window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false;
		}

		return isDark;
	};

	const getTheme = (color: Color) => {
		switch (color) {
			case "blue":
				return colors["blue"];
			case "gray":
				return colors["gray"];
			case "green":
				return colors["green"];
			case "neutral":
				return colors["neutral"];
			case "orange":
				return colors["orange"];
			case "pink":
				return colors["pink"];
			case "red":
				return colors["red"];
			case "violet":
				return colors["violet"];
			case "yellow":
				return colors["yellow"];
			default:
				return colors[defaultColor];
		}
	};

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		const dark = getDark();
		const theme = getTheme(color);

		Object.entries(dark ? theme.dark : theme.light).forEach(([property, value]) => {
			root.style.setProperty(`--${property}`, value);
		});

		root.classList.add(dark ? "dark" : "light");

		setDark(dark);
	}, [color, mode]);

	useEffect(() => {
		const root = window.document.documentElement;

		root.style.setProperty(`--radius`, `${radius}rem`);
	}, [radius]);

	useEffect(() => {
		const root = window.document.documentElement;

		root.style.fontSize = `${size}rem`;
	}, [size]);

	const value = {
		color: color,
		dark: dark,
		mode: mode,
		radius: radius,
		size: size,
		setColor: (color: Color) => {
			localStorage.setItem(colorStorageKey, color);
			setColor(color);
		},
		setMode: (mode: Mode) => {
			localStorage.setItem(modeStorageKey, mode);
			setMode(mode);
		},
		setRadius: (radius: number) => {
			localStorage.setItem(radiusStorageKey, radius.toString());
			setRadius(radius);
		},
		setSize: (size: number) => {
			localStorage.setItem(sizeStorageKey, size.toString());
			setSize(size);
		},
	};

	return (
		<ThemeProviderContext.Provider
			{...props}
			value={value}
		>
			{children}
		</ThemeProviderContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined) {
		throw new Error("useTheme must be used within a <ThemeProvider />");
	}

	return context;
};

export default ThemeProvider;
