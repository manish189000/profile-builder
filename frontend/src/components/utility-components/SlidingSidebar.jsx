import { useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa6";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { IoChatbubblesSharp } from "react-icons/io5";
import { GiArtificialHive } from "react-icons/gi";
import { Link } from "react-router-dom";
import { PiStarFourBold } from "react-icons/pi";
import { MdSupport } from "react-icons/md";
const SlidingSidebar = () => {
  const [open, setOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [responsiveNavbarOpen, setResponsiveNavbarOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <div
        className={`bg-oliv h-dvh p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative air:hidden`}
      >
        <BsArrowLeftShort
          className={`bg-scrlt text-oliv text-3xl rounded-full absolute -right-3 top-9 border border-oliv cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <GiArtificialHive
            className={`bg-ember-300 duration-500 text-scrlt text-4xl rounded cursor-pointer block float-left mr-1 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-scrlt origin-left font-semibold font-mono text-2xl ${
              !open && "hidden"
            }`}
          >
            ProfileBuilder
          </h1>
        </div>
        <Link to={"/dashboard"}>
          <div className="flex items-center rounded-md mt-12 px-2 py-2">
            <MdDashboardCustomize className="text-scrlt text-2xl block float-left cursor-pointer" />
            <h1
              className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
                !open && "hidden"
              }`}
            >
              Dashboard
            </h1>
          </div>
        </Link>
        <Link to={"documents"}>
          <div className="flex items-center rounded-md mt-6 px-2 py-2">
            <FaBoxOpen className="text-scrlt text-2xl block float-left cursor-pointer" />
            <h1
              className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
                !open && "hidden"
              }`}
            >
              Generated content
            </h1>
          </div>
        </Link>
        <Link to={"openai/generator"}>
          <div className="flex items-center rounded-md mt-6 px-2 py-2">
            <HiClipboardDocumentCheck className="text-scrlt text-2xl block float-left cursor-pointer" />
            <h1
              className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
                !open && "hidden"
              }`}
            >
              Resume generator
            </h1>
          </div>
        </Link>
        <Link to={"openai/ai-chat"}>
          <div className="flex items-center rounded-md mt-6 px-2 py-2">
            <IoChatbubblesSharp className="text-scrlt text-2xl block float-left cursor-pointer" />
            <h1
              className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
                !open && "hidden"
              }`}
            >
              AI career chat
            </h1>
          </div>
        </Link>
        <Link to={"support"}>
          <div className="flex items-center rounded-md mt-6 px-2 py-2 ">
            <MdSupport className="text-scrlt text-2xl block float-left cursor-pointer" />
            <h1
              className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
                !open && "hidden"
              }`}
            >
              Support
            </h1>
          </div>
        </Link>
      </div>
      {/* <Link to={"support"}>
        <div className="flex items-center rounded-md mt-6 px-2 py-2">
          <IoChatbubblesSharp className="text-scrlt text-2xl block float-left cursor-pointer" />
          <h1
            className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
              !open && "hidden"
            }`}
          >
            Support
          </h1>
        </div>
      </Link> */}
      <div className="hidden responsive-sidebar air:flex justify-between items-center gap-6 w-full px-4 py-3 border-b-gray-200 border-b  air:py-2">
        <div className="flex justify-between items-center gap-4 air:gap-2">
          <HiMenuAlt2
            onClick={() => setResponsiveNavbarOpen(!responsiveNavbarOpen)}
            className="text-scrlt text-2xl block float-left cursor-pointer"
          />
          <h1
            className={`text-scrlt origin-left font-bold font-mono text-2xl air:text-xl`}
          >
            ProfileBuilder
          </h1>
        </div>

        <div className="relative hidden air:inline-block ">
          <div className="flex items-center">
            <div
              className=" bg-pink-400 text-white px-3 py-3 text-xl rounded-full overflow-hidden cursor-pointer bg-gradient-to-r from-indigo-900 via-lime-300 to-rose-600 air:px-2 air:py-2"
              onClick={toggleDropdown}
            >
              <PiStarFourBold />
            </div>
          </div>
          {dropdownOpen && (
            <div
              className={`z-[1000] ${
                dropdownOpen
                  ? "transition-all ease-out duration-300 transform opacity-100 scale-100"
                  : "transition-all ease-in duration-150 transform opacity-0 scale-95"
              } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Option 3
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* /////menu /// */}
      {responsiveNavbarOpen && (
        <div
          onClick={() => setResponsiveNavbarOpen(false)}
          className="modal bg-oliv px-4 py-4 absolute w-full z-50"
        >
          <div className="menu-list flex flex-col gap-2">
            <Link to={"/dashboard"}>
              <div className="flex items-center rounded-md mt-2 px-2 py-2">
                <MdDashboardCustomize className="text-scrlt text-2xl block float-left cursor-pointer m480:text-xl" />
                <h1
                  className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
                    !open && "hidden"
                  }`}
                >
                  Dashboard
                </h1>
              </div>
            </Link>
            <Link to={"documents"}>
              <div className="flex items-center rounded-md mt-2 px-2 py-2">
                <FaBoxOpen className="text-scrlt text-2xl block float-left cursor-pointer m480:text-xl" />
                <h1
                  className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
                    !open && "hidden"
                  }`}
                >
                  Generated content
                </h1>
              </div>
            </Link>
            <Link to={"openai/generator"}>
              <div className="flex items-center rounded-md mt-2 px-2 py-2">
                <HiClipboardDocumentCheck className="text-scrlt text-2xl block float-left cursor-pointer m480:text-xl" />
                <h1
                  className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
                    !open && "hidden"
                  }`}
                >
                  Resume generator
                </h1>
              </div>
            </Link>
            <Link to={"openai/ai-chat"}>
              <div className="flex items-center rounded-md mt-2 px-2 py-2">
                <IoChatbubblesSharp className="text-scrlt text-2xl block float-left cursor-pointer m480:text-xl" />
                <h1
                  className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
                    !open && "hidden"
                  }`}
                >
                  AI career chat
                </h1>
              </div>
            </Link>
            <Link to={"support"}>
              <div className="flex items-center rounded-md mt-2 px-2 py-2 ">
                <MdSupport className="text-scrlt text-2xl block float-left cursor-pointer m480:text-xl" />
                <h1
                  className={`font-inter text-scrlt origin-left font-semibold px-2 text-base ${
                    !open && "hidden"
                  }`}
                >
                  Support
                </h1>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* <div className="bg-green-400 w-full h-full overflow-x-hidden overflow-y-auto no-scrollbar">
        <p className="text-3xl text-black p-5">
          {" "}
          Certainly! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed id justo non arcu cursus scelerisque. Maecenas non justo vitae
          augue elementum accumsan. Vivamus id ipsum nec justo sollicitudin
          tristique. Fusce vel augue et arcu imperdiet laoreet. Integer volutpat
          nisl nec augue auctor, ac consectetur tortor fermentum. Suspendisse
          potenti. Fusce vel sapien vitae purus ullamcorper efficitur. Sed in
          massa vitae orci aliquet feugiat. Duis varius dolor eu orci fermentum,
          in fermentum lacus ullamcorper. Ut et felis vitae velit semper
          elementum. Quisque cursus, justo a scelerisque tincidunt, dolor purus
          vestibulum neque, non tincidunt purus mauris at sem. Integer at justo
          auctor, tincidunt leo vel, cursus sem. Sed id elit non dolor laoreet
          efficitur in nec justo. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Vestibulum at odio non
          lacus rutrum luctus. In hac habitasse platea dictumst. Nulla facilisi.
          Ut ut sagittis enim. Integer vestibulum tincidunt justo, non facilisis
          libero laoreet nec. Sed ut venenatis urna. Vivamus cursus mi eu mi
          vulputate, ac facilisis dolor dapibus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas vel
          justo vel urna tincidunt facilisis eu in ex. Proin sed diam nec libero
          accumsan fringilla. Curabitur a justo eu orci malesuada dictum. Nam
          consequat justo a risus consectetur, id varius dolor fermentum.
          Suspendisse potenti. Quisque euismod ultrices neque, ut laoreet leo
          finibus id. Morbi fringilla, justo at convallis sodales, massa turpis
          vehicula neque, a congue elit mauris eu nunc. Mauris ultricies
          scelerisque purus, eu congue nisi interdum vel. Sed ut nisl nec purus
          laoreet congue vel at elit. Integer ut cursus nisl. Duis id justo sit
          amet nulla gravida blandit eget ut justo. In hac habitasse platea
          dictumst. Nunc at quam vel sapien luctus laoreet. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed auctor ipsum eget justo
          consectetur, id varius justo consequat. Integer eu semper ipsum.
          Suspendisse vel nisi ac urna bibendum elementum vel at metus. Donec
          facilisis erat nec velit malesuada, ac ultricies tellus luctus. Nunc
          euismod urna non arcu rhoncus, a cursus ligula scelerisque. Curabitur
          sit amet mauris vel elit tempor venenatis eget nec ipsum. Sed
          ullamcorper scelerisque cursus. Aenean auctor, tortor id bibendum
          tristique, justo odio cursus turpis, vel sodales velit mauris ut enim.
          Sed vehicula leo a mi bibendum cursus. Vivamus feugiat velit non justo
          volutpat, a hendrerit felis interdum. Suspendisse vel justo et turpis
          iaculis convallis. In tristique lectus ac purus fringilla, ut
          sollicitudin libero feugiat. Vivamus id luctus libero.
        </p>
      </div> */}
    </div>
  );
};

export default SlidingSidebar;

// import React, { useState, useRef, useEffect } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import the styles

// const RichTextEditor = () => {
//   const [text, setText] = useState("");
//   const quillRef = useRef(null);

//   useEffect(() => {
//     if (quillRef.current) {
//       quillRef.current.getEditor().history.clear();
//     }
//   }, []);
//   const handleChange = (content, _, __, editor) => {
//     setText(content);
//   };

//   const handleUndo = () => {
//     if (quillRef.current) {
//       quillRef.current.getEditor().history.undo();
//     }
//   };

//   const handleRedo = () => {
//     if (quillRef.current) {
//       quillRef.current.getEditor().history.redo();
//     }
//   };

//   const handleClear = () => {
//     if (quillRef.current) {
//       quillRef.current.getEditor().setText("");
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="flex mb-2">
//         <button
//           className="mr-2 px-3 py-1 bg-blue-500 text-white rounded"
//           onClick={handleUndo}
//         >
//           Undo
//         </button>
//         <button
//           className="px-3 py-1 bg-green-500 text-white rounded"
//           onClick={handleRedo}
//         >
//           Redo
//         </button>
//         <button
//           className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
//           onClick={handleClear}
//         >
//           Clear
//         </button>
//       </div>
//       <ReactQuill
//         ref={quillRef}
//         theme="snow"
//         value={text}
//         onChange={handleChange}
//         // className="rounded-md bg-red"/
//         // style={{ borderRadius: "8px" }}
//         modules={RichTextEditor.modules}
//         formats={RichTextEditor.formats}
//       />
//     </div>
//   );
// };

// RichTextEditor.modules = {
//   toolbar: [
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["link", "image"],
//     ["clean"],
//   ],
//   history: {
//     delay: 500,
//     maxStack: 100,
//     userOnly: true,
//   },
// };

// RichTextEditor.formats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "link",
//   "image",
// ];

// export default RichTextEditor;
