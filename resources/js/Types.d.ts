type Color = "blue" | "gray" | "green" | "neutral" | "orange" | "pink" | "red" | "violet" | "yellow";

type LanguageType = {
	active: boolean;
	created_at: string;
	id: number;
	language: string;
	locale: string;
	updated_at: string;
};

type Mode = "dark" | "light" | "system";
