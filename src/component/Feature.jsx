import React from "react";

export default function Feature() {
  const features = [
    {
      icon: "📝",
      title: "Create Assignments",
      description:
        "Easily create new assignments with a user-friendly interface.",
    },
    {
      icon: "✅",
      title: "Track Progress",
      description:
        "Keep track of your pending and completed assignments effortlessly.",
    },
    {
      icon: "🔒",
      title: "Secure Access",
      description:
        "Protect your data with secure authentication and private routes.",
    },
    {
      icon: "📊",
      title: "Performance Insights",
      description: "Get detailed insights into your assignment performance.",
    },
  ];
  return (
    <section className="bg-gray-200 py-12 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-5xl text-indigo-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
