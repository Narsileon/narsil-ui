import { Head, usePage } from "@inertiajs/react";
import { GlobalProps } from "@narsil-ui/Types";
import * as React from "react";

export interface AppPageProps extends React.HTMLAttributes<HTMLHeadElement> {
	description?: string;
	head?: React.ReactNode;
	keywords?: string;
}

const AppHead = ({ children, description, keywords, title }: AppPageProps) => {
	const app = usePage<GlobalProps>().props.shared.app;

	const { favicon, name } = app;
	const { description: sharedDescription, keywords: sharedKeywords, title: sharedTitle } = app.page;

	const finalDescription = description ?? sharedDescription;
	const finalKeywords = keywords ?? sharedKeywords;
	const finalTitle = title ?? sharedTitle;

	return (
		<Head>
			<title>{finalTitle ? `${finalTitle} | ${name}` : name}</title>;
			{finalDescription ? (
				<meta
					name='description'
					content={finalDescription}
				/>
			) : null}
			{finalKeywords ? (
				<meta
					name='keywords'
					content={finalKeywords}
				/>
			) : null}
			{favicon ? (
				<link
					rel='icon'
					href={favicon}
				/>
			) : null}
			{children}
		</Head>
	);
};

export default AppHead;
