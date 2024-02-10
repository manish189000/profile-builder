import { TypeAnimation } from "react-type-animation";

const AutoTypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Craft your success story with",
        800, // wait 1s before replacing "Mice" with "Hamsters"
        " Craft your success story with '        '  Profile Builder",
        800,
        " Craft your success story with  '        ' Profile Builder",
        800,
        " Craft your success story with '        '  Profile Builder",
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
