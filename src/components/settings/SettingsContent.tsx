import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { APIKeysTab } from "./APIKeysTab";
import { ProfileTab } from "./ProfileTab";
import { CompanyTab } from "./CompanyTab";
import { PreferencesTab } from "./PreferencesTab";
import { useSettingsSave } from "./hooks/useSettingsSave";

export const SettingsContent = () => {
  const { handleSaveSettings, isSaving } = useSettingsSave();

  return (
    <>
      <Tabs defaultValue="api" className="w-full">
        <TabsList className="grid grid-cols-4 gap-4 mb-4">
          <TabsTrigger value="api">API Keys</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="api">
          <APIKeysTab />
        </TabsContent>

        <TabsContent value="profile">
          <ProfileTab />
        </TabsContent>

        <TabsContent value="company">
          <CompanyTab />
        </TabsContent>

        <TabsContent value="preferences">
          <PreferencesTab />
        </TabsContent>
      </Tabs>

      <Button 
        onClick={handleSaveSettings} 
        className="w-full mt-4"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save Settings"}
      </Button>
    </>
  );
};