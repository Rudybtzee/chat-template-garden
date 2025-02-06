import { Card, CardContent } from "@/components/ui/card";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { Building2, Users2, Target, Trophy } from "lucide-react";

const Company = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-white to-neutral-softGray">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make AI accessible and useful for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto text-primary-purple mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

const stats = [
  {
    icon: Building2,
    value: "5+",
    label: "Years Experience"
  },
  {
    icon: Users2,
    value: "10K+",
    label: "Happy Customers"
  },
  {
    icon: Target,
    value: "50+",
    label: "Templates"
  },
  {
    icon: Trophy,
    value: "99%",
    label: "Satisfaction Rate"
  }
];

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with AI technology."
  },
  {
    title: "Customer Success",
    description: "Your success is our success. We're committed to helping you achieve your goals."
  },
  {
    title: "Transparency",
    description: "We believe in being open and honest about our technology and practices."
  },
  {
    title: "Quality",
    description: "We maintain the highest standards in our products and services."
  },
  {
    title: "Security",
    description: "Your data security and privacy are our top priorities."
  },
  {
    title: "Community",
    description: "We build and support a strong community of users and developers."
  }
];

export default Company;