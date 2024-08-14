import { Achievement, Categories, Companies, Courses, CTA, FeedBack, Footer, HeroSection, Navbar } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <FeedBack />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
