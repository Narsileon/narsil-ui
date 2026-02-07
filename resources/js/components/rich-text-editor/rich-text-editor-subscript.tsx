import { Icon } from "@narsil-ui/components/icon";
import { Toggle } from "@narsil-ui/components/toggle";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor, useEditorState } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorSubscriptProps = ComponentProps<typeof Toggle> & {
  editor: Editor;
};

function RichTextEditorSubscript({ editor, ...props }: RichTextEditorSubscriptProps) {
  const { trans } = useTranslator();

  const { canSubscript, isSubscript } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        canSubscript: ctx.editor.can().chain().focus().toggleSubscript().run(),
        isSubscript: ctx.editor.isActive("subscript"),
      };
    },
  });

  const label = trans("rich-text-editor.subscript", { fallback: "Subscript" });

  return (
    <Tooltip tooltip={label}>
      <Toggle
        aria-label={label}
        disabled={!canSubscript}
        pressed={isSubscript}
        size="icon"
        onClick={() => {
          editor.chain().focus().unsetSuperscript().run();
          editor.chain().focus().toggleSubscript().run();
        }}
        {...props}
      >
        <Icon name="subscript" />
      </Toggle>
    </Tooltip>
  );
}

export default RichTextEditorSubscript;
