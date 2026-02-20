import { Link } from "@inertiajs/react";
import { Button } from "@narsil-ui/components/button";
import { Icon } from "@narsil-ui/components/icon";
import {
  InputGroupAddon,
  InputGroupInput,
  InputGroupRoot,
} from "@narsil-ui/components/input-group";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { useState } from "react";
import { FieldProps } from ".";

function InputPassword({ id, input, readOnly, required, value, setValue }: FieldProps) {
  const { trans } = useTranslator();

  const [show, setShow] = useState(false);

  const tooltip = show ? trans("tooltips.hide") : trans("tooltips.show");

  return (
    <InputGroupRoot className="relative">
      <InputGroupInput
        {...input}
        id={id}
        name={id}
        readOnly={readOnly}
        required={required}
        type={show ? "text" : "password"}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <InputGroupAddon align="inline-end">
        <Tooltip tooltip={tooltip}>
          <Icon
            className="cursor-pointer opacity-50 duration-300 hover:opacity-100"
            aria-label={tooltip}
            name={show ? "eye-off" : "eye"}
            onClick={() => setShow(!show)}
          />
        </Tooltip>
      </InputGroupAddon>
      {input.href ? (
        <Button
          nativeButton={false}
          size="link"
          variant="link"
          render={
            <Link className="absolute -top-8 right-0" href={input.href}>
              {trans("ui.forgot_password")}
            </Link>
          }
        ></Button>
      ) : null}
    </InputGroupRoot>
  );
}

export default InputPassword;
