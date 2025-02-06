import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Legal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-white to-neutral-softGray py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Legal Information</h1>

          <div className="space-y-8">
            {/* Terms of Service */}
            <section className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Terms of Service</h2>
              <Accordion type="single" collapsible className="w-full">
                {termsOfService.map((term, index) => (
                  <AccordionItem key={index} value={`term-${index}`}>
                    <AccordionTrigger>{term.title}</AccordionTrigger>
                    <AccordionContent>{term.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Privacy Policy */}
            <section className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Privacy Policy</h2>
              <Accordion type="single" collapsible className="w-full">
                {privacyPolicy.map((policy, index) => (
                  <AccordionItem key={index} value={`policy-${index}`}>
                    <AccordionTrigger>{policy.title}</AccordionTrigger>
                    <AccordionContent>{policy.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Contact Information */}
            <section className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about our legal policies, please contact us:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: legal@aichatbot.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 AI Street, Tech City, TC 12345</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const termsOfService = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
  },
  {
    title: "Use License",
    content: "Permission is granted to temporarily download one copy of the materials (information or software) on AI Chatbot's website for personal, non-commercial transitory viewing only."
  },
  {
    title: "Disclaimer",
    content: "The materials on AI Chatbot's website are provided on an 'as is' basis. AI Chatbot makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
  }
];

const privacyPolicy = [
  {
    title: "Information Collection",
    content: "We collect information that you provide directly to us, including when you create an account, make a purchase, or contact us for support."
  },
  {
    title: "Use of Information",
    content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect AI Chatbot and our users."
  },
  {
    title: "Data Security",
    content: "We use appropriate technical and organizational measures to protect the personal information that we collect and process about you."
  },
  {
    title: "Cookie Policy",
    content: "We use cookies and similar tracking technologies to track the activity on our service and hold certain information."
  }
];

export default Legal;