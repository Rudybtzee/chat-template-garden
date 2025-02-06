import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { SettingsContent } from "./settings/SettingsContent";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SettingsDialog = ({ open, onOpenChange }: SettingsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white/90 backdrop-blur-md border-gray-100/20 max-w-2xl">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-semibold">Settings</DialogTitle>
          <DialogDescription className="text-muted-foreground/80">
            Configure your chatbot preferences and profile settings.
          </DialogDescription>
        </DialogHeader>
        
        <SettingsContent />
      </DialogContent>
    </Dialog>
  );
};