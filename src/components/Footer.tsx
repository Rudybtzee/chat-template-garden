import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 glass-panel py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Chatbot. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Lovable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};