import { cn } from "@narsil-ui/Components/utils";
import { Link } from "@inertiajs/react";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import Breadcrumb from "@narsil-ui/Components/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "@narsil-ui/Components/Breadcrumb/BreadcrumbItem";
import BreadcrumbLink from "@narsil-ui/Components/Breadcrumb/BreadcrumbLink";
import BreadcrumbList from "@narsil-ui/Components/Breadcrumb/BreadcrumbList";
import BreadcrumbSeparator from "@narsil-ui/Components/Breadcrumb/BreadcrumbSeparator";

export type BreadcrumbType = {
	label: string;
	url: string;
};

export interface AppBreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
	breadcrumb: BreadcrumbType[];
}

const AppBreadcrumb = React.forwardRef<HTMLElement, AppBreadcrumbProps>(({ breadcrumb, className, ...props }, ref) => {
	const { trans } = useTranslationsStore();

	return (
		<Breadcrumb
			ref={ref}
			className={cn("py-2", className)}
			{...props}
		>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink asChild={true}>
						<Link href='/'>{trans("common.home")}</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				{breadcrumb.map((item, index) => (
					<React.Fragment key={index}>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild={true}>
								<Link href={item.url}>{item.label}</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
});

export default AppBreadcrumb;
