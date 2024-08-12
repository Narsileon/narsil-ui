type GetValidArrowNumberConfig = {
	max: number;
	min: number;
	step: number;
};

type GetValidNumberConfig = {
	loop?: boolean;
	max: number;
	min?: number;
};

type TimeInputType = "minutes" | "seconds" | "hours";
