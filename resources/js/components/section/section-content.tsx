import { useRender } from "@base-ui/react";

function SectionContent({ render, ...props }: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: props,
    render: render,
    state: {
      slot: "section-content",
    },
  });
}

export default SectionContent;
