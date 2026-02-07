import { Icon } from "@narsil-ui/components/icon";
import { Toggle } from "@narsil-ui/components/toggle";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Editor, useEditorState } from "@tiptap/react";
import { type ComponentProps } from "react";

type RichTextEditorHeadingProps = ComponentProps<typeof Toggle> & {
  editor: Editor;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

function RichTextEditorHeading({ editor, level, ...props }: RichTextEditorHeadingProps) {
  const { trans } = useTranslator();

  const { isHeading } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isHeading: ctx.editor.isActive("heading", { level: level }),
      };
    },
  });

  const label = trans(`rich-text-editor.heading_${level}`, { fallback: `Heading ${level}` });

  return (
    <Tooltip tooltip={label}>
      <Toggle
        aria-label={label}
        pressed={isHeading}
        size="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: level }).run()}
        {...props}
      >
        <Icon className="stroke-foreground" name={`heading-${level}`} />
      </Toggle>
    </Tooltip>
  );
}

export default RichTextEditorHeading;
