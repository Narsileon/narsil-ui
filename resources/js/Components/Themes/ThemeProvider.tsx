import { createContext, useContext, useEffect, useState } from "react";
import blue from "./Colors/blue";
import gray from "./Colors/gray";
import green from "./Colors/green";
import neutral from "./Colors/neutral";
import orange from "./Colors/orange";
import pink from "./Colors/pink";
import red from "./Colors/red";
import violet from "./Colors/violet";
import yellow from "./Colors/yellow";

type Mode = "dark" | "light" | "system";

type ThemeProviderState = {
	color: Color;
	dark: boolean;
	mode: Mode;
	radius: number;
	size: number;
};

type ThemeProviderAction = {
	setColor: (color: Color) => void;
	setMode: (mode: Mode) => void;
	setRadius: (radius: number) => void;
	setSize: (size: number) => void;
};

type ThemeProviderType = ThemeProviderState & ThemeProviderAction;

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

export interface ThemeProviderProps {
	children: React.ReactNode;
	defaultColor?: Color;
	defaultMode?: Mode;
	defaultRadius?: number;
	defaultSize?: number;
	storageKey?: string;
}

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
				return blue;
			case "gray":
				return gray;
			case "green":
				return green;
			case "neutral":
				return neutral;
			case "orange":
				return orange;
			case "pink":
				return pink;
			case "red":
				return red;
			case "violet":
				return violet;
			case "yellow":
				return yellow;
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
