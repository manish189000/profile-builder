// import React from "react";
// import { FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FcGoogle } from "react-icons/fc";
// import { FaYoutube } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <>
//       <div className="footer w-full flex flex-col items-center bg-oliv text-scrlt p-8">
//         <div className="foter-items flex flex-col items-center justify-center text-center mb-4">
//           {/* <li className="text-lg font-pop font-bold list-none text-[47px] m480:leading-[4rem]">
//             Resume-builder-ai
//           </li> */}
//           <div className="logo tracking-wider cursor-pointer font-mono text-[25px] font-bold text-scrlt">
//             Profile Builder
//           </div>

//           <div className="list-items pt-4">
//             <p className="para w-[60%] m-auto font-inter font-normal ">
//               Empowering individuals to shape their professional futures, one
//               profile at a time. Stay connected with us for the latest career
//               insights and updates.
//             </p>
//           </div>
//         </div>
//         <div className="Social-media flex mt-4 space-x-6">
//           <FaFacebook className="icon text-cyan-700 text-[30px]" />
//           <FaXTwitter className="text-[30px] text-black" />
//           <FcGoogle className="text-[30px]" />
//           <FaYoutube className="text-[30px] text-red-700" />
//           <IoLogoLinkedin className="text-[30px] text-blue-700" />
//         </div>
//         <div className="footer-end mt-6 w-full">
//           <hr className="border-scrlt" />
//           <div className="mt-2 text-center  m480:text-center font-pop font-normal  ">
//             <span className="font-medium">&copy;</span>
//             <span className=" font-mono">Profile Builder </span>
//             2024. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const sections = [
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <div className="mainContainer w-full bg-oliv py-10 px-8">
      <div
        className="innerContainer grid grid-cols-6 border-b-2 border-scrlt py-8
      md:grid-cols-4 sm:grid-cols-2"
      >
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase text-lg text-scrlt pt-2 font-raleway">
              {section.title}
            </h6>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="py-1 text-scrlt cursor-pointer font-inter font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 md:pt-8 text-scrlt">
          <p className="font-bold uppercase font-raleway">
            Subscribe to our newsletter
          </p>
          <p className="py-4 font-inter font-medium">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 bg-transparent border-2 border-scrlt text-black outline-none mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 border-2 rounded-md border-scrlt mx-auto font-raleway font-medium hover:bg-scrlt hover:text-oliv transition ease-in-out delay-100">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div
        className="belowFooter flex mx-auto justify-between  text-center text-gray-500
      sm:flex-col"
      >
        <p className="py-4 text-scrlt font-raleway font-medium">
          <span className="font-medium">&copy;</span>
          <span className=" font-mono">ProfileBuilder </span>
          2024. All rights reserved.
        </p>
        <div className="flex gap-5 pt-4 text-2xl sm:mx-auto">
          {items.map((x, index) => {
            return <x.icon key={index} className="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
