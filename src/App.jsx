import React from "react";

import Hero from "./components/sections/Hero";
import ShowcaseSection from "./components/sections/ShowcaseSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
    </>
  );
};

export default App;
