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
	lastPage: number;
	links: PaginationLink[];
	simpleLinks: SimpleLinks;
}
