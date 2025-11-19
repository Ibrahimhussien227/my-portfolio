import React from "react";

import Hero from "./components/sections/Hero";
import ShowcaseSection from "./components/sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoSection from "./components/sections/LogoSection";
import FeatureCards from "./components/sections/FeatureCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </>
  );
};

export default App;
