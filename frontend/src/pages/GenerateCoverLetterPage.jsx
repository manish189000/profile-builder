import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { languages } from "countries-list";
import Input from "../components/utility-components/Input";
import Textarea from "../components/utility-components/Textarea";
import Label from "../components/utility-components/Label";
import Editor from "../components/utility-components/Editor";

const GenerateCoverLetter = () => {
  const [selectedLanguage, setselectedLanguage] = useState("English");
  const [selectedCreativity, setSelectedCreativity] = useState("Good");
  const [selectedTone, setSelectedTone] = useState("Professional");
  const navigate = useNavigate();
  const languagesArray = Object.values(languages);
  const creativityArray = ["Good", "Economic", "Average", "Premium"];
  const toneArray = [
    "Professional",
    "Funny",
    "Casual",
    "Excited",
    "Witty",
    "Sarcastic",
    "Feminine",
    "Masculine",
    "Bold",
    "Dramatic",
    "Grumpy",
    "Generate",
    "Secretive",
  ];
  return (
    <div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b ">
        <div
          onClick={() => navigate(-1)}
          className="flex gap-1 items-center text-black"
        >
          <IoIosArrowBack />
          <p className="text-sm font-inter cursor-pointer text-black">Back</p>
        </div>
        <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
          Cover letter generator
        </h1>
        <p className="text-sm text-gray-300 font-inter py-2">
          Provide us with a snapshot of your key details, and our AI will craft
          a tailored resume just for you.
        </p>
      </div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b flex md:flex-col ">
        <div className="left w-[50%] md:w-full">
          <form className="flex flex-col w-[65%] xl:w-[80%] lg:w-[90%] sm:w-full">
            <Label>Name</Label>
            <Input type="text" placeholder="Name" />
            <Label>Work Experience</Label>
            <Input type="text" placeholder="Work Experience" />
            <Label>Company</Label>
            <Input type="text" placeholder="Company Name" />
            <Label>Job Description</Label>
            <Textarea placeholder="Job Description" />
            <select
              onChange={(e) => setselectedLanguage(e.target.value)}
              defaultValue={"English"}
              className="input resize-none w-[50%] font-inter px-1 py-2 mb-4 text-[#3F292B] outline-none rounded-lg border"
            >
              {languagesArray.map((item) => {
                return (
                  <option key={item.name} value={item.name}>
                    {item.name} ({item.native})
                  </option>
                );
              })}
            </select>
            <div className="flex justify-between m480:flex-col">
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Max Length</Label>
                <input
                  placeholder="Max word length"
                  type="number"
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                  defaultValue={400}
                  max={400}
                  min={100}
                  step={1}
                />
              </div>
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Number of results</Label>
                <input
                  type="number"
                  placeholder="Number of results"
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                  defaultValue={1}
                  step={1}
                  max={3}
                  min={1}
                />
              </div>
            </div>
            <div className="flex justify-between m480:flex-col">
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Creativity</Label>
                <select
                  onChange={(e) => setSelectedCreativity(e.target.value)}
                  defaultValue={"Good"}
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                >
                  {creativityArray.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Tone of voice</Label>
                <select
                  onChange={(e) => setSelectedTone(e.target.value)}
                  defaultValue={"Professional"}
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                >
                  {toneArray.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <input
              value={"Generate"}
              type="submit"
              className="input font-inter px-3 py-[10px] my-4 bg-[#3F292B] text-oliv outline-none border rounded-3xl cursor-pointer transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue lg:hover:shadow lg:hover:-translate-y-0 "
            />
          </form>
        </div>
        <div className="right w-[50%] md:w-full">
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default GenerateCoverLetter;
// {languagesArray.map((item) => (
//   // Remove the "return" keyword and use parentheses
//   <MenuItem key={item.name} onClick={() => setValue(item.name)}>
//     {item.name + " " + item.native}
//   </MenuItem>
// ))}

{
  /* <Menu closeOnSelect={true}>
              <MenuButton
                className="w-[52.5%]"
                as={Button}
                rightIcon={
                  <FaChevronDown className="text-sm font-inter text-left" />
                }
              >
                {value ? value : "Language"}
              </MenuButton>
              <MenuList className="scroll-y">
                {languagesArray.map((item) => {
                  return <MenuItem key={item.name}>{item.name}</MenuItem>;
                })}
              </MenuList>
            </Menu> */
}
