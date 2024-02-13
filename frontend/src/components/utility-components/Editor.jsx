// import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// const Editor = () => {
// const [value, setValue] = useState("");
// const toolbarOptions = [
//   ["bold", "italic", "underline"], // toggled buttons
//   // ["blockquote", "code-block"],

//   // [{ header: 1 }, { header: 2 }], // custom button values
//   [{ list: "ordered" }, { list: "bullet" }],
//   // [{ script: "sub" }, { script: "super" }], // superscript/subscript
//   [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//   // [{ direction: "rtl" }], // text direction

//   // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
//   [{ header: [1, 2, 3, 4, 5, 6, false] }],

//   [{ color: [] }], // dropdown with defaults from theme
//   [{ font: [] }],
//   [{ align: [] }],

//   // ["clean"], // remove formatting button
// ];
//   const module = {
//     toolbar: toolbarOptions,
//   };
//   return (
//     <div>
//       <ReactQuill
//         modules={module}
//         className="rounded"
//         theme="snow"
//         value={value}
//         onChange={setValue}
//       />
//     </div>
//   );
// };

// export default Editor;

import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { GrClear } from "react-icons/gr";
import { MdOutlineContentCopy } from "react-icons/md";

const Editor = () => {
  const [text, setText] = useState("");
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      quillRef.current.getEditor().history.clear();
    }
  }, []);

  const handleUndo = () => {
    if (quillRef.current) {
      quillRef.current.getEditor().history.undo();
    }
  };

  const handleRedo = () => {
    if (quillRef.current) {
      quillRef.current.getEditor().history.redo();
    }
  };

  const handleClear = () => {
    if (quillRef.current) {
      quillRef.current.getEditor().setText("");
    }
  };

  const [value, setValue] = useState(null); // Remove unnecessary object wrapping

  const handleChangeQuill = (content, _, __, editor) => {
    setText(content);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleCopy = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const content = editor.getText();

      // Copy to clipboard
      navigator.clipboard.writeText(content);
    }
  };

  return (
    <div className="text-editor">
      <div className="flex py-3 mb-2 w-[150px] justify-between">
        <button className="text-xl text-black rounded" onClick={handleUndo}>
          <RiArrowGoBackFill />
        </button>
        <button className=" text-xl text-black rounded" onClick={handleRedo}>
          <RiArrowGoForwardFill />
        </button>
        <button className=" text-xl text-black rounded" onClick={handleClear}>
          <GrClear />
        </button>
        <button className=" text-xl text-black rounded" onClick={handleCopy}>
          <MdOutlineContentCopy />
        </button>
      </div>
      <EditorToolbar />
      <ReactQuill
        // style={{ fontSize: "40px" }}
        style={{ fontSize: "40px", fontFamily: "Montserrat" }}
        className=" h-96 text-lg"
        theme="snow"
        value={text}
        onChange={handleChangeQuill}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
        ref={quillRef}
      />
    </div>
  );
};

export default Editor;
