import React from 'react';
import FAQItem from './ui/FAQItem';
import { faqs } from '../data';

const FAQ = () => {
  return (
    <section
      className="bg-[var(--color-gray-light)] py-16"
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container mx-auto px-6">
        {/* Custom centered heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Questions owners ask early
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0} // First item open by default
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
