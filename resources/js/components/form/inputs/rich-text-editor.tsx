import {
  RichTextEditorContent,
  RichTextEditorProvider,
  RichTextEditorRoot,
  RichTextEditorToolbar,
} from "@narsil-ui/components/rich-text-editor";
import { FieldProps } from ".";

function RichTextEditor({ id, input, required, value, setValue }: FieldProps) {
  const { modules = [], ...props } = input;

  return (
    <RichTextEditorRoot {...props}>
      <RichTextEditorProvider value={value} onChange={setValue}>
        {toolbar ? <RichTextEditorToolbar modules={modules} /> : null}
        <RichTextEditorContent id={id} required={required} />
      </RichTextEditorProvider>
    </RichTextEditorRoot>
  );
}

export default RichTextEditor;
