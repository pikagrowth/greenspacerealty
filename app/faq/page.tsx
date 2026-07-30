// app/faq/page.tsx
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
    <div className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark pb-24 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary dark:bg-[#0c100e] text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-6 transition-colors">
            <MessageCircleQuestion className="w-8 h-8 text-brand-accent dark:text-brand-accentDark transition-colors" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight transition-colors">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors">
            Everything you need to know about our advisory services, local micro-markets, and sole-selling mandates.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white dark:bg-[#161917] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {categories.map((category) => {
              const categoryFaqs = faqs.filter(faq => (faq.category || "General") === category);
              
              if (categoryFaqs.length === 0) return null;

              return (
                <div key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-4 inline-block pr-12 transition-colors">
                    {category}
                  </h2>
                  <Accordion items={categoryFaqs.map(faq => ({
                    title: faq.question,
                    content: faq.answer
                  }))} />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary/5 dark:bg-brand-primaryDark/10 border-t border-brand-primary/10 dark:border-brand-primaryDark/20 text-center transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Still have questions?" 
            subtitle="If you couldn't find the answer you were looking for, our advisory team is just a call or message away."
            className="mb-8"
          />
          <Link href="/contact">
            <Button className="px-10 py-4 h-auto text-base shadow-lg hover:shadow-brand-primary/20 dark:hover:shadow-brand-primaryDark/20">
              Contact Our Advisory Team <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}