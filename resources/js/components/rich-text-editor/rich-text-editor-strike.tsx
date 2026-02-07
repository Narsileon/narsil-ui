import { Icon } from "@narsil-ui/components/icon";
import { Toggle } from "@narsil-ui/components/toggle";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor, useEditorState } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorStrikeProps = ComponentProps<typeof Toggle> & {
  editor: Editor;
};

function RichTextEditorStrike({ editor, ...props }: RichTextEditorStrikeProps) {
  const { trans } = useTranslator();

  const { canStrike, isStrike } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        canStrike: ctx.editor.can().chain().focus().toggleStrike().run(),
        isStrike: ctx.editor.isActive("strike"),
      };
    },
  });

  const label = trans("rich-text-editor.strike", { fallback: "Strike" });

  return (
    <Tooltip tooltip={label}>
      <Toggle
        aria-label={label}
        disabled={!canStrike}
        pressed={isStrike}
        size="icon"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        {...props}
      >
        <Icon name="strikethrough" />
      </Toggle>
    </Tooltip>
  );
}

export default RichTextEditorStrike;
