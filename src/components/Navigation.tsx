import { Settings, Menu, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SettingsDialog } from "./SettingsDialog";
import { useState } from "react";

export const Navigation = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex space-x-1">
                <NavigationMenuItem>
                  <a 
                    href="/" 
                    className={navigationMenuTriggerStyle() + " text-primary-purple transition-all duration-200 hover:bg-primary-purple/10"}
                  >
                    Home
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className={navigationMenuTriggerStyle() + " text-primary-purple transition-all duration-200 hover:bg-primary-purple/10"}>
                      Solutions
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <a href="/templates">Templates</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="/integrations">Integrations</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="/api">API</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className={navigationMenuTriggerStyle() + " text-primary-purple transition-all duration-200 hover:bg-primary-purple/10"}>
                      Resources
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <a href="/docs">Documentation</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="/blog">Blog</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="/support">Support</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a 
                    href="/pricing" 
                    className={navigationMenuTriggerStyle() + " text-primary-purple transition-all duration-200 hover:bg-primary-purple/10"}
                  >
                    Pricing
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setShowSettings(true)}
              className="text-primary-purple transition-all duration-200 hover:bg-primary-purple/10"
            >
              <Settings className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="hidden md:flex items-center space-x-2 text-primary-purple border-primary-purple hover:bg-primary-purple/10"
              onClick={() => window.location.href = '/login'}
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-in slide-in-from-top">
            <nav className="space-y-2">
              <a href="/" className="block px-4 py-2 hover:bg-primary-purple/10 text-primary-purple rounded-md">Home</a>
              <a href="/templates" className="block px-4 py-2 hover:bg-primary-purple/10 text-primary-purple rounded-md">Templates</a>
              <a href="/integrations" className="block px-4 py-2 hover:bg-primary-purple/10 text-primary-purple rounded-md">Integrations</a>
              <a href="/docs" className="block px-4 py-2 hover:bg-primary-purple/10 text-primary-purple rounded-md">Documentation</a>
              <a href="/pricing" className="block px-4 py-2 hover:bg-primary-purple/10 text-primary-purple rounded-md">Pricing</a>
              <a href="/login" className="block px-4 py-2 hover:bg-primary-purple/10 text-primary-purple rounded-md">Login</a>
            </nav>
          </div>
        )}
      </div>
      <SettingsDialog open={showSettings} onOpenChange={setShowSettings} />
    </div>
  );
};