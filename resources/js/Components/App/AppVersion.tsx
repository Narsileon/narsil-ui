import { useTranslationsStore } from "@narsil-ui/Stores/translationStore";
import * as React from "react";

export interface AppVersionProps extends React.HTMLAttributes<HTMLElement> {
	version: string;
}

const AppVersion = React.forwardRef<HTMLElement, AppVersionProps>(({ version }, ref) => {
	const { trans } = useTranslationsStore();

	return (
		<small
			ref={ref}
			className='min-w-fit whitespace-nowrap'
		>
			{`${trans("Version")} ${version}`}
		</small>
	);
});

export default AppVersion;
