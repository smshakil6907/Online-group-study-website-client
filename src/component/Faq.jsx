import React, { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the purpose of this application?",
      answer:
        "This application helps users manage and track their assignments effectively.",
    },
    {
      question: "How do I create a new assignment?",
      answer:
        "Navigate to the 'Create Assignments' section and fill in the required details to create a new assignment.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, your data is protected with secure authentication and private routes.",
    },
    {
      question: "Can I view my completed assignments?",
      answer:
        "Yes, you can view all your completed assignments in the 'My Attempted Assignments' section.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="faq-section p-8 bg-gray-200 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-md cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.question}</h3>
              <span>{activeIndex === index ? "–" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
