import { Icon } from "@narsil-ui/components/icon";
import { Separator } from "@narsil-ui/components/separator";
import { TabsList, TabsPanel, TabsRoot, TabsTab } from "@narsil-ui/components/tabs";
import { useTranslator } from "@narsil-ui/components/translator";
import type { FormData, UserData } from "@narsil-ui/types";
import UserConfiguration from "./configuration";
import UserPassword from "./password";
import UserProfile from "./profile";
import UserSessions from "./sessions";
import UserTwoFactor from "./two-factor";

type UserSettingsProps = {
  auth: UserData;
  profileForm: FormData;
  twoFactorForm: FormData;
  updatePasswordForm: FormData;
  userConfigurationForm: FormData;
};

function UserSettings({
  auth,
  profileForm,
  twoFactorForm,
  updatePasswordForm,
  userConfigurationForm,
}: UserSettingsProps) {
  const { trans } = useTranslator();

  const accoutLabel = trans("ui.account");
  const personalizationLabel = trans("ui.personalization");
  const securityLabel = trans("ui.security");

  return (
    <TabsRoot defaultValue={auth ? "account" : "configuration"} orientation="vertical">
      <TabsList className="border-b px-4 md:p-0">
        {auth ? (
          <TabsTab value="account">
            <Icon name="user-edit" />
            {accoutLabel}
          </TabsTab>
        ) : null}
        <TabsTab value="configuration">
          <Icon name="settings" />
          {personalizationLabel}
        </TabsTab>
        {auth ? (
          <TabsTab value="security">
            <Icon name="shield" />
            {securityLabel}
          </TabsTab>
        ) : null}
      </TabsList>
      {auth ? (
        <TabsPanel value="account">
          <UserProfile auth={auth} form={profileForm} />
          <Separator />
          <UserPassword form={updatePasswordForm} />
        </TabsPanel>
      ) : null}
      <TabsPanel value="configuration">
        <UserConfiguration form={userConfigurationForm} />
      </TabsPanel>
      {auth ? (
        <TabsPanel value="security">
          <UserTwoFactor auth={auth} form={twoFactorForm} />
          <Separator />
          <UserSessions />
        </TabsPanel>
      ) : null}
    </TabsRoot>
  );
}

export default UserSettings;
