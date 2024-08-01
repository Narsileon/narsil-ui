interface ScrollAreaProps
	extends React.ComponentProps<typeof import("@radix-ui/react-scroll-area").Root>,
		Pick<
			React.ComponentPropsWithoutRef<typeof import("@radix-ui/react-scroll-area").ScrollAreaScrollbar>,
			"orientation"
		> {}
