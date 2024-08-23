type Collection<T = { [key: string]: any }> = {
	data: T;
	links: SimpleLinks;
	meta: CollectionMeta;
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

type SharedProps = {
	shared: {
		app: {
			favicon: string | null;
			name: string | null;
			version: string | null;
		};
		localization: {
			locale: string;
			languages: LanguageType[];
			translations: { [key: string]: Translation } | null;
		};
		redirect: {
			success:
				| string
				| {
						message: string;
						options?: import("@narsil-localization/Stores/translationStore").TransOptions;
				  }
				| null;
			error:
				| string
				| {
						message: string;
						options?: import("@narsil-localization/Stores/translationStore").TransOptions;
				  }
				| null;
		};
	};
};

type InertiaPage = React.ReactNode & {
	props: SharedProps;
};

type PaginationLink = {
	active: boolean;
	label: string;
	url: string | null;
};

type SelectOption = {
	label?: string;
	value?: string | number;
	options?: SelectOption[];
	[key: string]: any;
};

type SimpleLinks = {
	first: string | null;
	last: string | null;
	next: string | null;
	prev: string | null;
};
