import { IoIosArrowRoundBack } from "react-icons/io";
import ErrorDialogBox from "../components/utility-components/ErrorDialogBox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Label from "../components/utility-components/Label";
import Input from "../components/utility-components/Input";
import Textarea from "../components/utility-components/Textarea";

const Profile = () => {
  const [errorVisible, setErrorVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b ">
        <ErrorDialogBox errorVisible={errorVisible} />
        <div
          onClick={() => navigate(-1)}
          className="flex gap-1 items-center cursor-pointer text-black"
        >
          <IoIosArrowRoundBack />
          <p className="text-sm font-inter cursor-pointer text-black">Back</p>
        </div>
        <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
          Build your profile
        </h1>
      </div>
      <div className="mainContainer w-full px-4 py-3 border-b-gray-200 border-b-1">
        <form className="flex flex-col w-[30%]">
          <Label>Name</Label>
          <Input placeholder="Your name" type="text" />
          <Label>Short Description</Label>
          <Input placeholder="Describe yourself" type="text" />
          <Label>Education Details</Label>
          <Textarea placeholder="Education details" />
          <Label>Work Experience</Label>
          <Textarea placeholder="Work experience" />
          <Label>Achievements</Label>
          <Textarea placeholder="Achievements" />
          <input
            value={"Generate"}
            type="submit"
            className="input font-inter px-3 py-[10px] my-4 bg-[#3F292B] text-oliv outline-none border rounded-3xl cursor-pointer transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue lg:hover:shadow lg:hover:-translate-y-0 "
          />
        </form>
      </div>
    </>
  );
};

export default Profile;
