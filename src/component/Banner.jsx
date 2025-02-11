import React from "react";

export default function Banner() {
  return (
    <div className="banner-section bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Online Group Study
        </h1>
        <p className="text-lg mb-6">
          Collaborate with your friends to create, complete, and grade
          assignments together. Learn, grow, and succeed as a team!
        </p>
        {/* <button className="mt-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded-md hover:bg-gray-100 transition duration-200">
          Get Started Now
        </button> */}
      </div>
      <div className="mt-8">
        <img
          src="https://i.ibb.co.com/gtCK5Hb/team-working-together-project.jpg"
          alt="Group Study Illustration"
          className="rounded-md shadow-lg mx-auto w-[500px] "
        />
      </div>
    </div>
  );
}
