import React from "react";
import Link from "next/link";
import { MessageCircleQuestion, ArrowRight } from "lucide-react";
import { faqs } from "@/lib/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Frequently Asked Questions | Greenspace Realty",
  description: "Get answers to common questions about buying, selling, land investments, and builder mandates in Navi Mumbai and Panvel.",
};

export default function FAQPage() {
  // Extract unique categories from the FAQ data
  const categories = Array.from(new Set(faqs.map(faq => faq.category || "General")));

  return (
    <div className="flex flex-col w-full bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <MessageCircleQuestion className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our services, the local real estate market, and how we handle our mandates.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {categories.map((category) => {
              const categoryFaqs = faqs.filter(faq => (faq.category || "General") === category);
              
              if (categoryFaqs.length === 0) return null;

              return (
                <div key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4 inline-block pr-12">
                    {category}
                  </h2>
                  <Accordion items={categoryFaqs.map(faq => ({
                    question: faq.question,
                    answer: faq.answer,
                    title: faq.question,
                    content: faq.answer
                  })) as any} />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary/5 border-t border-brand-primary/10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Still have questions?" 
            subtitle="If you couldn't find the answer you were looking for, our advisory team is just a call or message away."
            className="mb-8"
          />
          <Link href="/contact">
            <Button className="px-10 py-4 h-auto text-base shadow-lg hover:shadow-brand-primary/20">
              Contact Our Team <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}