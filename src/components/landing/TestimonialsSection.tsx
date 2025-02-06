import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content: "This AI chatbot has transformed how we handle customer inquiries. Response times are down 80% and customer satisfaction is up!",
    rating: 5,
    avatar: "/avatars/sarah.jpg"
  },
  {
    name: "Michael Chen",
    role: "E-commerce Owner",
    company: "StyleHub",
    content: "The templates are incredibly well-designed and the customization options are exactly what we needed. Worth every penny!",
    rating: 5,
    avatar: "/avatars/michael.jpg"
  },
  {
    name: "Emma Davis",
    role: "Customer Service Manager",
    company: "ServicePro",
    content: "Setup was a breeze and the AI responses are remarkably human-like. Our team loves using it!",
    rating: 5,
    avatar: "/avatars/emma.jpg"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-cool text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-xl text-white/80 text-center mb-12">
          Join thousands of satisfied businesses using our AI chatbot
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary-orange text-primary-orange" />
                  ))}
                </div>
                <p className="mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-white/80">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};