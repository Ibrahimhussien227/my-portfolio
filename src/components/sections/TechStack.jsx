import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../TitleHeader";
import { techStackIcons } from "../../constants";

const TechIcon = lazy(() => import("../models/TechLogos/TechIcon"));

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: "0.2",
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  const TechCard = ({ icon }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
      >
        <div className="tech-card-animated-bg" />
        <div className="tech-card-content">
          <div className="tech-icon-wrapper">
            {visible ? (
              <Suspense
                fallback={
                  <div className="flex-center w-full h-full text-white-50 text-sm">
                    Loading…
                  </div>
                }
              >
                <TechIcon model={icon} />
              </Suspense>
            ) : (
              <div className="flex-center w-full h-full text-white-50 text-sm">
                Preparing model…
              </div>
            )}
          </div>

          <div className="padding-x w-full">
            <p>{icon.name}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <TechCard key={icon.name} icon={icon} />
          ))}

          {/* {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={icon.imgPath}/>
                </div>

                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
