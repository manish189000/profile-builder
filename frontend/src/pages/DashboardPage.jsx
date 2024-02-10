import { useState, useEffect } from "react";
import {
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const DashboardPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading animation
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) =>
        prevProgress >= 80 ? 80 : prevProgress + 5
      );
    }, 100); // Adjust the interval based on your desired animation speed

    // Fetch user information
    fetch(
      `http://localhost:8000/api/v1/user/verify/${localStorage.getItem("jwt")}`
    )
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
      .finally(() => clearInterval(interval));
  }, []);

  return (
    <div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b flex justify-between items-center lg:flex-col lg:items-start lg:py-6">
        <div>
          <p className="text-sm font-inter text-black">User dashboard</p>
          <h1 className=" py-4 text-3xl text-black font-inter font-bold">
            Welcome, {userInfo?.user?.name || "Muzammil"}.
          </h1>
        </div>
        <div>
          <div className="flex gap-5 lg:-ml-[2px]">
            <button className="text-base w-40 outline-none rounded-3xl py-2 px-2 shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 ">
              View documents
            </button>
            <button className="text-base text-white w-36 outline-none rounded-3xl py-2 px-2 bg-lteal shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 ">
              Create new
            </button>
          </div>
        </div>
      </div>
      <div className="upgrade w-full p-4 border-b-gray-200 border-b flex justify-between sm:flex-col sm:gap-0 sm:justify-center">
        <div className="left-side w-[50%] sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-center sm:w-full flex flex-col gap-4">
          <p className="font-extrabold text-[1.6rem] font-inter">Upgrade</p>
          <h3 className="font-inter w-[100%]">
            You have no subscription at the moment. Please select a subscription
            plan or a token pack
          </h3>
          <p className="font inter">Total 9,495 tokens left.</p>
          <button className="text-base text-white w-36 outline-none rounded-3xl py-2 px-2 bg-lteal shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none ">
            + Select Plan
          </button>
        </div>

        <div className="right-side flex justify-center items-centerw-[35%] pt-[22px] sm:w-full sm:flex sm:flex-col sm:justify-center">
          <div className="chakra sm:flex sm:flex-col sm:items-center sm:justify-center">
            <CircularProgress
              value={loadingProgress}
              color="#b57a6d"
              size="100px"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add curved effect
              }}
            >
              <CircularProgressLabel>{`${loadingProgress}%`}</CircularProgressLabel>
            </CircularProgress>
            <p className="font-inter fontnt-ext font-extrabold pt">
              949 tokens are left{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="overView w-[100%] pt-12 pb-12 border-b-gray-200 border-b flex sm:flex-col pl-4  sm:pl-[0]  ">
        <div className="left-row-right w-[100%] flex  sm:flex">
          <div className="leftover  border-r-2 w-[100%] sm:w-[100%] sm:pr-3 sm:pl-[2rem]">
            <p className="font-extrabold font-inter ">Overview</p>
            <p>words left</p>
            <p className="font-extrabold font-inter">9,495</p>
          </div>

          <div className="second-left  w-[100%] pl-3 border-r-2 pr-3 sm:w-[100%] sm:pr-3">
            <p className="font-extrabold font-inter">Hours Saved</p>
            <p>4</p>
          </div>
        </div>
        <div className="rightover w-[100%] pl-3 sm:pl-0 sm:mt-12  ">
          <p className="font-extrabold font-inter">Your Documents</p>
          <div className="chakra">
            <Progress
              colorScheme="customColor"
              trackColorScheme="red"
              isAnimated={true}
              value={80}
              bg="#a45848"
              style={{ borderRadius: "10px" }}
            />

            <div className="radio-buttons pt-2">
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row">
                  <Radio value="1" style={{ backgroundColor: "#a7beae" }}>
                    Text 1
                  </Radio>
                  <Radio value="2" style={{ backgroundColor: "#a45848" }}>
                    Total 1
                  </Radio>
                </Stack>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="documents-box w-[90%] flex gap-12 pt-10 sm:flex sm:flex-col sm:w-[100%]">
        <div className="left-boxes box-border h-[2rem] w-full sm:w-[80%] border-2 ml-[1rem] rounded-[0.4rem]">
          <p className="font-inter pl-4 font-medium">Documents</p>
        </div>
        <div className="left-boxes box-border h-[2rem] w-full sm:w-[80%] border-2 rounded-[0.4rem]sm:ml-[3rem]">
          <p className="font-inter pl-4 font-medium sm:ml-[1rem]">
            Favorite Templates
          </p>
        </div>
      </div> */}
      <div className="second-document w-[100%] flex gap-3 sm:flex-col">
        .
        <div className="container mx-auto my-8  p-8 bg-white border border-gray-400 rounded-md ">
          {/* Content goes here */}
          <p className="text-lg font-inter">Documents</p>
        </div>
        <div className="container mx-auto my-8  mr-4 p-8 bg-white border border-gray-400 rounded-md">
          {/* Content goes here */}
          <p className="text-lg font-inter">Favorite Templates</p>
        </div>
      </div>

      <div className="copyright p-6">
        <p className="font-inter">
          Copyright © 2024 AI Profile Builder. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
