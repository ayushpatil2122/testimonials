"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is TrustWords?',
    answer: 'TrustWords is a platform that allows you to collect and showcase authentic testimonials from your customers with no coding required.',
  },
  {
    question: 'Is coding required to integrate testimonials?',
    answer: 'No, you can easily embed our testimonial wall on your website using simple HTML code, without any need for development skills.',
  },
  {
    question: 'How can I customize my testimonials?',
    answer: 'You can customize the design, layout, and color scheme of your testimonials wall to fit your brand perfectly using our platform.',
  },
  {
    question: 'What platforms are supported?',
    answer: 'TrustWords supports all major platforms including Webflow, WordPress, and custom websites. You just need to copy and paste the code.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a free trial to help you experience our service and see how it can benefit your brand.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-2xl border border-gray-700 hover:border-gray-600"
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-blue-300">
                  {faq.question}
                </h3>
                <div className="bg-blue-600 p-2 rounded-full transition-transform duration-300 ease-in-out transform">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-white" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>
              <div 
                className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}