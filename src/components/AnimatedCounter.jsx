import React from "react";
import CountUp from "react-countup";

import { counterItems } from "../constants";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map(({ label, suffix, value }) => (
          <div
            key={label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="text-white text-5xl font-bold mb-2">
              <CountUp suffix={suffix} end={value} />
            </div>
            <div className="text-white-50 text-lg">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
