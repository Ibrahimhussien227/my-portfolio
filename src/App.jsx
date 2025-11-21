import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";

const ShowcaseSection = lazy(() =>
  import("./components/sections/ShowcaseSection")
);
const LogoSection = lazy(() => import("./components/sections/LogoSection"));
const FeatureCards = lazy(() =>
  import("./components/sections/FeatureCards")
);
const ExperienceSection = lazy(() =>
  import("./components/sections/ExperienceSection")
);
const TechStack = lazy(() => import("./components/sections/TechStack"));
const Testimonials = lazy(() =>
  import("./components/sections/Testimonials")
);
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));

const SectionLoader = ({ label }) => (
  <section className="flex-center py-20 text-white-50">
    <p>Loading {label}…</p>
  </section>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader label="projects" />}>
        <ShowcaseSection />
      </Suspense>
      <Suspense fallback={<SectionLoader label="client logos" />}>
        <LogoSection />
      </Suspense>
      <Suspense fallback={<SectionLoader label="feature cards" />}>
        <FeatureCards />
      </Suspense>
      <Suspense fallback={<SectionLoader label="experience" />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionLoader label="tech skills" />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<SectionLoader label="testimonials" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader label="contact section" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionLoader label="footer" />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
