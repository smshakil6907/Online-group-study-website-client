import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "S M Shakil",
      feedback:
        "This platform made group study so much easier! The grading system is awesome!",
    },
    {
      name: "S M Faisal",
      feedback:
        "A fantastic way to collaborate with friends. Highly recommend!",
    },
  ];

  return (
    <section className="py-12 text-center mt-8">
      <h2 className="text-4xl font-bold mb-6">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 text-gray-300 border border-gray-300 p-6 shadow-md rounded-xl"
          >
            <p className="text-lg italic">"{testimonial.feedback}"</p>
            <h4 className="font-semibold mt-4">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
