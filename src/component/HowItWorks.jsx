import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Sign Up",
      description: "Create your free account in just a few clicks.",
    },
    {
      step: "2",
      title: "Create & Join Assignments",
      description: "Start a new assignment or join one created by a friend.",
    },
    {
      step: "3",
      title: "Submit & Grade",
      description: "Complete assignments and grade your friends' work.",
    },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-4xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.step}
            className="p-6 border border-gray-300 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold">
              Step {step.step}: {step.title}
            </h3>
            <p className="mt-2 text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
