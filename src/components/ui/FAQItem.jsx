import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`border border-[var(--color-dark)] rounded-3xl border-b-[5px] shadow-[0_4px_0_0_var(--color-dark)] transition-colors ${
        isOpen ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-gray-light)]'
      }`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <h3
          className="text-lg md:text-xl font-medium pr-4"
          itemProp="name"
        >
          {question}
        </h3>
        <span className="flex-shrink-0 text-xl">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>

      {isOpen && (
        <div
          className="px-6 md:px-8 pb-6 md:pb-8 border-t border-[var(--color-dark)]"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <p className="pt-6 leading-relaxed" itemProp="text">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
