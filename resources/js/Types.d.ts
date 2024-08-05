type Collection<T = { [key: string]: any }> = {
	data: T;
	links: SimpleLinks;
	meta: Meta;
};

type CollectionMeta = {
	current_page: number;
	from: number;
	grouped_from: number | null;
	grouped_to: number | null;
	grouped_total: number | null;
	last_page: number;
	links: PaginationLink[];
	to: number;
	total: number;
};
