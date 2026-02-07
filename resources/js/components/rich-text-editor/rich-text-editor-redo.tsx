import { Button } from "@narsil-ui/components/button";
import { Icon } from "@narsil-ui/components/icon";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor, useEditorState } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorRedoProps = ComponentProps<typeof Button> & {
  editor: Editor;
};

function RichTextEditorRedo({ editor, ...props }: RichTextEditorRedoProps) {
  const { trans } = useTranslator();

  const { canRedo } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        canRedo: ctx.editor.can().chain().focus().redo().run(),
      };
    },
  });

  const label = trans("rich-text-editor.redo", { fallback: "Redo" });

  return (
    <Tooltip tooltip={label}>
      <Button
        aria-label={label}
        disabled={!canRedo}
        size="icon"
        variant="ghost"
        onClick={() => editor.chain().focus().redo().run()}
        {...props}
      >
        <Icon name="redo" />
      </Button>
    </Tooltip>
  );
}

export default RichTextEditorRedo;
