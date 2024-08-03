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

interface ThemeProviderProps {
	children: React.ReactNode;
	defaultColor?: Color;
	defaultMode?: Mode;
	defaultRadius?: number;
	defaultSize?: number;
	storageKey?: string;
}
