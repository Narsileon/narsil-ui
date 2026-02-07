import { Icon } from "@narsil-ui/components/icon";
import { Toggle } from "@narsil-ui/components/toggle";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor, useEditorState } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorOrderedListProps = ComponentProps<typeof Toggle> & {
  editor: Editor;
};

function RichTextEditorOrderedList({ editor, ...props }: RichTextEditorOrderedListProps) {
  const { trans } = useTranslator();

  const { isOrderedList } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isOrderedList: ctx.editor.isActive("orderedList"),
      };
    },
  });

  const label = trans("rich-text-editor.ordered_list", { fallback: "Ordered list" });

  return (
    <Tooltip tooltip={label}>
      <Toggle
        aria-label={label}
        pressed={isOrderedList}
        size="icon"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        {...props}
      >
        <Icon name="list-ordered" />
      </Toggle>
    </Tooltip>
  );
}

export default RichTextEditorOrderedList;
