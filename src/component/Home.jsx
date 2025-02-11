import React from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Feature from "./Feature";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div className="w-[95%] mx-auto mt-8">
      <Banner></Banner>
      <Feature></Feature>
      <Faq></Faq>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
    </div>
  );
}
