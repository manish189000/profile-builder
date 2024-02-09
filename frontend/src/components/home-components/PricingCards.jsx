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
    // hover:scale-110
    <div className="mainContainer w-[300px] h-[28rem] mt-[100px] rounded-xl shadow-xl">
      <div className=" card text-center h-[ 60%] max-w-lg bg-white p-8 bg-gradient-to-r from-[orange]-300 via-gray-200 to-white relative  transition duration-500 cursor-pointer object-covers">
        <div className="text-xl font-bold mb-[2rem] w-[30] bg-[#ffc6ad] rounded-1xl font-pop">
          {title}
        </div>
        <div className="text-3xl font-bold mb-4 font-pop">{price}</div>
        <p className="  mb-4 pt-2">{description}</p>
        <p className=" pt-5">{`${projects} new projects per month `}</p>
        <p className=" pt-2">{interaction}</p>
        <p className=" pt-2">{library}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 font-pop  mt-12">
          Get started
        </button>
      </div>
    </div>
  );
};

const PricingCards = () => {
  return (
    <div className="flex flex-wrap gap-12 md: justify-center  bg-[#efece8]">
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
  );
};

export default PricingCards;
