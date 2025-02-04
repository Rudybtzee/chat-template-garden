import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-md border-t border-gray-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <p className="text-sm text-muted-foreground/80 font-medium">
            © {new Date().getFullYear()} AI Chatbot. All rights reserved.
          </p>
          <div className="flex items-center space-x-1.5">
            <span className="text-sm text-muted-foreground/80 font-medium">Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-sm text-muted-foreground/80 font-medium">by Lovable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};