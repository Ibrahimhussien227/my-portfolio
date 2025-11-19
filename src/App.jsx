import React from "react";

import Hero from "./components/sections/Hero";
import ShowcaseSection from "./components/sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoSection from "./components/sections/LogoSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
    </>
  );
};

export default App;
