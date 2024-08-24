export type PaginationLink = {
	active: boolean;
	label: string;
	url: string | null;
};

export type SimpleLinks = {
	first: string | null;
	last: string | null;
	next: string | null;
	prev: string | null;
};

export function getLinksBySide(links: PaginationLink[], size: number) {
	let leftLinks: PaginationLink[] = [];
	let rightLinks: PaginationLink[] = [];

	const ellipsisIndex = links.findIndex((x) => x.url === null);

	if (ellipsisIndex !== -1) {
		const ellipsisLeft = ellipsisIndex;
		const ellipsisRight = links.length - 1 - ellipsisIndex;

		if (ellipsisLeft <= ellipsisRight) {
			leftLinks = links.slice(0, Math.min(size, ellipsisLeft));
			rightLinks = links.slice(-Math.min(size * 2 - leftLinks.length, ellipsisRight));
		} else {
			rightLinks = links.slice(-Math.min(size, ellipsisRight));
			leftLinks = links.slice(0, Math.min(size * 2 - rightLinks.length, ellipsisLeft));
		}
	} else if (links.length > size * 2 + 1) {
		leftLinks = links.slice(0, size);
		rightLinks = links.slice(-size);
	}

	return {
		leftLinks: leftLinks,
		rightLinks: rightLinks,
	};
}
