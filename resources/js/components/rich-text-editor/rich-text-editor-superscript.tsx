import { Icon } from "@narsil-ui/components/icon";
import { Toggle } from "@narsil-ui/components/toggle";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor, useEditorState } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorSuperscriptProps = ComponentProps<typeof Toggle> & {
  editor: Editor;
};

function RichTextEditorSuperscript({ editor, ...props }: RichTextEditorSuperscriptProps) {
  const { trans } = useTranslator();

  const { canSuperscript, isSuperscript } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        canSuperscript: ctx.editor.can().chain().focus().toggleSuperscript().run(),
        isSuperscript: ctx.editor.isActive("superscript"),
      };
    },
  });

  const label = trans("rich-text-editor.superscript", { fallback: "Superscript" });

  return (
    <Tooltip tooltip={label}>
      <Toggle
        aria-label={label}
        disabled={!canSuperscript}
        pressed={isSuperscript}
        size="icon"
        onClick={() => {
          editor.chain().focus().unsetSubscript().run();
          editor.chain().focus().toggleSuperscript().run();
        }}
        {...props}
      >
        <Icon name="superscript" />
      </Toggle>
    </Tooltip>
  );
}

export default RichTextEditorSuperscript;
