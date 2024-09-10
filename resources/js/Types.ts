import { Config } from "ziggy-js";
import { LanguageModel } from "@narsil-localization/Types";
import { PaginationLink, SimpleLinks } from "./Components/Pagination/paginationUtils";
import { Translation } from "@narsil-localization/Stores/translationStore";
import { UserModel } from '@narsil-auth/Types';

export type Collection<T = { [key: string]: any }> = {
	data: T[];
	links: SimpleLinks;
	meta: CollectionMeta;
};

export type CollectionMeta = {
	current_page: number;
	from: number;
	last_page: number;
	links: PaginationLink[];
	to: number;
	total: number;
};

export type GlobalProps = {
	shared: SharedProps;
};

export type Resource<T> = {
	data: T;
	meta: Record<string, any>;
};

export type SelectOption = {
	label?: string;
	value?: string | number;
	options?: SelectOption[];
	[key: string]: any;
};

export type SharedProps = {
	app: {
		favicon: string | null;
		logo: string | null;
		name: string | null;
		version: string | null;
		page: {
			title?: string | null;
			description?: string | null;
			keywords?: string | null;
		};
	};
	auth: {
		first_name: UserModel["first_name"];
		full_name: UserModel["full_name"];
		id: UserModel["id"];
		last_name: UserModel["last_name"];
		username: UserModel["username"];
	};
	localization: {
		locale: string;
		languages: LanguageModel[];
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
	ziggy: Config;
};
