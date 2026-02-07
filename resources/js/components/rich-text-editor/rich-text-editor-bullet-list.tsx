import { Icon } from "@narsil-ui/components/icon";
import { Toggle } from "@narsil-ui/components/toggle";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor, useEditorState } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorBulletListProps = ComponentProps<typeof Toggle> & {
  editor: Editor;
};

function RichTextEditorBulletList({ editor, ...props }: RichTextEditorBulletListProps) {
  const { trans } = useTranslator();

  const { isBulletList } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBulletList: ctx.editor.isActive("bulletList"),
      };
    },
  });

  const label = trans("rich-text-editor.bullet_list", { fallback: "Bullet list" });

  return (
    <Tooltip tooltip={label}>
      <Toggle
        aria-label={label}
        pressed={isBulletList}
        size="icon"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        {...props}
      >
        <Icon name="list-bullet" />
      </Toggle>
    </Tooltip>
  );
}

export default RichTextEditorBulletList;
