/* eslint-disable react/prop-types */

import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types
const PricingCard = ({
  title,
  price,
  description,
  projects,
  interaction,
  library,
  best,
}) => {
  return (
    <div
      className={`mainContainer bg-oliv rounded-xl font-poppins shadow-xl ${
        best && "scale-[1.2] sm:scale-[1]"
      }`}
    >
      <div className="mainContainer w-[300px] h-[28rem] sm:w-full">
        <div className=" card text-center h-[60%] max-w-lg p-6 relative text-scrlt font-medium transition duration-500 cursor-pointer object-covers">
          <div className="text-xl bg-dbeige text-scrlt p-[4px] font-bold mb-[2rem] w-[30] rounded-md font-raleway">
            {title}
          </div>
          <div className="text-3xl font-bold mb-4 font-mono">{price}</div>
          <p className="  mb-4 pt-2 font-inter">{description}</p>
          <p className=" pt-5 font-inter">{`${projects} new projects per month `}</p>
          <p className=" pt-2 font-inter">{interaction}</p>
          <p className=" pt-2 font-inter">{library}</p>
          <button className=" text-scrlt font-inter px-4 py-2 rounded-md border-2 transition ease-in-out delay-100 hover:bg-scrlt hover:text-oliv font-semibold border-scrlt mt-12">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/display-name
const PricingCards = forwardRef((children, ref) => {
  return (
    <div ref={ref} className="pricing bg-dbeige font-inter pt-24 pb-28 px-8 sm:px-4 sm:py-28">
      <div className="pricingtext pb-20 text-center font-inter text-scrlt ">
        <h1 className="text-4xl font-bold">Our Pricing</h1>
        <p className="font-normal pt-2">
          Seamless pricing that scales with your needs. Begin free, upgrade
          flexibly.
        </p>
      </div>
      <div
        className="flex flex-wrap gap-12 justify-center"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <PricingCard
          title="Free"
          price="0$"
          description="Great for Starters. Discover how to create your first project!"
          projects="3"
          interaction="Basic interaction"
          library="Assets library"
        />
        <PricingCard
          best={true}
          title="Lite"
          price="19$"
          description="Upgrade to Lite Pack today and elevate your projects instantly!"
          projects="10"
          interaction="Advanced interaction"
          library=" Lite assets library"
        />
        <PricingCard
          title="premium"
          price="29$"
          description="Upgrade now and revolutionize your online presence instantly!"
          projects="30"
          interaction="Personalized consultation"
          library="Premium assets library"
        />
      </div>
    </div>
  );
});

export default PricingCards;
