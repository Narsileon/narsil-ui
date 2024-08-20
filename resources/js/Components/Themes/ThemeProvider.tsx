import { Color, Theme } from "./Color/color";
import * as React from "react";
import blue from "./Color/blue";
import gray from "./Color/gray";
import green from "./Color/green";
import neutral from "./Color/neutral";
import orange from "./Color/orange";
import pink from "./Color/pink";
import red from "./Color/red";
import violet from "./Color/violet";
import yellow from "./Color/yellow";

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
	setTheme: (theme: Theme) => void;
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
	setTheme: () => null,
};

const ThemeProviderContext = React.createContext<ThemeProviderType>(initialState);

export interface ThemeProviderProps {
	children: React.ReactNode;
	defaultColor?: Color;
	defaultMode?: Mode;
	defaultRadius?: number;
	defaultSize?: number;
	defaultTheme?: Theme | null;
	storageKey?: string | null;
}

const ThemeProvider = ({
	children,
	defaultColor = "gray",
	defaultMode = "system",
	defaultRadius = 0.5,
	defaultSize = 1.0,
	defaultTheme = null,
	storageKey = "theme",
}: ThemeProviderProps) => {
	const colorStorageKey = `app:${storageKey}:color`;
	const modeStorageKey = `app:${storageKey}:mode`;
	const radiusStorageKey = `app:${storageKey}:radius`;
	const sizeStorageKey = `app:${storageKey}:size`;

	const [color, setColor] = React.useState<Color>(
		storageKey ? () => (localStorage.getItem(colorStorageKey) as Color) || defaultColor : defaultColor
	);

	const [dark, setDark] = React.useState<boolean>(false);

	const [mode, setMode] = React.useState<Mode>(
		storageKey ? () => (localStorage.getItem(modeStorageKey) as Mode) || defaultMode : defaultMode
	);

	const [radius, setRadius] = React.useState<number>(() => {
		if (!storageKey) {
			return defaultRadius;
		}

		const storedRadius = localStorage.getItem(radiusStorageKey);

		return storedRadius ? parseFloat(storedRadius) : defaultRadius;
	});

	const [size, setSize] = React.useState<number>(() => {
		if (!storageKey) {
			return defaultSize;
		}

		const storedSize = localStorage.getItem(sizeStorageKey);

		return storedSize ? parseFloat(storedSize) : defaultSize;
	});

	const [theme, setTheme] = React.useState<Theme | null>(defaultTheme);

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

	function loadTheme(theme: Theme) {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		const dark = getDark();

		Object.entries(dark ? theme.dark : theme.light).forEach(([property, value]) => {
			root.style.setProperty(`--${property}`, value);
		});

		root.classList.add(dark ? "dark" : "light");

		setDark(dark);
	}

	React.useEffect(() => {
		const theme = getTheme(color);

		loadTheme(theme);
	}, [color, mode]);

	React.useEffect(() => {
		const root = window.document.documentElement;

		root.style.setProperty(`--radius`, `${radius}rem`);
	}, [radius]);

	React.useEffect(() => {
		const root = window.document.documentElement;

		root.style.fontSize = `${size}rem`;
	}, [size]);

	React.useEffect(() => {
		if (theme) {
			loadTheme(theme);
		}
	}, [theme]);

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
		setTheme: (theme: Theme | null) => {
			setTheme(theme);
		},
	};

	return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
};

export const useTheme = () => {
	const context = React.useContext(ThemeProviderContext);

	if (context === undefined) {
		throw new Error("useTheme must be used within a <ThemeProvider />");
	}

	return context;
};

export default ThemeProvider;
