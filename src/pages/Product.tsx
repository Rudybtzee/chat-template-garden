import { Button } from "@/components/ui/button";
import { IntegrationSection } from "@/components/landing/IntegrationSection";
import { PricingSection } from "@/components/landing/PricingSection";

const Product = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-white to-neutral-softGray">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-warm bg-clip-text text-transparent">
              Build Powerful AI Chatbots
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create, customize, and deploy AI chatbots for your business in minutes.
            </p>
            <Button size="lg" className="mb-12">Start Building</Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 rounded-xl bg-neutral-softGray/50 backdrop-blur-sm hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IntegrationSection />
      <PricingSection />
    </div>
  );
};

const features = [
  {
    title: "50+ Pre-built Templates",
    description: "Choose from our extensive library of industry-specific templates to get started quickly."
  },
  {
    title: "Custom Branding",
    description: "Customize colors, styles, and appearance to match your brand identity perfectly."
  },
  {
    title: "Multi-platform Integration",
    description: "Deploy your chatbot across multiple platforms including web, WhatsApp, and Facebook Messenger."
  },
  {
    title: "Advanced AI Models",
    description: "Powered by cutting-edge AI models from Gemini, DeepSeek, and Hugging Face."
  },
  {
    title: "Analytics Dashboard",
    description: "Track performance, user interactions, and gather valuable insights."
  },
  {
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team."
  }
];

export default Product;