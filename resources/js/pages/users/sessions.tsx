import { Link } from "@inertiajs/react";
import { Button } from "@narsil-ui/components/button";
import { DialogClose } from "@narsil-ui/components/dialog";
import { Heading } from "@narsil-ui/components/heading";
import { SectionContent, SectionHeader, SectionRoot } from "@narsil-ui/components/section";
import { Separator } from "@narsil-ui/components/separator";
import { useTranslator } from "@narsil-ui/components/translator";
import { route } from "ziggy-js";

function UserSessions() {
  const { trans } = useTranslator();

  return (
    <SectionRoot>
      <SectionHeader className="border-b">
        <Heading level="h2">{trans("ui.sessions")}</Heading>
      </SectionHeader>
      <SectionContent className="grid gap-4">
        <p>{trans("sessions.sign_out_current.description")}</p>
        <DialogClose
          render={
            <Button variant="outline">
              <Link
                href={route("sessions.delete", {
                  type: "current",
                })}
                method="delete"
              >
                {trans("sessions.sign_out_current.label")}
              </Link>
            </Button>
          }
        />
        <Separator />
        <p>{trans("sessions.sign_out_elsewhere.description")}</p>
        <Button variant="outline">
          <Link
            href={route("sessions.delete", {
              type: "others",
            })}
            method="delete"
            preserveState={true}
          >
            {trans("sessions.sign_out_elsewhere.label")}
          </Link>
        </Button>
        <Separator />
        <p>{trans("sessions.sign_out_everywhere.description")}</p>
        <DialogClose
          render={
            <Button variant="outline">
              <Link
                href={route("sessions.delete", {
                  type: "all",
                })}
                method="delete"
                preserveState={true}
              >
                {trans("sessions.sign_out_everywhere.label")}
              </Link>
            </Button>
          }
        />
      </SectionContent>
    </SectionRoot>
  );
}

export default UserSessions;
