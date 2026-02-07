import { Icon } from "@narsil-ui/components/icon";
import { Toggle } from "@narsil-ui/components/toggle";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorTextAlignProps = ComponentProps<typeof Toggle> & {
  alignment: "left" | "center" | "right" | "justify";
  editor: Editor;
  label?: string;
};

function RichTextEditorTextAlign({
  alignment,
  editor,
  label,
  ...props
}: RichTextEditorTextAlignProps) {
  const { trans } = useTranslator();

  if (!label) {
    switch (alignment) {
      case "left":
        label = trans("rich-text-editor.align_left", { fallback: "Align left" });
        break;
      case "center":
        label = trans("rich-text-editor.align_center", { fallback: "Align center" });
        break;
      case "right":
        label = trans("rich-text-editor.align_right", { fallback: "Align right" });
        break;
      case "justify":
        label = trans("rich-text-editor.justify", { fallback: "Justify" });
        break;
    }
  }

  return (
    <Tooltip tooltip={label}>
      <Toggle
        aria-label={label}
        pressed={editor.isActive({ textAlign: alignment })}
        size="icon"
        onClick={() => editor.chain().focus().setTextAlign(alignment).run()}
        {...props}
      >
        <Icon name={`align-${alignment}`} />
      </Toggle>
    </Tooltip>
  );
}

export default RichTextEditorTextAlign;
