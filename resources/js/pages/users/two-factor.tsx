import { Toast } from "@base-ui/react/toast";
import { router } from "@inertiajs/react";
import { Label } from "@narsil-ui/blocks/label";
import { Tooltip } from "@narsil-ui/blocks/tooltip";
import { Button } from "@narsil-ui/components/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from "@narsil-ui/components/card";
import { FormElement, FormProvider, FormRoot } from "@narsil-ui/components/form";
import { Heading } from "@narsil-ui/components/heading";
import { Icon } from "@narsil-ui/components/icon";
import { SectionContent, SectionHeader, SectionRoot } from "@narsil-ui/components/section";
import { Switch } from "@narsil-ui/components/switch";
import { useTranslator } from "@narsil-ui/components/translator";
import type { FormData, UserData } from "@narsil-ui/types";
import { Fragment, useState } from "react";
import { route } from "ziggy-js";

type UserTwoFactorProps = {
  auth: UserData;
  form: FormData;
};

function UserTwoFactor({ auth, form }: UserTwoFactorProps) {
  const { add } = Toast.useToastManager();
  const { trans } = useTranslator();

  const [active, setActive] = useState(auth.two_factor_confirmed_at !== null);
  const [enabled, setEnabled] = useState(active);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [recoveryCodes, setRecoveryCodes] = useState<string[] | null>(null);

  async function getQrCode(): Promise<void> {
    try {
      const response = await fetch(route("two-factor.qr-code"));

      const data = await response.json();

      setQrCode(data.svg);
    } catch (error) {
      console.error("[Two Factor] Error fetching QR code:", error);
    }
  }

  async function getRecoveryCodes(): Promise<void> {
    try {
      const response = await fetch(route("two-factor.recovery-codes"));

      const data = await response.json();

      setRecoveryCodes(data);
    } catch (error) {
      console.error("[Two Factor] Error fetching recovery codes:", error);
    }
  }

  async function toggleEnabled() {
    if (enabled) {
      router.delete(route("two-factor.disable"), {
        preserveState: true,
        onSuccess: () => {
          setActive(false);
          setEnabled(false);
        },
        onError: () => {
          setEnabled(true);
        },
      });
    } else {
      router.post(route("two-factor.enable"), undefined, {
        onSuccess: async () => {
          await getQrCode();
          await getRecoveryCodes();

          setEnabled(true);
        },

        onError: () => {
          setEnabled(false);
        },
      });
    }
  }

  const recoveryCodesLabel = trans("ui.recovery_codes");
  const securityLabel = trans("ui.security");

  return (
    <SectionRoot>
      <SectionHeader className="border-b">
        <Heading level="h2">{securityLabel}</Heading>
      </SectionHeader>
      <SectionContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <Label>{trans("ui.two_factor")}</Label>
            <Switch checked={enabled} onCheckedChange={toggleEnabled} />
          </div>
          {!active && enabled && qrCode ? (
            <FormProvider
              id={form.id}
              action={form.action}
              method={form.method}
              steps={form.steps}
              render={({ setError }) => {
                return (
                  <FormRoot
                    options={{
                      onSuccess: () => {
                        setActive(true);
                      },
                      onError() {
                        setError?.("code", trans("validation.custom.code.invalid"));
                      },
                    }}
                  >
                    <CardRoot>
                      <CardContent className="grid-cols-12">
                        {form.steps.map((step, index) => {
                          return (
                            <Fragment key={index}>
                              {step.elements?.map((element, index) => {
                                return <FormElement {...element} key={index} />;
                              })}
                            </Fragment>
                          );
                        })}
                        <div
                          className="col-span-full max-h-48 max-w-48 place-self-center [&>svg]:h-auto [&>svg]:w-full"
                          dangerouslySetInnerHTML={{
                            __html: qrCode,
                          }}
                        />
                      </CardContent>
                      <CardFooter className="justify-end border-t">
                        <Button form={form.id} type="submit">
                          {form.submitLabel}
                        </Button>
                      </CardFooter>
                    </CardRoot>
                  </FormRoot>
                );
              }}
            />
          ) : null}
          {!active && enabled && recoveryCodes ? (
            <CardRoot>
              <CardHeader className="grid-cols-2 items-center border-b">
                <CardTitle>{recoveryCodesLabel}</CardTitle>
                <Tooltip tooltip={trans("ui.copy_clipboard")}>
                  <Button
                    aria-label={trans("ui.copy_clipboard")}
                    className="place-self-end"
                    size="icon"
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(recoveryCodes.join("\n"));

                      add({
                        description: trans("two-factor.recovery_codes_copied"),
                      });
                    }}
                  >
                    <Icon name="copy" />
                  </Button>
                </Tooltip>
              </CardHeader>
              <CardContent className="gap-4">
                <p>{trans("descriptions.users.recovery_codes")}</p>
                <ul className="ml-6 list-disc">
                  {recoveryCodes?.map((recoveryCode, index) => {
                    return <li key={index}>{recoveryCode}</li>;
                  })}
                </ul>
              </CardContent>
            </CardRoot>
          ) : null}
        </div>
      </SectionContent>
    </SectionRoot>
  );
}

export default UserTwoFactor;
