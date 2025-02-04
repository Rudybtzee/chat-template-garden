import { Settings } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { SettingsDialog } from "./SettingsDialog";
import { useState } from "react";

export const Navigation = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/templates">
                    Templates
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setShowSettings(true)}>
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <SettingsDialog open={showSettings} onOpenChange={setShowSettings} />
    </div>
  );
};