import FileBrowse from "@narsil-ui/components/file/file-browse";
import { Icon } from "@narsil-ui/components/icon";
import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupRoot,
} from "@narsil-ui/components/input-group";
import { FieldProps } from ".";

function FileInput({ icon, id, input, readOnly, required, value, setValue }: FieldProps) {
  return (
    <InputGroupRoot className="h-fit min-h-13 border-dashed">
      {value ? (
        <>
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-sm">Browser</InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-sm">Create</InputGroupButton>
          </InputGroupAddon>
          {!readOnly && !required && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-sm">
                <Icon name="x" />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </>
      ) : (
        <FileBrowse />
      )}
    </InputGroupRoot>
  );
}

export default FileInput;
