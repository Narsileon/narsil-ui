import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { getLinksBySide, PaginationLink, SimpleLinks } from "./paginationUtils";
import { InertiaLinkProps, Link, router } from "@inertiajs/react";
import { useEffect } from "react";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import PaginationButton from "./PaginationButton";
import PaginationEllipsis from "./PaginationEllipsis";
import PaginationItem from "./PaginationItem";
import PaginationList from "./PaginationList";
import PaginationNav from "./PaginationNav";
import PaginationResult, { PaginationResultProps } from "./PaginationResult";
import PaginationSelect, { PaginationSelectProps } from "./PaginationSelect";
import TooltipWrapper from "../Tooltip/TooltipWrapper";
import useScreenStore from "@narsil-ui/Stores/screenStore";

export interface PaginationProps
	extends React.HTMLAttributes<HTMLDivElement>,
		PaginationResultProps,
		PaginationSelectProps {
	currentPage: number;
	data?: Pick<InertiaLinkProps, "data">;
	lastPage: number;
	links: PaginationLink[];
	simpleLinks: SimpleLinks;
}

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
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

				<PaginationNav className='order-1 self-center justify-self-center lg:col-span-2 xl:order-2 xl:col-span-1'>
					<PaginationList>
						<TooltipWrapper tooltip={trans("First page")}>
							<PaginationItem>
								<PaginationButton
									asChild={true}
									disabled={simpleLinks.prev === null}
								>
									<Link
										as='button'
										data={data}
										href={simpleLinks.first ?? ""}
										preserveScroll={true}
										preserveState={true}
									>
										<ChevronsLeft className='h-5 w-5' />
										<span className='sr-only'>{trans("First page")}</span>
									</Link>
								</PaginationButton>
							</PaginationItem>
						</TooltipWrapper>
						<TooltipWrapper tooltip={trans("Previous page")}>
							<PaginationItem>
								<PaginationButton
									asChild={true}
									disabled={simpleLinks.prev === null}
								>
									<Link
										as='button'
										data={data}
										href={simpleLinks.prev ?? ""}
										preserveScroll={true}
										preserveState={true}
									>
										<ChevronLeft className='h-5 w-5' />
										<span className='sr-only'>{trans("Previous page")}</span>
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
						<TooltipWrapper tooltip={trans("Next page")}>
							<PaginationItem>
								<PaginationButton
									asChild={true}
									disabled={simpleLinks.next === null}
								>
									<Link
										as='button'
										data={data}
										href={simpleLinks.next ?? ""}
										preserveScroll={true}
										preserveState={true}
									>
										<ChevronRight className='h-5 w-5' />
										<span className='sr-only'>{trans("Next page")}</span>
									</Link>
								</PaginationButton>
							</PaginationItem>
						</TooltipWrapper>
						<TooltipWrapper tooltip={trans("Last page")}>
							<PaginationItem>
								<PaginationButton
									asChild={true}
									disabled={simpleLinks.next === null}
								>
									<Link
										as='button'
										data={data}
										href={simpleLinks.last ?? ""}
										preserveScroll={true}
										preserveState={true}
									>
										<ChevronsRight className='h-5 w-5' />
										<span className='sr-only'>{trans("Last page")}</span>
									</Link>
								</PaginationButton>
							</PaginationItem>
						</TooltipWrapper>
					</PaginationList>
				</PaginationNav>

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

export default Pagination;
