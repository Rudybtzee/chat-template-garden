import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { AuthForm } from "@/components/auth/AuthForm";
import { PasswordRecovery } from "@/components/auth/PasswordRecovery";

const Auth = () => {
  const [isRecovery, setIsRecovery] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Handle redirect from magic link or password recovery
    const handleAuthRedirect = async () => {
      const hash = window.location.hash;
      if (hash && hash.includes('access_token')) {
        try {
          const { data, error } = await supabase.auth.getSession();
          if (error) throw error;
          if (data?.session) {
            // Check if user has admin role
            const { data: roleData, error: roleError } = await supabase
              .from('user_roles')
              .select('role')
              .eq('user_id', data.session.user.id)
              .single();

            if (roleError) throw roleError;
            
            // Redirect based on role
            if (roleData?.role === 'admin') {
              navigate("/admin");
            } else {
              navigate("/templates");
            }
          }
        } catch (error: any) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        }
      }
    };

    handleAuthRedirect();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {isRecovery 
              ? "Reset Password"
              : "Welcome Back"}
          </h1>
          <p className="text-muted-foreground">
            {isRecovery
              ? "Enter your email to receive reset instructions"
              : "Sign in to your account to continue"}
          </p>
        </div>

        {isRecovery ? (
          <PasswordRecovery onBack={() => setIsRecovery(false)} />
        ) : (
          <>
            <AuthForm />
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsRecovery(true)}
                className="text-sm text-primary-purple hover:underline"
              >
                Forgot your password?
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;