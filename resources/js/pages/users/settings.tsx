import { Icon } from "@narsil-ui/components/icon";
import { Separator } from "@narsil-ui/components/separator";
import { TabsList, TabsPanel, TabsRoot, TabsTab } from "@narsil-ui/components/tabs";
import { useTranslator } from "@narsil-ui/components/translator";
import { AuthData, FormData } from "@narsil-ui/types";
import UserConfiguration from "./configuration";
import UserProfile from "./profile";
import UserSessions from "./sessions";
import UserTwoFactor from "./two-factor";

type UserSettingsProps = {
  auth: AuthData;
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

  return (
    <TabsRoot defaultValue={auth ? "account" : "configuration"} orientation="vertical">
      <TabsList className="border-b px-4 md:p-0">
        {auth ? (
          <TabsTab value="account">
            <Icon name="user-edit" />
            {trans("ui.account")}
          </TabsTab>
        ) : null}
        <TabsTab value="configuration">
          <Icon name="settings" />
          {trans("ui.personalization")}
        </TabsTab>
        {auth ? (
          <TabsTab value="security">
            <Icon name="shield" />
            {trans("ui.security")}
          </TabsTab>
        ) : null}
      </TabsList>
      {auth ? (
        <TabsPanel value="account">
          <UserProfile profileForm={profileForm} updatePasswordForm={updatePasswordForm} />
        </TabsPanel>
      ) : null}
      <TabsPanel value="configuration">
        <UserConfiguration userConfigurationForm={userConfigurationForm} />
      </TabsPanel>
      {auth ? (
        <TabsPanel value="security">
          <UserTwoFactor twoFactorForm={twoFactorForm} />
          <Separator />
          <UserSessions />
        </TabsPanel>
      ) : null}
    </TabsRoot>
  );
}

export default UserSettings;
