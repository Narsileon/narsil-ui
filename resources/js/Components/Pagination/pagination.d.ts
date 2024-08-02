type PaginationLink = {
	active: boolean;
	label: string;
	url: string | null;
};

type SimpleLinks = {
	first: string | null;
	last: string | null;
	next: string | null;
	prev: string | null;
};

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
	currentPage: number;
	data?: Pick<import("@inertiajs/react").InertiaLinkProps, "data">;
	lastPage: number;
	links: PaginationLink[];
	simpleLinks: SimpleLinks;
}
