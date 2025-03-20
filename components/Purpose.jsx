import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CardSpotlight } from "./ui/card-spotlight";
const faq = [
  {
    question: "What is an ATS-optimized resume?",
    answer:
      "An ATS-optimized resume is a resume formatted and structured in a way that is easily readable by Applicant Tracking Systems (ATS). These systems are used by employers to filter and rank resumes based on keywords, formatting, and content.",
  },
  {
    question: "How does the AI resume builder work?",
    answer:
      "Our AI resume builder uses advanced algorithms to analyze your input and suggest the best content, keywords, and formatting for your resume. It ensures your resume is tailored to the job you're applying for and optimized for ATS.",
  },
  {
    question: "Can I customize the resume templates?",
    answer:
      "Yes, all our resume templates are fully customizable. You can change colors, fonts, sections, and layouts to create a resume that matches your personal style and professional needs.",
  },
  {
    question: "Is my data safe with your resume builder?",
    answer:
      "Absolutely! We take data privacy seriously. Your information is encrypted and stored securely. We do not share your data with third parties.",
  },
  {
    question: "Do I need to create an account to use the resume builder?",
    answer:
      "You can try our resume builder without creating an account, but signing up allows you to save your progress, access your resumes from anywhere, and download them in multiple formats.",
  },
  {
    question: "Can I use this resume builder for free?",
    answer:
      "Yes, we offer a free plan with basic features. For advanced features like additional templates, AI-powered suggestions, and unlimited downloads, you can upgrade to our premium plan.",
  },

  {
    question: "What industries do your resume templates support?",
    answer:
      "Our templates are designed to work for all industries, including tech, healthcare, finance, education, and more. Each template is customizable to fit your specific industry and role.",
  },
  {
    question: "Can I get help with writing my resume content?",
    answer:
      "Yes, our AI-powered tool provides real-time suggestions for improving your resume content, including bullet points, summaries, and skills sections. You can also refer to our library of resume examples for inspiration.",
  },
];
const Purpose = () => {
  return (
    <section className="py-20 ">
     <CardSpotlight>
  <div className="container mx-auto px-6 py-12">
    <h2 className="text-4xl font-bold text-center mb-12 text-white">
      Why Choose Us?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition duration-300">
        <div className="bg-blue-100/20 p-6 rounded-full w-20 h-20 mx-auto mb-4">
          {/* Icon or Illustration */}
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white">
          AI-Powered Resume Builder
        </h3>
        <p className="text-gray-200">
          Create resumes optimized for ATS with AI assistance.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition duration-300">
        <div className="bg-blue-100/20 p-6 rounded-full w-20 h-20 mx-auto mb-4">
          {/* Icon or Illustration */}
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Industry Insights
        </h3>
        <p className="text-gray-200">
          Gain insights into job market trends and best practices.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition duration-300">
        <div className="bg-blue-100/20 p-6 rounded-full w-20 h-20 mx-auto mb-4">
          {/* Icon or Illustration */}
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white">
          ATS-Optimized Resumes
        </h3>
        <p className="text-gray-200">
          Craft resumes that stand out in the job market.
        </p>
      </div>

      {/* Repeat for other features */}
    </div>
  </div>
</CardSpotlight>
      
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-xl font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Purpose;
