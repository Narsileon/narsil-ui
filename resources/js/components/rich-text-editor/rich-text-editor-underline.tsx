import { Tooltip } from "@narsil-ui/blocks/tooltip";
import { Icon } from "@narsil-ui/components/icon";
import { Toggle } from "@narsil-ui/components/toggle";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor, useEditorState } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorUnderlineProps = ComponentProps<typeof Toggle> & {
  editor: Editor;
};

function RichTextEditorUnderline({ editor, ...props }: RichTextEditorUnderlineProps) {
  const { trans } = useTranslator();

  const { canUnderline, isUnderline } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        canUnderline: ctx.editor.can().chain().focus().toggleUnderline().run(),
        isUnderline: ctx.editor.isActive("underline"),
      };
    },
  });

  const label = trans("rich-text-editor.underline");

  return (
    <Tooltip tooltip={label}>
      <Toggle
        aria-label={label}
        disabled={!canUnderline}
        pressed={isUnderline}
        size="icon"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        {...props}
      >
        <Icon name="underline" />
      </Toggle>
    </Tooltip>
  );
}

export default RichTextEditorUnderline;
