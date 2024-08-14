import * as React from "react";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";

export interface PaginationButtonProps extends ButtonProps {}

const PaginationButton = React.forwardRef<HTMLButtonElement, PaginationButtonProps>(({ isActive, ...props }, ref) => (
	<Button
		ref={ref}
		aria-current={isActive ? "page" : undefined}
		asChild={true}
		isActive={isActive}
		size='icon'
		variant={isActive ? "outline" : "ghost"}
		{...props}
	/>
));

export default PaginationButton;
