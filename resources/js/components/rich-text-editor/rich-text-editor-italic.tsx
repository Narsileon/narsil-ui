import { Icon } from "@narsil-ui/components/icon";
import { Toggle } from "@narsil-ui/components/toggle";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor, useEditorState } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorItalicProps = ComponentProps<typeof Toggle> & {
  editor: Editor;
  label?: string;
};

function RichTextEditorItalic({ editor, ...props }: RichTextEditorItalicProps) {
  const { trans } = useTranslator();

  const { canItalic, isItalic } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        canItalic: ctx.editor.can().chain().focus().toggleItalic().run(),
        isItalic: ctx.editor.isActive("italic"),
      };
    },
  });

  const label = trans("rich-text-editor.italic", { fallback: "Italic" });

  return (
    <Tooltip tooltip={label}>
      <Toggle
        aria-label={label}
        disabled={!canItalic}
        pressed={isItalic}
        size="icon"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        {...props}
      >
        <Icon name="italic" />
      </Toggle>
    </Tooltip>
  );
}

export default RichTextEditorItalic;
