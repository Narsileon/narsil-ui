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

type GlobalProps = {
	shared: {
		app: {
			name: string;
		};
		localization: {
			locale: string;
			languages: LanguageType[];
			translations: { [key: string]: Translation };
		};
		redirect: {
			success: {
				message: string;
				options?: import("@narsil-localization/Stores/translationStore").TransOptions;
			};
			error: {
				message: string;
				options?: import("@narsil-localization/Stores/translationStore").TransOptions;
			};
		};
	};
};

type InertiaPage = React.ReactNode & {
	props: GlobalProps;
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
