import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { getLinksBySide, PaginationLink, SimpleLinks } from "./paginationUtils";
import { InertiaLinkProps, Link, router } from "@inertiajs/react";
import { useEffect } from "react";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import Pagination from "./Pagination";
import PaginationButton from "./PaginationButton";
import PaginationEllipsis from "./PaginationEllipsis";
import PaginationItem from "./PaginationItem";
import PaginationList from "./PaginationList";
import PaginationResult, { PaginationResultProps } from "./PaginationResult";
import PaginationSelect, { PaginationSelectProps } from "./PaginationSelect";
import TooltipWrapper from "../Tooltip/TooltipWrapper";
import useScreenStore from "@narsil-ui/Stores/screenStore";

export interface CollectionPaginationProps
	extends React.HTMLAttributes<HTMLDivElement>,
		PaginationResultProps,
		PaginationSelectProps {
	currentPage: number;
	data?: Pick<InertiaLinkProps, "data">;
	lastPage: number;
	links: PaginationLink[];
	simpleLinks: SimpleLinks;
}

const CollectionPagination = React.forwardRef<HTMLDivElement, CollectionPaginationProps>(
	(
		{
			currentPage,
			data,
			from,
			lastPage,
			links,
			options,
			pageSize,
			simpleLinks,
			to,
			total,
			onPageSizeChange,
			...props
		},
		ref
	) => {
		const { trans } = useTranslationsStore();

		const firstPageLabel = trans("First page");
		const lastPageLabel = trans("Last page");
		const nextPageLabel = trans("Next page");
		const previousPageLabel = trans("Previous page");

		const { isMobile, isTablet } = useScreenStore();

		const { leftLinks, rightLinks } = getLinksBySide(links, isMobile ? 2 : isTablet ? 3 : 4);

		useEffect(() => {
			if (simpleLinks.first && currentPage > lastPage) {
				router.get(simpleLinks.first, data, {
					preserveScroll: true,
					preserveState: true,
				});
			}
		}, [lastPage]);

		return (
			<div
				ref={ref}
				className='grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'
				{...props}
			>
				<PaginationResult
					className='order-2 self-center justify-self-center lg:w-fit lg:justify-self-start xl:order-1'
					from={from}
					to={to}
					total={total}
				/>

				<Pagination className='order-1 self-center justify-self-center lg:col-span-2 xl:order-2 xl:col-span-1'>
					<PaginationList>
						<TooltipWrapper tooltip={firstPageLabel}>
							<PaginationItem>
								<PaginationButton
									asChild={true}
									disabled={simpleLinks.prev === null}
								>
									<Link
										aria-label={firstPageLabel}
										as='button'
										data={data}
										href={simpleLinks.first ?? ""}
										preserveScroll={true}
										preserveState={true}
									>
										<ChevronsLeft className='h-5 w-5' />
									</Link>
								</PaginationButton>
							</PaginationItem>
						</TooltipWrapper>
						<TooltipWrapper tooltip={previousPageLabel}>
							<PaginationItem>
								<PaginationButton
									asChild={true}
									disabled={simpleLinks.prev === null}
								>
									<Link
										aria-label={previousPageLabel}
										as='button'
										data={data}
										href={simpleLinks.prev ?? ""}
										preserveScroll={true}
										preserveState={true}
									>
										<ChevronLeft className='h-5 w-5' />
									</Link>
								</PaginationButton>
							</PaginationItem>
						</TooltipWrapper>
						{leftLinks.length > 0 && rightLinks.length > 0 ? (
							<>
								{leftLinks.map((link, index) => {
									return (
										<PaginationItem key={index}>
											<PaginationButton
												asChild={true}
												isActive={link.active}
											>
												<Link
													as='button'
													data={data}
													href={link.url ?? ""}
													preserveScroll={true}
													preserveState={true}
												>
													{link.label}
												</Link>
											</PaginationButton>
										</PaginationItem>
									);
								})}

								<PaginationEllipsis />

								{rightLinks.map((link, index) => {
									return (
										<PaginationItem key={index}>
											<PaginationButton
												asChild={true}
												isActive={link.active}
											>
												<Link
													as='button'
													data={data}
													href={link.url ?? ""}
													preserveScroll={true}
													preserveState={true}
												>
													{link.label}
												</Link>
											</PaginationButton>
										</PaginationItem>
									);
								})}
							</>
						) : (
							links.map((link, index) =>
								link.url ? (
									<PaginationItem key={index}>
										<PaginationButton
											asChild={true}
											isActive={link.active}
										>
											<Link
												as='button'
												data={data}
												href={link.url}
												preserveScroll={true}
												preserveState={true}
											>
												{link.label}
											</Link>
										</PaginationButton>
									</PaginationItem>
								) : (
									<PaginationEllipsis />
								)
							)
						)}
						<TooltipWrapper tooltip={nextPageLabel}>
							<PaginationItem>
								<PaginationButton
									asChild={true}
									disabled={simpleLinks.next === null}
								>
									<Link
										aria-label={nextPageLabel}
										as='button'
										data={data}
										href={simpleLinks.next ?? ""}
										preserveScroll={true}
										preserveState={true}
									>
										<ChevronRight className='h-5 w-5' />
									</Link>
								</PaginationButton>
							</PaginationItem>
						</TooltipWrapper>
						<TooltipWrapper tooltip={lastPageLabel}>
							<PaginationItem>
								<PaginationButton
									asChild={true}
									disabled={simpleLinks.next === null}
								>
									<Link
										aria-label={lastPageLabel}
										as='button'
										data={data}
										href={simpleLinks.last ?? ""}
										preserveScroll={true}
										preserveState={true}
									>
										<ChevronsRight className='h-5 w-5' />
									</Link>
								</PaginationButton>
							</PaginationItem>
						</TooltipWrapper>
					</PaginationList>
				</Pagination>

				<PaginationSelect
					className='order-3 self-center justify-self-center lg:order-3 lg:justify-self-end'
					pageSize={pageSize}
					options={options}
					onPageSizeChange={onPageSizeChange}
				/>
			</div>
		);
	}
);

export default CollectionPagination;
