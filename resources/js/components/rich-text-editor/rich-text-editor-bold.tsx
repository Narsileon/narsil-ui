import { Icon } from "@narsil-ui/components/icon";
import { Toggle } from "@narsil-ui/components/toggle";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor, useEditorState } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorBoldProps = ComponentProps<typeof Toggle> & {
  editor: Editor;
};

function RichTextEditorBold({ editor, ...props }: RichTextEditorBoldProps) {
  const { trans } = useTranslator();

  const { canBold, isBold } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        canBold: ctx.editor.can().chain().focus().toggleBold().run(),
        isBold: ctx.editor.isActive("bold"),
      };
    },
  });

  const label = trans("rich-text-editor.bold", { fallback: "Bold" });

  return (
    <Tooltip tooltip={label}>
      <Toggle
        aria-label={label}
        disabled={!canBold}
        pressed={isBold}
        size="icon"
        onClick={() => editor.chain().focus().toggleBold().run()}
        {...props}
      >
        <Icon name="bold" />
      </Toggle>
    </Tooltip>
  );
}

export default RichTextEditorBold;
