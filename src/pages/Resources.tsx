import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Video } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-white to-neutral-softGray py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to get started and make the most of our AI chatbot platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Card key={resource.title} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <resource.icon className="h-8 w-8 text-primary-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Documentation Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Documentation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {documentation.map((doc) => (
              <Card key={doc.title} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                  <p className="text-muted-foreground mb-4">{doc.description}</p>
                  <Button variant="outline" className="w-full">View Documentation</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const resources = [
  {
    icon: BookOpen,
    title: "Getting Started Guide",
    description: "Learn the basics and set up your first AI chatbot in minutes."
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch step-by-step tutorials on how to use all our features."
  },
  {
    icon: FileText,
    title: "API Documentation",
    description: "Detailed API documentation for developers and integrations."
  }
];

const documentation = [
  {
    title: "Integration Guide",
    description: "Learn how to integrate our chatbot with your existing systems."
  },
  {
    title: "Template Customization",
    description: "Detailed guide on customizing templates and creating new ones."
  },
  {
    title: "API Reference",
    description: "Complete API documentation with examples and use cases."
  },
  {
    title: "Best Practices",
    description: "Tips and tricks for getting the most out of your chatbot."
  }
];

export default Resources;