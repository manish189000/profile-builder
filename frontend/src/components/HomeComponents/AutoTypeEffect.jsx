import React from "react";
import { TypeAnimation } from "react-type-animation";

const AutoTypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Craft your success story with",
        800,
        "Profile Builder",
        800,
        "build your resume",
        800,
        "in just a minute",
        800,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default AutoTypeEffect;
