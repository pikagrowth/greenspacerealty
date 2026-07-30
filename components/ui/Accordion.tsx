// components/ui/Accordion.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 last:border-0 transition-colors duration-300">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 dark:focus-visible:ring-brand-primaryDark/50 rounded-lg"
        onClick={onClick}
      >
        <span className="font-medium text-brand-text dark:text-brand-textDark transition-colors duration-300">
          {title}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base transition-colors duration-300">
          {content}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`divide-y divide-gray-200 dark:divide-gray-800 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};