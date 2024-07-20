import { Button } from '@narsil-ui/Components';
import { ButtonProps } from '@narsil-ui/Components/Button/Button';
import * as React from 'react';

const PaginationButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ isActive, ...props }, ref) => (
	<Button
		ref={ref}
		aria-current={isActive ? 'page' : undefined}
		asChild={true}
		isActive={isActive}
		size='icon'
		variant={isActive ? 'outline' : 'ghost'}
		{...props}
	/>
));

export default PaginationButton;
