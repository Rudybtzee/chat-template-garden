import { Heart, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-md border-t border-gray-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="/templates" className="text-sm text-muted-foreground hover:text-primary transition-colors">Templates</a></li>
              <li><a href="/integrations" className="text-sm text-muted-foreground hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="/api" className="text-sm text-muted-foreground hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground/80 font-medium order-2 md:order-1">
              © {new Date().getFullYear()} AI Chatbot. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-1.5 mb-4 md:mb-0 order-1 md:order-2">
              <span className="text-sm text-muted-foreground/80 font-medium">Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="text-sm text-muted-foreground/80 font-medium">by Lovable</span>
            </div>

            <div className="flex items-center space-x-4 order-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};