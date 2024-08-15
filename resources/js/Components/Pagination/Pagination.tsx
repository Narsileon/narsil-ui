import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { InertiaLinkProps, Link, router } from "@inertiajs/react";
import { useEffect } from "react";
import * as React from "react";
import PaginationButton from "./PaginationButton";
import PaginationItem from "./PaginationItem";
import PaginationList from "./PaginationList";
import PaginationNav from "./PaginationNav";
import PaginationResult, { PaginationResultProps } from "./PaginationResult";
import PaginationSelect, { PaginationSelectProps } from "./PaginationSelect";

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
				className='flex w-full flex-col items-center justify-between gap-x-4 gap-y-4 lg:flex-row'
				{...props}
			>
				<PaginationResult
					className='order-2 flex w-full justify-center lg:order-1'
					from={from}
					to={to}
					total={total}
				/>

				<PaginationNav className='order-1 flex w-full justify-center lg:order-2'>
					<PaginationList>
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
								</Link>
							</PaginationButton>
						</PaginationItem>
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
								</Link>
							</PaginationButton>
						</PaginationItem>
						{links.slice(1, links.length - 1).map((link, index) => {
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
								</Link>
							</PaginationButton>
						</PaginationItem>
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
								</Link>
							</PaginationButton>
						</PaginationItem>
					</PaginationList>
				</PaginationNav>

				{onPageSizeChange ? (
					<PaginationSelect
						className='order-3 flex w-full justify-center lg:order-3'
						pageSize={pageSize}
						onPageSizeChange={onPageSizeChange}
						options={options}
					/>
				) : null}
			</div>
		);
	}
);

export default Pagination;
