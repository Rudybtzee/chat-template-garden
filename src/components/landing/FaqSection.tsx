import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI chatbot work?",
    answer: "Our AI chatbot uses advanced language models from Gemini, DeepSeek, and Hugging Face to understand and respond to customer queries naturally. It learns from conversations and can be customized to match your brand voice."
  },
  {
    question: "Can I customize the chatbot's appearance?",
    answer: "Yes! You can customize colors, fonts, logos, and the overall theme to match your brand. We provide an easy-to-use dashboard for making these changes."
  },
  {
    question: "What types of templates are available?",
    answer: "We offer 50+ professional templates across various industries including customer service, sales, healthcare, real estate, and more. Each template is pre-trained for specific use cases."
  },
  {
    question: "How secure is the chatbot?",
    answer: "We prioritize security with encrypted communications, secure API key storage, and regular security audits. All data is processed in compliance with GDPR and other privacy regulations."
  },
  {
    question: "Do you offer support for integration?",
    answer: "Yes, we provide comprehensive documentation, integration guides, and dedicated support to help you get started. Our team is available to assist with any technical questions."
  }
];

export const FaqSection = () => {
  return (
    <section className="py-24 bg-neutral-softGray">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Everything you need to know about our AI chatbot
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};