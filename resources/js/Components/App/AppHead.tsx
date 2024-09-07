import { Head } from "@inertiajs/react";
import * as React from "react";

export interface AppPageProps extends React.HTMLAttributes<HTMLHeadElement> {
	description?: string;
	favicon?: string;
	head?: React.ReactNode;
	keywords?: string;
}

const AppHead = ({ children, description, favicon, keywords, title }: AppPageProps) => {
	return (
		<Head>
			{title ? <title>{title}</title> : null}

			{description ? (
				<meta
					name='description'
					content={description}
				/>
			) : null}
			{keywords ? (
				<meta
					name='keywords'
					content={keywords}
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
