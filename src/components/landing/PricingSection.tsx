import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses",
    features: [
      "5 AI Templates",
      "Basic Customization",
      "Email Support",
      "1,000 Messages/month",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing companies",
    features: [
      "25 AI Templates",
      "Advanced Customization",
      "Priority Support",
      "10,000 Messages/month",
      "Analytics Dashboard",
      "Multiple Languages",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "All Templates",
      "Full Customization",
      "24/7 Support",
      "Unlimited Messages",
      "Advanced Analytics",
      "Custom Integrations",
      "API Access",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-neutral-softGray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Choose the perfect plan for your business
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-4xl font-bold mt-4">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg font-normal">/month</span>}
                </p>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary-purple" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.name === "Professional" ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};