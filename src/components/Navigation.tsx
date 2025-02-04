import { Settings } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { SettingsDialog } from "./SettingsDialog";
import { useState } from "react";

export const Navigation = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <a 
                    href="/" 
                    className={navigationMenuTriggerStyle() + " transition-all duration-200 hover:bg-primary/10"}
                  >
                    Home
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a 
                    href="/templates" 
                    className={navigationMenuTriggerStyle() + " transition-all duration-200 hover:bg-primary/10"}
                  >
                    Templates
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setShowSettings(true)}
            className="transition-all duration-200 hover:bg-primary/10"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <SettingsDialog open={showSettings} onOpenChange={setShowSettings} />
    </div>
  );
};