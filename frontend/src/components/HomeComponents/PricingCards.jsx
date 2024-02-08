import React from "react";

const PricingCard = ({
  title,
  price,
  description,
  projects,
  interaction,
  library,
}) => {
  return (
    <div className="mainContainer bg-oliv rounded-xl font-poppins shadow-xl">
      <div className="mainContainer w-[300px] h-[28rem] ">
        <div className=" card text-center h-[60%] max-w-lg p-6 relative text-scrlt font-medium transition duration-500 cursor-pointer object-covers">
          <div className="text-xl bg-dbeige text-scrlt p-[4px] font-bold mb-[2rem] w-[30] rounded-md font-pop">
            {title}
          </div>
          <div className="text-3xl font-bold mb-4 font-pop">{price}</div>
          <p className="  mb-4 pt-2">{description}</p>
          <p className=" pt-5">{`${projects} new projects per month `}</p>
          <p className=" pt-2">{interaction}</p>
          <p className=" pt-2">{library}</p>
          <button className=" text-scrlt px-4 py-2 rounded-md border-2 transition ease-in-out delay-100 hover:bg-scrlt hover:text-oliv font-semibold border-scrlt mt-12">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingCards = () => {
  return (
    <div className="pricing bg-dbeige font-poppins py-8 px-8">
      <div className="pricingtext pb-6 text-center font-poppins text-scrlt ">
        <h1 className="text-[40px] font-bold">Our Pricing</h1>
        <p className="font-normal">
          Seamless pricing that scales with your needs. Begin free, upgrade
          flexibly.
        </p>
      </div>
      <div
        className="flex flex-wrap gap-12 justify-center "
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <PricingCard
          title="Free"
          price="0$"
          description="Great for Starters. Discover how to create your first project."
          projects="3"
          interaction="Basic interaction"
          library="Assets library"
        />
        <PricingCard
          title="Lite"
          price="19$"
          description="Great for Starters. Discover how to create your first project."
          projects="3"
          interaction="Basic interaction"
          library="Assets library"
        />
        <PricingCard
          title="premium"
          price="19$"
          description="Great for Starters. Discover how to create your first project."
          projects="3"
          interaction="Basic interaction"
          library="Assets library"
        />
      </div>
    </div>
  );
};

export default PricingCards;
