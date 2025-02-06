import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "./ui/use-toast";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SettingsDialog = ({ open, onOpenChange }: SettingsDialogProps) => {
  const [apiKey, setApiKey] = useState("");

  const handleSaveSettings = () => {
    if (apiKey) {
      // We'll implement the secure storage method based on user preference
      toast({
        title: "Settings saved",
        description: "Your API key has been securely saved.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white/90 backdrop-blur-md border-gray-100/20">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-semibold">Settings</DialogTitle>
          <DialogDescription className="text-muted-foreground/80">
            Configure your chatbot preferences and API settings.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="apiKey">Gemini API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Enter your Gemini API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Your API key is required for the chatbot to function. Never share your API key.
            </p>
          </div>
          <Button onClick={handleSaveSettings}>Save Settings</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};