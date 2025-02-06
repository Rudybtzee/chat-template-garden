import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Loader2 } from "lucide-react";

export const PasswordRecovery = ({ onBack }: { onBack: () => void }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth`,
      });
      if (error) throw error;

      toast({
        title: "Success!",
        description: "Check your email for password reset instructions.",
      });
      onBack();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRecovery} className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Send Reset Instructions"
        )}
      </Button>

      <div className="text-center">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-primary-purple hover:underline"
        >
          Back to sign in
        </button>
      </div>
    </form>
  );
};