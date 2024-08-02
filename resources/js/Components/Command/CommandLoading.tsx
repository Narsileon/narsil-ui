import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

const CommandLoading = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Loading>, CommandLoadingProps>(
	(props, ref) => (
		<CommandPrimitive.Loading
			ref={ref}
			className='py-6 text-center text-sm'
			{...props}
		/>
	)
);

export default CommandLoading;
