import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How is Brainbox different from other mentorship programs?",
    answer: "Unlike generic programs, we provide personalized 1-on-1 mentorship from successful store owners, a proven framework, and a supportive community. Our focus is on actionable strategies that have generated over $50M in student revenue."
  },
  {
    question: "Do I need prior experience in ecommerce?",
    answer: "No prior experience is required. Our program is designed to take you from complete beginner to advanced store owner, with step-by-step guidance throughout your journey."
  },
  {
    question: "How long does it take to see results?",
    answer: "While results vary, our most committed students typically see significant improvements within 90 days. We've had students scale to 6-figures monthly within their first year."
  },
  {
    question: "What support do I get after joining?",
    answer: "You'll get access to weekly coaching calls, our private community forum, detailed training materials, and depending on your plan, 1-on-1 mentorship sessions. Plus, our support team is available 24/7."
  },
  {
    question: "Is there a guarantee?",
    answer: "Yes! We offer a 30-day satisfaction guarantee. If you follow our program and don't see value, we'll refund your investment. We also provide a revenue growth guarantee for Enterprise members."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to know about the program
          </p>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center px-8 py-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 px-8 py-6 bg-white rounded-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}