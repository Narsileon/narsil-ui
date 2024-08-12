export function getArrowByType(value: string, step: number, type: TimeInputType) {
	switch (type) {
		case "minutes":
			return getValidArrowMinuteOrSecond(value, step);
		case "seconds":
			return getValidArrowMinuteOrSecond(value, step);
		case "hours":
			return getValidArrowHour(value, step);
		default:
			return "00";
	}
}

export function getDateByType(date: Date, type: TimeInputType) {
	switch (type) {
		case "minutes":
			return getValidMinuteOrSecond(String(date.getMinutes()));
		case "seconds":
			return getValidMinuteOrSecond(String(date.getSeconds()));
		case "hours":
			return getValidHour(String(date.getHours()));
		default:
			return "00";
	}
}

export function getValidArrowHour(value: string, step: number) {
	return getValidArrowNumber(value, { min: 0, max: 23, step });
}

export function getValidArrowMinuteOrSecond(value: string, step: number) {
	return getValidArrowNumber(value, { min: 0, max: 59, step });
}

export function getValidArrowNumber(value: string, { min, max, step }: GetValidArrowNumberConfig) {
	let numericValue = parseInt(value, 10);

	if (!isNaN(numericValue)) {
		numericValue += step;

		return getValidNumber(String(numericValue), { min, max, loop: true });
	}

	return "00";
}

export function getValidHour(value: string) {
	return isValidHour(value) ? value : getValidNumber(value, { max: 23 });
}

export function getValidMinuteOrSecond(value: string) {
	return isValidMinuteOrSecond(value) ? value : getValidNumber(value, { max: 59 });
}

export function getValidNumber(value: string, { max, min = 0, loop = false }: GetValidNumberConfig) {
	let numericValue = parseInt(value, 10);

	if (!isNaN(numericValue)) {
		if (!loop) {
			if (numericValue > max) {
				numericValue = max;
			}
			if (numericValue < min) {
				numericValue = min;
			}
		} else {
			if (numericValue > max) {
				numericValue = min;
			}
			if (numericValue < min) {
				numericValue = max;
			}
		}

		return numericValue.toString().padStart(2, "0");
	}

	return "00";
}

export function isValidHour(value: string) {
	return /^(0[0-9]|1[0-9]|2[0-3])$/.test(value);
}

export function isValidMinuteOrSecond(value: string) {
	return /^[0-5][0-9]$/.test(value);
}

export function setDateByType(date: Date, value: string, type: TimeInputType) {
	switch (type) {
		case "minutes":
			return setMinutes(date, value);
		case "seconds":
			return setSeconds(date, value);
		case "hours":
			return setHours(date, value);
		default:
			return date;
	}
}

export function setHours(date: Date, value: string) {
	const hours = getValidHour(value);

	date.setHours(parseInt(hours, 10));

	return date;
}

export function setMinutes(date: Date, value: string) {
	const minutes = getValidMinuteOrSecond(value);

	date.setMinutes(parseInt(minutes, 10));

	return date;
}

export function setSeconds(date: Date, value: string) {
	const seconds = getValidMinuteOrSecond(value);

	date.setSeconds(parseInt(seconds, 10));

	return date;
}