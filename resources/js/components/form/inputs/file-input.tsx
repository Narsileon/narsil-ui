import { FileUpload } from "@narsil-ui/components/file";
import { Icon } from "@narsil-ui/components/icon";
import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupRoot,
  InputGroupText,
} from "@narsil-ui/components/input-group";
import { cn } from "@narsil-ui/lib/utils";
import { useEffect, useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { FieldProps } from ".";

function FileInput({ icon, id, input, readOnly, required, value, setValue }: FieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!value) {
      setPreview(null);

      return;
    }

    if (typeof value === "string") {
      setPreview(value);

      return;
    }

    if (value instanceof File && value.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(value);

      setPreview(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
        setPreview(null);
      };
    }

    setPreview(null);
  }, [value]);

  function clearFile(event: React.MouseEvent) {
    event.stopPropagation();

    setValue(undefined);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    setPreview(null);
  }

  function handleFile(file?: File) {
    if (!file) {
      return;
    }

    setValue(file);

    if (inputRef.current) {
      const dataTransfer = new DataTransfer();

      dataTransfer.items.add(file);

      inputRef.current.files = dataTransfer.files;
    }
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length) {
      handleFile(event.target.files[0]);
    }
  }

  function onDragEnter() {
    setDragging(true);
  }

  function onDragLeave() {
    setDragging(false);
  }

  function onDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    setDragging(false);

    const file = event.dataTransfer.files?.[0];

    handleFile(file);
  }

  return (
    <InputGroupRoot
      className={cn(
        "focus-within:border-primary focus-within:ring-primary",
        dragging && "border-primary bg-accent ring-primary",
        (!value || preview) && "h-fit",
      )}
      onClick={() => inputRef.current?.click()}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          inputRef.current?.click();
        }
      }}
      tabIndex={0}
    >
      {value ? (
        <>
          {preview ? (
            <InputGroupAddon>
              <img className="size-36 rounded-md object-cover" alt="preview" src={preview} />
            </InputGroupAddon>
          ) : (
            <InputGroupAddon className="grow justify-start" align="inline-start">
              <InputGroupText>{value instanceof File ? value.name : value}</InputGroupText>
            </InputGroupAddon>
          )}
          {!readOnly && !required && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-sm" onClick={clearFile}>
                <Icon name="x" />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </>
      ) : (
        <FileUpload icon={icon as string} />
      )}
      <InputGroupInput
        {...input}
        ref={inputRef}
        id={id}
        name={id}
        type="file"
        hidden={true}
        required={required}
        onChange={onChange}
      />
    </InputGroupRoot>
  );
}

export default FileInput;
