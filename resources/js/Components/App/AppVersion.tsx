import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";

export interface AppVersionProps extends React.HTMLAttributes<HTMLElement> {
	version: string;
}

const AppVersion = React.forwardRef<HTMLElement, AppVersionProps>(({ version, ...props }, ref) => {
	const { trans } = useTranslationsStore();

	return (
		<small
			ref={ref}
			className='min-w-fit whitespace-nowrap'
			{...props}
		>
			{`${trans("Version")} ${version}`}
		</small>
	);
});

export default AppVersion;
