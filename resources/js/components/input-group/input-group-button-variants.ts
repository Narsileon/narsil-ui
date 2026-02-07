import { cva } from "class-variance-authority";

const inputGroupButtonVariants = cva("flex items-center gap-2 text-sm shadow-none", {
  variants: {
    size: {
      xs: "h-7 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-5",
      sm: "",
      "icon-xs": "size-5 rounded-full p-1 has-[>svg]:p-0 [&>svg]:size-3",
      "icon-sm": "size-7 rounded-full p-1 has-[>svg]:p-0 [&>svg]:size-5",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

export default inputGroupButtonVariants;
