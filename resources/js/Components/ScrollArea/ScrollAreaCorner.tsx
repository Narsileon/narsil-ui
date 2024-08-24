import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export interface ScrollAreaCornerProps extends React.ComponentProps<typeof ScrollAreaPrimitive.Corner> {}

const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

export default ScrollAreaCorner;
