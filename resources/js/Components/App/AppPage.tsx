import { Head, usePage } from "@inertiajs/react";
import * as React from "react";

interface Props {
	children: React.ReactNode;
	head?: React.ReactNode;
	title?: string;
}

const AppPage = ({ children, head, title }: Props) => {
	const shared = usePage<GlobalProps>().props.shared;

	const { favicon, name } = shared.app;

	return (
		<>
			<Head>
				<title>{title ? `${title} | ${name}` : name}</title>

				{favicon ? (
					<link
						rel='icon'
						href={`${window.location.origin}/storage/${favicon}`}
					/>
				) : null}

				{head}
			</Head>

			{children}
		</>
	);
};

export default AppPage;
