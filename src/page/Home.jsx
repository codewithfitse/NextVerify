import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import NowSection from "../components/NowSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <NowSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
