import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useFullscreen } from 'react-use';
import * as React from 'react';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function useFullscreenable(ref: React.RefObject<HTMLDivElement>) {
	const [isFullscreen, setIsFullscreen] = React.useState(false);

	useFullscreen(ref, isFullscreen, {
		onClose: () => setIsFullscreen(false),
	});

	const toggleFullscreen = () => {
		setIsFullscreen((prev) => !prev);
	};

	return { isFullscreen, toggleFullscreen };
}
