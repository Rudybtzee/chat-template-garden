import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";

export const IntegrationSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Easy Integration</h2>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Add our chatbot to your website in minutes
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Simple Script Tag</h3>
            <CardContent className="p-4 bg-neutral-softGray rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>{`<script src="https://api.aichat.com/v1/widget.js"></script>
<script>
  window.AiChat.init({
    apiKey: 'YOUR_API_KEY',
    template: 'customer-service'
  });
</script>`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">React Component</h3>
            <CardContent className="p-4 bg-neutral-softGray rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>{`import { AiChatbot } from '@aichat/react';

function App() {
  return (
    <AiChatbot 
      apiKey="YOUR_API_KEY"
      template="customer-service"
    />
  );
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need help with integration? Check our detailed documentation or contact our support team.
          </p>
        </div>
      </div>
    </section>
  );
};