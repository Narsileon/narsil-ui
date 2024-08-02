import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, CommandEmptyProps>(
	(props, ref) => (
		<CommandPrimitive.Empty
			ref={ref}
			className='py-6 text-center text-sm'
			{...props}
		/>
	)
);

export default CommandEmpty;
