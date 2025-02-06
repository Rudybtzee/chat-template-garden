import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, Shield, Code, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-white to-neutral-softGray">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-6"
          >
            Transform Your Business with AI-Powered Chat
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            30+ Professional Templates • Instant Setup • No Code Required
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/templates">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Chatbot?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-neutral-softGray/50 backdrop-blur-sm hover:shadow-lg transition-all"
              >
                <feature.icon className="h-10 w-10 text-primary-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-24 bg-gradient-cool">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            30+ Professional Templates Ready to Use
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templatePreviews.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-muted-foreground mb-4">{template.description}</p>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary-purple/10 text-primary-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-white/80">
            Join thousands of businesses already using our AI chatbot solution
          </p>
          <Link to="/templates">
            <Button size="lg" variant="secondary" className="bg-white text-primary-purple hover:bg-white/90">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: Bot,
    title: "Advanced AI Integration",
    description: "Powered by multiple AI engines including Gemini, DeepSeek, and Hugging Face for superior understanding and responses."
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Get your chatbot up and running in minutes with our pre-built professional templates."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with encrypted data storage and API key management."
  },
  {
    icon: Code,
    title: "Easy Integration",
    description: "Simple embed code to add the chatbot to any website with just a few clicks."
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Customize colors, styles, and branding to match your website perfectly."
  }
];

const templatePreviews = [
  {
    name: "Real Estate Agent",
    description: "Handle property inquiries and schedule viewings automatically.",
    tags: ["Property Listings", "Scheduling", "Lead Generation"]
  },
  {
    name: "Legal Assistant",
    description: "Provide basic legal information and document preparation guidance.",
    tags: ["Legal Info", "Documents", "Consultation"]
  },
  {
    name: "Healthcare Provider",
    description: "Manage appointments and answer common medical queries.",
    tags: ["Appointments", "FAQ", "Patient Care"]
  }
];

export default Landing;